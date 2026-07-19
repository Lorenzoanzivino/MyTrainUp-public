# backend/Dockerfile
FROM python:3.10-slim

WORKDIR /app

# Copia i requirements e installa le dipendenze
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia tutto il codice del backend
COPY . .

# Espone la porta 5000 (quella impostata nel tuo app.py)
EXPOSE 5000

# Esegue prima lo script di seeding per popolare SQLite, poi avvia Flask
CMD ["sh", "-c", "python seed_demo.py && python app.py"]