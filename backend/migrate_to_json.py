import sqlite3
import json
import re


def migrate():
    # Ci colleghiamo al database locale
    conn = sqlite3.connect("fitplanner.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # Recuperiamo gli esercizi che non hanno ancora il JSON (per non sovrascrivere dati già pronti)
    exercises = cursor.execute(
        """
        SELECT id, name, sets_reps, recovery, kg_target 
        FROM exercises 
        WHERE config_json IS NULL OR config_json = '' OR config_json = '[]'
    """
    ).fetchall()

    print(f"--- Analisi: {len(exercises)} esercizi da convertire ---")

    count = 0
    for ex in exercises:
        sets = 0
        reps = "0"

        # Logica di estrazione (es. "3x12" -> sets: 3, reps: 12)
        if ex["sets_reps"]:
            match = re.search(r"(\d+)\s*[xX*]\s*(\d+)", ex["sets_reps"])
            if match:
                sets = int(match.group(1))
                reps = match.group(2)
            else:
                reps = ex[
                    "sets_reps"
                ]  # Formato non standard, lo salviamo come testo nelle reps

        # Creiamo la struttura JSON (una lista di oggetti, uno per ogni serie)
        num_sets = sets if sets > 0 else 1
        config_list = []
        for _ in range(num_sets):
            config_list.append(
                {
                    "reps": str(reps),
                    "kg": str(ex["kg_target"]) if ex["kg_target"] else "",
                    "rest": str(ex["recovery"]) if ex["recovery"] else "",
                    "type": "normal",
                }
            )

        config_json_str = json.dumps(config_list)

        # Aggiorniamo la colonna config_json lasciando intatte le altre
        cursor.execute(
            "UPDATE exercises SET config_json = ? WHERE id = ?",
            (config_json_str, ex["id"]),
        )
        count += 1

    conn.commit()
    conn.close()
    print(f"--- Fatto! {count} esercizi aggiornati con successo ---")


if __name__ == "__main__":
    migrate()
