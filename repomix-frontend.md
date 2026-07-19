This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: **/node_modules/**, **/dist/**, **/.git/**, **/package-lock.json
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
public/
  foto_sfondo_pesi.jpg
  logo1.png
  Sleeping-Kitty.svg
src/
  api/
    auth.js
    clients.js
    config.js
    exercises.js
    folders.js
    gamification.js
    logs.js
    notifications.js
    payments.js
    schedules.js
    workouts.js
  components/
    ClientArea/
      ActiveWorkoutTimer.jsx
      CircuitWorkoutView.jsx
      ClientArea.jsx
      ClientScheduler.jsx
      ClientSetEngine.jsx
      ProfileTab.jsx
      RecoveryTimer.jsx
      StandardWorkoutView.jsx
      WorkoutFeedback.jsx
      WorkoutTab.jsx
      YoutubeModal.jsx
    ClientSelector/
      ClientSelector.jsx
    Gamification/
      DailyQuests.jsx
      TrophyCase.jsx
      WeekendLoot.jsx
      XPBar.jsx
    shared/
      ClientHeader.jsx
      SetRow.jsx
      ValueBox.jsx
    TrainerDashboard/
      Payments/
        PaymentManager.jsx
      WorkoutBuilder/
        CircuitBuilder.jsx
        CircuitExerciseItem.jsx
        ExerciseItem.jsx
        StandardBuilder.jsx
        WorkoutCreator.jsx
        WorkoutHeader.jsx
      ClientMonitor.jsx
      TrainerDashboard.jsx
      TrainerLayout.jsx
      TrainerSidebar.jsx
    LoginForm.jsx
    Navbar.jsx
    NotificationDropdown.jsx
    ProtectedRoute.jsx
    SleepingCat.jsx
    TransitionGate.jsx
    VersionChecker.jsx
  context/
    AuthContext.jsx
  hooks/
    useFolders.js
    useGamification.js
    useWorkoutStore.js
  pages/
    ClientSchedulerPage.jsx
    PersonalAreaPage.jsx
    TrainerPage.jsx
  utils/
    circuitMapper.js
    exerciseMapper.js
    exerciseParser.js
    logUtils.js
  App.jsx
  index.css
  main.jsx
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="public/Sleeping-Kitty.svg">
<?xml version="1.0" encoding="utf-8"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1450 1829" enable-background="new 0 0 1450 1829" xml:space="preserve">
<g>
	<path fill="#FFFFFF" d="M1147.7512,160.9942c3.86,11.57-2.7899,20.03-13.0399,24.72c-13.12,6.96-26.3101,13.73-39.4,20.74
		c-5.5701,2.98-11.12,6-16.8,8.76c-0.34,0.17-13.23,5.12-8,6.84c13.92,7.95,55.0601,10.31,46.23,34.15
		c-5.3899,14.53-20.1,8.27-30.5699,4.5c-12.49-4.51-25.13-8.63-37.55-13.35c-9.47-3.6-24.86-5.97-31.78-13.82
		c-7.5-8.5-1.78-20.99,6.81-25.89c13.35-7.36,26.5601-15,39.99-22.22c5.66-3.03,26.7101-9.82,28.8301-15.12
		c-14.8601-9.15-49.8-7.12-42.9501-31.66c0.02-0.06,0.04-0.13,0.0601-0.19c0.01-0.04,0.0299-0.08,0.0399-0.12
		c0.0901-0.3,0.2201-0.7,0.3401-1.1c0.0199-0.04,0.0299-0.08,0.0399-0.11c5.01-13.93,19.53-7.98,29.8201-4.09
		c11.36,4.28,22.88,8.15,34.34,12.3C1124.7612,149.1742,1140.2712,152.0442,1147.7512,160.9942z"/>
	<path d="M1379.1713,1439.6241c1.9301,83.15,8.83,166.96-1.29,249.87c-2.15,17.66-5.12,37.46-11.98,54
		c-6.37,15.36-12.63,36.34-27.0499,46.37c-30.9701,31.16-72.3,3.34-93.3701-23.9c-24.1299-31.22-32.0199-70.1799-38.2999-108.22
		c-6.88-41.65-8.8-84.95-9.13-127.15c-0.66-85.5499,0.85-171.0199,0.02-256.59c-0.39-39.71-2.29-86.33-28.35-118.91
		c-27.4301-34.2999-63.65-38.0399-104.54-26.5299c-18.59,5.24-37.6801,12.1599-56.98,13.72c-23.36,1.89-46.73,2.03-70.18,2.24
		c-20.64,0.1799-41.4-0.73-61.92-2.97c-9.49-1.04-19.03-2.8301-28.62-2.67c-10.7,0.1801-21.49,4.73-32.28,5.9401
		c-41.48,4.6799-84.43,6.24-126.18,6.3999c-19.89,0.0801-40.06,0.5601-59.52-4.22c-8.79-1.2-17.5-3.47-25.47-7.4299
		c-11.3-5.6101-13.01-1.05-23.38,4.5299c-17.65,9.51-31.54,4.2101-49.09-1.37c-8.52-2.71-15.3,4.27-23.29,6.23
		c-9.72,2.39-21.58,2.27-30.46-2.48c-10.67-5.72-11.36-3.38-22.12,1.41c-8.87,3.9399-18.58,6.01-28.29,5.9
		c-9.16,0.08-17.27-4.91-24.54-9.91c-10.4-6.89-12.11-14.45-25.29-10.71c-39.86,11.3099-81.34-8.37-95.41-47.6801
		c-6.8-19.03-7.26-41.79-3.06-61.39c2.27-10.59,6.32-14.78-2.67-22.04c-9.39-7.59-18.66-15.21-27.2-23.76
		c-56.36-56.37-88.06-130.79-86.89-210.72c0.14-9.78-0.09-20.4,2.13-29.98c2.31-9.92,0.58-15.25-7.13-22.2401
		c-15.85-16.21-32-31.48-45.92-49.56c-16.72-21.73-57.73-65.15-40.57-95.15c8.14-14.23,33.2-21.82,48.45-22.82
		c21.08-1.39,42.29-5.02,63.53-6.54c21.06-1.5,42.22-1.6,63.33-2.0601c9.32-0.2,18.66-0.2,27.98-0.43
		c4.92,0.38,17.92-16.24,22.07-19.61c62.14-50.6,137.68-87.78,216.19-104.39c20.46-4.33,41.19-7.03,61.93-9.56
		c9.23-1.12,18.52-1.23,27.77-2.07c8.54-0.92,16.07-14.56,20.74-20.63c24.51-31.81,53.82-58.75,82.67-86.51
		c8.16-7.86,17.33-14.57,26.9301-20.58c15.12-8.67,33.58-17.4,49.85-5.32c16.14,11.97,22.65,33.16,25.61,52.12
		c6.47,41.52,12.59,83.18,17.56,124.94c1.01,8.47-1.72,23.53,6.62,27.23c8.13,3.62,15.37,8.92,22.27,14.47
		c15.7,12.6,27.53,26.92,40.21,42.3c23.92,29.04,40.43,72.69,46.11,109.6c1.78,9.5699,3.9,19.1,4.84,28.81
		c10.11-0.53,20.17,1.18,29.97,3.53c21.25,4.17,41.19,11.63,60.68,20.85c35.27,16.69,67.5,41.9,90.87,73.3701
		c23.87,32.14,41.8201,69.89,50.26,109.14c3.88,21.12,6.88,42.25,8.61,63.66c0.8,9.91,0.77,19.86,0.87,29.79
		c0.09,9.09,17.6801,15.15,25.25,20.04c68.34,44.11,120.8101,107.63,137.84,188.28c9.3101,44.08,14.89,88.33,20.1801,133.04
		C1375.0212,1353.3842,1378.1913,1397.2441,1379.1713,1439.6241z M1342.0713,1626.3842c1.85-13.28,0.61-27.37,0.6-40.74
		c0-5.9401,0.78-43.23-3.74-42.84c-0.01,0-0.01,0-0.01,0c-8.24,15.08-29.4301,21.1499-45.5699,20.45
		c-10.8401-0.33-20.51,0.04-31.05-3.02c-8.61-2.5-21.46-12.71-30.02-12.1799c4.34,12.1699,3.27,26.2799,3.9301,39
		c0.7799,14.9099,1.8999,29.77,3.37,44.63c1.21,12.1599,1.01,22.83,11.77,29.72c12.4199,7.89,28.0699,7.9299,42.2599,7.66
		c12.63-0.24,25.63-2.15,37.0801-7.75c5.98-2.92,11.3099-4.03,11.2999-11.0701
		C1341.9912,1642.2942,1341.8712,1634.3341,1342.0713,1626.3842z M1331.9213,1440.3541c10.21-3.98,7.78-7.5,6.9301-17.4399
		c-0.7101-8.35-0.3601-16.78-0.75-25.15c-0.3501-7.47,0.45-17.1899-2.01-24.3c-6.6901-0.34-14.5701,4.04-20.9401,5.8401
		c-14.24,4.01-30.51,4.71-45.17,2.49c-7.71-1.16-14.22-4.39-20.75-8.5c-4.75-2.98-10.0499-11.47-15.47-12.47
		c3.6901,14.0599,3.2101,30.6599,2.86,45.11c-0.23,9.26-0.63,18.5199-0.48,27.7899c0.13,8.38,2.4601,7.4601,7.8301,12.38
		C1263.8612,1464.3641,1310.0713,1448.8641,1331.9213,1440.3541z M1317.8313,1276.8641c9.01-8.52,8.76-10.84,8.1-22.77
		c-0.5701-10.1499-2.04-20.24-4.04-30.2c-0.71-3.54-0.88-9.28-3.2999-12.2c-2.38-2.87-10.8,3.47-13.65,4.0499
		c-24.8,4.9401-47.9,6.0801-73.11,7.26c1.0699,9.8101-1.5601,55.54,6.62,57.85c17.5499,4.9501,34.6599,10.98,52.97,6.1901
		C1300.5012,1284.6642,1309.8013,1281.9941,1317.8313,1276.8641z M1285.1813,1118.1542c5.7999-5.46-26.59-47.9301-34.73-47.02
		c-1.1,22.41-23.65,39.4-40.65,51.46c-10.37,7.3501-14.89,8.16-7.36,19.42c3.58,5.37,6.5699,11.1,9.62,16.79
		c1.3099,3.23,11.52,0.37,13.64,0.0499C1248.2913,1155.5142,1270.7813,1134.7842,1285.1813,1118.1542z M1174.8413,1026.9442
		c3.63-8.11,8.0199-12.92-0.6001-17.84c-6.9099-3.95-13.5499-8.38-20.6799-11.9301c-9.4301-5.55-6.51-11.71-5.5801-21.84
		c0.7401-8.1,1.3701-16.06,1.17-24.21c-0.27-10.89,2.59-18.19-9.41-19.63c-13.9099-1.67-32.38-5.09-43.7-13.8
		c-15.26-14.1,0.05-21.44,11.6-27.83c6.78-3.7599,12.4301-10.11,18.3101-15.1c9-7.65,12.13-8.87,7.87-20.69
		c-3.38-9.43-3.4-9.29-11.92-6.11c-9.42,3.94-18.9,7.78-28.64,10.84c-9.6599,3.04-32,10.32-35.9399-4.28
		c-3.4301-12.65,14.86-28.39,20.23-38.8c5.09-9.88,18.65-30.26,10.6799-39.7c-3.34-3.96-6.24-8.88-11.6299-9.69
		c-5.4401,7.25-11.55,13.15-18.29,19.15c-11.67,10.39-23.8101,21.6801-38.9901,26.63c-21.4,6.9901-15.59-13.25-9.24-25.31
		c8.06-15.31,9.59-33.85,11.15-50.83c0.3-3.28,0.58-6.55,0.85-9.82c-4.82-1.58-9.52-3.5-14.22-5.39c-7.53-3.04-16.46-7.75-24.8-6.81
		c-3.12,25.03-10.08,54.17-28.08,72.99c-5.13,5.4-19.23,21.22-25.36,8.3c-5.71-12.04,1.37-28.13-0.85-40.84
		c-14.28,31.86-23.68,64.52-43.44,93.94c-3.02,6.07,4.19,8.08,8.15,11.89c6.86,5.51,13,14.1,18.13,21.22
		c10.16,14.11,16.88,30.99,21.43,47.71c2.44,8.99,6.23,40.35-10.57,22.69c-11.61-12.21-21.98-25.34-34.76-36.41
		c-3.69-3.19-34.21-29.03-37.32-23.06c-8.16,12.68-22.95,21.79-29.98,34.85c17.66,11.85,32.82,21.53,43.82,40.75
		c3.2,5.59,11.29,23.1201,2.39,27.44c-7.75,3.76-17.11-5.58-21.9-10.28c-13.67-13.4-28.11-22.21-46.4-28.24
		c-11.73-3.86-13.97,0.47-22.93,7.71c-4.03,3.25-18.64,10.25-19.33,15.76c7.82,3.18,18.18,8.29,23.1,15.42
		c4.8,6.9399,1.06,13.29-6.82,14.0699c-19.98,1.9901-40.05,3.15-59.94,6.02c-35.66,5.14-80.04,17.86-88.62,58.97
		c-3.14,15.05-0.8,36.6801,20.39,34c19.09-2.4099,18.17-34,35.51-37.96c13.06-2.98,20.08,23.92,26.06,31.62
		c14.04,18.05,31.74-0.13,42.78-10.98c5.19-5.11,12.3-14.65,19.7-16.5801c9.3-2.4199,10.94,6.9901,13.46,13.14
		c8.13,19.8101,30.6,18.17,47.35,11.3201c8.25-3.37,16.03-7.86,23.13-13.23c4.49-2.9,15.29-15.92,20.35-7.9
		c3.76,7.4199,4.34,16,3.42,24.15c9.77,4.34,25.54,3.1699,36.13,3.7999c40.81,2.4301,85.24,4.12,125.1-6.22
		c16.09-4.17,28.8-13.04,45.91-15.09c9.72-1.16,19.53-0.8,29.2999-0.6801c5.77,0.84,21.86,5.9,26.42,0.5801
		c9.85-11.4501,17.78-23.6101,24.84-36.89C1167.3812,1040.8842,1171.5613,1034.2642,1174.8413,1026.9442z M891.7612,625.9341
		c4.83-2.88,8.53-3.61,6.8-9.57c-1.93-6.65-4.18-13.48-7.05-19.78c-3.39-7.45-11.4,1.11-16.72,4.26
		c-6.46,4.13-13.43,7.36-20.34,10.63c-10.73,5.08-26.22,12.62-38.48,10.21c-16.62-3.28-0.27-27.06,4.27-34.17
		c7.89-12.34,17.01-23.85,26.75-34.77c3.9-4.38,12.52-9.81,8.45-15.71c-3.71-5.37-9.03-10-13.83-14.37
		c-10.63-9.69-23.25-17.87-36.2-24.08c-6.97-3.35-11.76-2.64-11.9-11.02c-0.14-8.42-0.48-16.8-1.43-25.17
		c-3.69-32.26-8.26-64.44-11.79-96.71c-1.73-15.78-6.3-87.77-35.07-61.47c-29.45,27.92-56.99,58.14-85.13,87.38
		c-13.81,14.34-28.29,28.1-41.36,43.14c-7,6.76-12.41,4.69-21.66,4c-9.18-0.69-26.8799-0.57-34.91,4.55
		c19.34,15.9,35.53,41.96,40.54,66.46c5.42,18.79,1.4,64.07-27.95,45.29c-22.42-14.35-37.62-41.62-55.26-61.12
		c-9.67-10.68-19.42-21.28-29.41-31.65c-8.39-8.7-25.3,1.12-35.54,4.83c3.16,8.26,11.7,15.95,16.78,23.28
		c5.03,7.52,9.54,14.96,13.56,23.08c9.68,19.51,12.46,39.09,12.88,60.64c0.14,7.41,0.33,50.74-18.52,37.32
		c-16.24-9.4-25.2-31.64-36.67-45.88c-12.64-15.68-26.78-30.85-41.7-44.38c-6.2-5.62-12.64-14.55-20.27-18.18
		c-5.01-2.39-21.33,11.78-25.57,14.67c-1.78,1.21-18.46,12.16-15.7,13.77c7.49,6.2,15.61,11.61,22.99,17.97
		c15.71,12.93,32.9,28.12,42,46.64c6.68,13.59,15.36,39.73,3.95,53.27c-13.74,12.39-32.64-15.26-39.87-23.94
		c-11.63-13.97-27.34-26.09-42.11-36.6c-8.02-5.71-15.92-11.67-24.25-16.95c-12.23-7.7599-9.94,3.18-21.56,3.42
		c-10.57,0.22-21.29-1.89-31.98-1.86c-11.04,0.02-22.08,0.28-33.12,0.61c-21.72,0.65-43.34,2.23-65.04,3.2
		c-8.86,1.64-49.13-0.58-47.91,13.95c0.66,7.89,7.82,13.17,11.59,19.53c6.39,9.35,12.98,18.56,19.9,27.54
		c12.19,15.82,25.46,30.65,38.8,45.5c6.27,6.98,12.32,14.13,18.62,21.08c4.55,5.03,16.23,13.61,14.54,21.22
		c-9.43,42.35-10.36,85.29,3.75,126.87c3.23,9.5,6.95,19.1,11.1,28.22c1.62,3.56,3.64,6.92,5.56,10.33c4.06,5.98,7.86,3.75,14.52,3
		c22.61-2.54,45.39-3.16,68.13-2.94c8.35,0.08,17.61-0.7401,24.76,4.5c7.01,5.49-5.24,13.84-9,16.68
		c-16.24,13.94-36.4,22.08-53.34,34.87c4.23,6.82,28.86,32.73,36.76,25.22c12.57-11.93,27.52-21.37,42.92-29.29
		c7.06-3.63,15.81-8.55,24.06-6.07c7.02,3.38,3.6,15.99,2.8,21.65c-1.4,10.02-5.37,20.17-9.03,29.55
		c-1.62,4.18-3.55,8.23-4.91,12.51c-2.2,6.91,3.08,6.02,8.68,7.99c78.17,27.4901,167.02,22.46,246.32,3.02
		c74.08-18.17,139.1-57.79,192.47-111.67c54.65-55.19,99.98-129.33,100.13-209.44c-14.2,1.25-28.57,1.93-42.83,1.53
		c-9.92-0.28-38.98,0.66-42.21-12.43c-3.48-11.03,15.91-22.64,22.94-27.58C863.1713,642.9042,877.4012,634.5142,891.7612,625.9341z
		 M566.3412,1104.6842c10.77-14.61,16.79-28.6801,9.03-46.55c-3.44-7.92-5.25-12.25-14.16-10.74c-10.23,1.72-20.54,2.88-30.87,3.63
		c-18.97,1.38-38,1.41-57,1.14c-17.77-0.5601-35.64-1.63-53.09-5.14c-7.97-1.6-15.9-3.45-23.89-4.96
		c-11.69-2-13.36,0.1699-23.09,6.6899c-6.79,4.5601-13.34,11.14-21.38,13.4c-11.85,3.33-10.4-8.37-10.35-16.36
		c0.03-6.53,4.81-19.53-1.82-23.2401c-3.43-1.92-15.57-9.17-19.41-6.22c-8.66,8.92-8.96,34.89-8.03,46.3
		c1.36,16.49,10.83,30.6901,27.23,35.4c16.08,4.61,36.33,0.76,51-6.59c4.96-2.2001,10.59-6.4401,13.8,0.0599
		c2.79,7.46,8.49,15.41,14.66,20.36c15.55,12.48,26.79,1.99,37.53-10.65c5.77-6.7999,30.11-27.9399,30.23-5.8899
		c-0.3,7.3899-0.62,12.6,5.34,17.98c6.89,6.22,18.06-2.54,24.53-5.74c5.53-2.28,12.82-42.7201,26.47-19.92
		c2.59,6.96-3.1,16.99,3.45,21.52C556.1113,1115.7742,559.9113,1113.4042,566.3412,1104.6842z"/>
	<path fill="#FFFFFF" d="M1342.6713,1585.6442c0.01,13.37,1.25,27.46-0.6,40.74c-0.2001,7.95-0.0801,15.91-0.0801,23.86
		c0.01,7.04-5.3199,8.15-11.2999,11.0701c-11.4501,5.6-24.4501,7.51-37.0801,7.75c-14.1899,0.2699-29.84,0.23-42.2599-7.66
		c-10.76-6.89-10.5601-17.5601-11.77-29.72c-1.4701-14.86-2.5901-29.7201-3.37-44.63c-0.66-12.7201,0.4099-26.8301-3.9301-39
		c8.5601-0.53,21.41,9.6799,30.02,12.1799c10.54,3.0601,20.21,2.6901,31.05,3.02c16.1399,0.7,37.33-5.37,45.5699-20.45
		c-2.76,5.0499,0.49,0,0.01,0C1343.4513,1542.4142,1342.6713,1579.7041,1342.6713,1585.6442z"/>
	<path d="M1338.9313,1542.8042c0.48,0-2.77,5.0499-0.01,0C1338.9213,1542.8042,1338.9213,1542.8042,1338.9313,1542.8042z"/>
	<path fill="#FFFFFF" d="M1338.8513,1422.9142c0.85,9.9399,3.2799,13.46-6.9301,17.4399c-21.85,8.51-68.0601,24.01-87.95,5.75
		c-5.37-4.9199-7.7001-4-7.8301-12.38c-0.15-9.27,0.25-18.5299,0.48-27.7899c0.3501-14.4501,0.8301-31.05-2.86-45.11
		c5.42,1,10.72,9.49,15.47,12.47c6.53,4.11,13.04,7.34,20.75,8.5c14.66,2.22,30.9301,1.52,45.17-2.49
		c6.37-1.8,14.25-6.1801,20.9401-5.8401c2.46,7.1101,1.6599,16.8301,2.01,24.3
		C1338.4912,1406.1342,1338.1412,1414.5642,1338.8513,1422.9142z"/>
	<path fill="#FFFFFF" d="M1325.9313,1254.0941c0.66,11.9301,0.91,14.25-8.1,22.77c-8.03,5.13-17.3301,7.8-26.41,10.1801
		c-18.3101,4.7899-35.42-1.24-52.97-6.1901c-8.1801-2.3099-5.55-48.0399-6.62-57.85c25.21-1.1799,48.3099-2.3199,73.11-7.26
		c2.85-0.58,11.27-6.9199,13.65-4.0499c2.4199,2.9199,2.59,8.6599,3.2999,12.2
		C1323.8912,1233.8541,1325.3612,1243.9442,1325.9313,1254.0941z"/>
	<path fill="#FFFFFF" d="M1250.4513,1071.1342c8.14-0.91,40.5299,41.5601,34.73,47.02c-14.4,16.63-36.89,37.36-59.48,40.7
		c-2.12,0.3201-12.3301,3.1801-13.64-0.0499c-3.05-5.6901-6.04-11.42-9.62-16.79c-7.53-11.26-3.01-12.0699,7.36-19.42
		C1226.8013,1110.5342,1249.3513,1093.5442,1250.4513,1071.1342z"/>
	<path d="M1050.2512,136.3042c-0.0699,0.23-0.1899,0.58-0.35,1.1c-0.0499,0.16-0.11,0.32-0.16,0.49c-0.1499,0.5-0.23,0.76-0.25,0.84
		c0.01-0.02,0.02-0.05,0.03-0.09c-6.85,24.54,28.09,22.51,42.9501,31.66c-2.12,5.3-23.17,12.09-28.8301,15.12
		c-13.4299,7.22-26.64,14.86-39.99,22.22c-8.59,4.9-14.31,17.39-6.81,25.89c6.92,7.85,22.31,10.22,31.78,13.82
		c12.42,4.72,25.0601,8.84,37.55,13.35c10.47,3.77,25.1801,10.03,30.5699-4.5c8.8301-23.84-32.3099-26.2-46.23-34.15
		c-5.23-1.72,7.66-6.67,8-6.84c5.6801-2.76,11.23-5.78,16.8-8.76c13.09-7.01,26.28-13.78,39.4-20.74
		c10.25-4.69,16.8999-13.15,13.0399-24.72c-7.48-8.95-22.99-11.82-33.59-15.66c-11.46-4.15-22.98-8.02-34.34-12.3
		c-10.29-3.89-24.8101-9.84-29.8201,4.09C1050.1013,136.8142,1050.1913,136.5142,1050.2512,136.3042z M1266.4012,137.0142
		c28.23,70.18,3.55,157.06-60.24,199.16c-13.5,8.17-26.05,15.79-40.2,22.88c-17.8401,8.93-40.7001,12.1-60.4,12.99
		c-40.55,1.84-76.85-8.05-110.57-30.56c-7.65-5.11-14.8-11.34-21.45-17.7c-6.86-6.57-7.93-12.3-17.3-8.18
		c-11.61,5.09-47.11,7.83-32.5-14.65c4.81-7.41,12.88-10.98,18.15-17.64c-0.56-7.38-6.87-16.05-9.22-23.18
		c-6.81-20.6-9.76-41.12-10.54-62.78c2.27-22.15,5.4399-40.57,12.8-61.55c8.12-23.15,24.2-40.88,39.65-59.24
		c26.63-31.34,72.79-46.17,112.09-50.97c20.23-0.6,38.95-0.17,58.64,4.79c19.83,5,37.0599,13.51,54.24,24.26
		C1230.6913,74.1442,1252.8213,103.2542,1266.4012,137.0142z M1152.5913,35.4142
		C1152.7213,38.8742,1155.4213,33.8042,1152.5913,35.4142L1152.5913,35.4142z"/>
	<path fill="#FFFFFF" d="M1174.2412,1009.1042c8.62,4.92,4.2301,9.73,0.6001,17.84c-3.28,7.3199-7.4601,13.9399-11.2101,20.99
		c-7.0599,13.2799-14.99,25.4399-24.84,36.89c-4.5601,5.3199-20.65,0.2599-26.42-0.5801c-9.7699-0.12-19.58-0.48-29.2999,0.6801
		c-17.11,2.0499-29.8201,10.9199-45.91,15.09c-39.86,10.34-84.29,8.65-125.1,6.22c-10.59-0.63-26.36,0.54-36.13-3.7999
		c0.92-8.15,0.34-16.7301-3.42-24.15c-5.06-8.02-15.86,5-20.35,7.9c-7.1,5.37-14.88,9.86-23.13,13.23
		c-16.75,6.85-39.22,8.49-47.35-11.3201c-2.52-6.1499-4.16-15.5599-13.46-13.14c-7.4,1.9301-14.51,11.4701-19.7,16.5801
		c-11.04,10.85-28.74,29.03-42.78,10.98c-5.98-7.7-13-34.6-26.06-31.62c-17.34,3.96-16.42,35.55-35.51,37.96
		c-21.19,2.6801-23.53-18.95-20.39-34c8.58-41.11,52.96-53.83,88.62-58.97c19.89-2.87,39.96-4.03,59.94-6.02
		c7.88-0.78,11.62-7.13,6.82-14.0699c-4.92-7.13-15.28-12.2401-23.1-15.42c0.69-5.51,15.3-12.51,19.33-15.76
		c8.96-7.24,11.2-11.5699,22.93-7.71c18.29,6.03,32.73,14.84,46.4,28.24c4.79,4.7,14.15,14.04,21.9,10.28
		c8.9-4.3199,0.81-21.85-2.39-27.44c-11-19.22-26.16-28.9-43.82-40.75c7.03-13.06,21.82-22.17,29.98-34.85
		c3.11-5.97,33.63,19.87,37.32,23.06c12.78,11.07,23.15,24.2,34.76,36.41c16.8,17.66,13.01-13.7,10.57-22.69
		c-4.55-16.72-11.27-33.6-21.43-47.71c-5.13-7.12-11.27-15.71-18.13-21.22c-3.96-3.81-11.17-5.8199-8.15-11.89
		c19.76-29.42,29.16-62.08,43.44-93.94c2.22,12.71-4.86,28.8,0.85,40.84c6.13,12.92,20.23-2.9,25.36-8.3
		c18-18.82,24.96-47.96,28.08-72.99c8.34-0.94,17.27,3.77,24.8,6.81c4.7,1.89,9.4,3.81,14.22,5.39c-0.27,3.27-0.55,6.54-0.85,9.82
		c-1.56,16.98-3.09,35.52-11.15,50.83c-6.35,12.06-12.16,32.3,9.24,25.31c15.18-4.95,27.32-16.24,38.9901-26.63
		c6.74-6,12.85-11.9,18.29-19.15c5.3899,0.81,8.2899,5.73,11.6299,9.69c7.9701,9.44-5.59,29.82-10.6799,39.7
		c-5.37,10.41-23.66,26.15-20.23,38.8c3.9399,14.6,26.28,7.32,35.9399,4.28c9.74-3.06,19.22-6.9,28.64-10.84
		c8.52-3.18,8.54-3.32,11.92,6.11c4.26,11.82,1.13,13.04-7.87,20.69c-5.88,4.99-11.53,11.34-18.3101,15.1
		c-11.5499,6.39-26.86,13.73-11.6,27.83c11.3199,8.71,29.79,12.13,43.7,13.8c12,1.44,9.14,8.74,9.41,19.63
		c0.2001,8.15-0.4299,16.11-1.17,24.21c-0.9299,10.13-3.85,16.29,5.5801,21.84
		C1160.6913,1000.7242,1167.3313,1005.1542,1174.2412,1009.1042z"/>
	<path d="M1049.9012,137.4042c0.02-0.06,0.04-0.12,0.0601-0.17c-0.12,0.4-0.25,0.8-0.3401,1.1c0.03-0.14,0.0701-0.29,0.12-0.44
		C1049.7913,137.7242,1049.8513,137.5642,1049.9012,137.4042z"/>
	<path fill="#FFFFFF" d="M540.0313,704.4042c0.26-0.06,1.32-0.36,3.71-1.03c-15.71,4.61-63.69,25.73-25.21,36.61
		c8.33,2.36,16.02,2.57,24.61,2.65c2.9901,5.09,5,10.69,6.54,16.37c1.17,4.32,2.11,9.17,2.51,14.12c0.58,7.32-0.02,14.83-2.82,21.09
		c-2.6,5.8-8.04,10.85-13.88,13.3c-5.26,2.21-12.65-0.78-16.27,3.96c-9.21,12.06,6.79,13.46,15,11.31
		c12.98-3.4,21.96-10.91,27.95-22.7c4.38-8.01,1.67-18.02,0.97-27.17c-0.18-2.39-0.23-4.73,0.03-6.95
		c6.02,1.15,11.71,7.59,17.24,10.33c5.34,2.25,11.19,3.17,16.97,2.91c11.9399-0.53,22.4399-6.13,32.22-12.52
		c6-3.92,18.91-14.3,6.23-19.97c-5.44-1.96-19.86,12.62-24.27,15.88c-21.33,13.89-43.7401-8.15-54.89-24.39
		c-5.5-8.02,5.11-20.54,8.51-28.08c6.07-11.2-15.71-8.32-20.61-6.98c0.36-0.11,0.58-0.18,0.6801-0.22
		C544.6412,703.0742,540.5712,704.2441,540.0313,704.4042z M735.0912,383.5641c0.19-0.12,1.51-1.08,4.84-3.59
		c-16.52,12.51-32.02,26.46-47.97,39.65c-5.11,4.23-19.18,9.25-7.31,14.08c8.81,3.58,18.26,5.64,27.37,8.28
		c10.79,3.13,22.07,7.88,33.14,9.71c9.26,1.54,3.73-13.37,2.91-18.55c-1.9-12-3.41-24.16-4.7-36.25
		c-0.19-1.82,0.07-19.78-2.62-17.55C741.1913,378.8342,735.4213,383.2442,735.0912,383.5641z M898.5613,616.3641
		c1.73,5.96-1.97,6.69-6.8,9.57c-14.36,8.58-28.59,16.97-42.3,26.58c-7.03,4.94-26.42,16.55-22.94,27.58
		c3.23,13.09,32.29,12.15,42.21,12.43c14.26,0.4,28.63-0.28,42.83-1.53c-0.15,80.11-45.48,154.25-100.13,209.44
		c-53.37,53.88-118.39,93.5-192.47,111.67c-79.3,19.44-168.15,24.47-246.32-3.02c-5.6-1.97-10.88-1.08-8.68-7.99
		c1.36-4.28,3.29-8.33,4.91-12.51c3.66-9.38,7.63-19.53,9.03-29.55c0.8-5.66,4.22-18.27-2.8-21.65c-8.25-2.48-17,2.44-24.06,6.07
		c-15.4,7.92-30.35,17.36-42.92,29.29c-7.9,7.51-32.53-18.4-36.76-25.22c16.94-12.79,37.1-20.93,53.34-34.87
		c3.76-2.84,16.01-11.19,9-16.68c-7.15-5.2401-16.41-4.42-24.76-4.5c-22.74-0.22-45.52,0.4-68.13,2.94
		c-6.66,0.75-10.46,2.98-14.52-3c-1.92-3.41-3.94-6.77-5.56-10.33c-4.15-9.12-7.87-18.72-11.1-28.22
		c-14.11-41.58-13.18-84.52-3.75-126.87c1.69-7.61-9.99-16.19-14.54-21.22c-6.3-6.95-12.35-14.1-18.62-21.08
		c-13.34-14.85-26.61-29.68-38.8-45.5c-6.92-8.98-13.51-18.19-19.9-27.54c-3.77-6.36-10.93-11.64-11.59-19.53
		c-1.22-14.53,39.05-12.31,47.91-13.95c21.7-0.97,43.32-2.55,65.04-3.2c11.04-0.33,22.08-0.59,33.12-0.61
		c10.69-0.03,21.41,2.08,31.98,1.86c11.62-0.2401,9.33-11.18,21.56-3.42c8.33,5.28,16.23,11.2401,24.25,16.95
		c14.77,10.51,30.48,22.63,42.11,36.6c7.23,8.68,26.13,36.33,39.87,23.94c11.41-13.54,2.73-39.6801-3.95-53.27
		c-9.1-18.52-26.29-33.71-42-46.64c-7.38-6.36-15.5-11.77-22.99-17.97c-2.76-1.61,13.92-12.56,15.7-13.77
		c4.24-2.89,20.56-17.06,25.57-14.67c7.63,3.63,14.07,12.56,20.27,18.18c14.92,13.53,29.06,28.7,41.7,44.38
		c11.47,14.24,20.43,36.48,36.67,45.88c18.85,13.42,18.66-29.91,18.52-37.32c-0.42-21.55-3.2-41.13-12.88-60.64
		c-4.02-8.12-8.53-15.56-13.56-23.08c-5.08-7.33-13.62-15.02-16.78-23.28c10.24-3.71,27.15-13.53,35.54-4.83
		c9.99,10.37,19.74,20.97,29.41,31.65c17.64,19.5,32.84,46.77,55.26,61.12c29.35,18.78,33.37-26.5,27.95-45.29
		c-5.0099-24.5-21.2-50.56-40.54-66.46c8.03-5.12,25.73-5.24,34.91-4.55c9.25,0.69,14.66,2.76,21.66-4
		c13.07-15.04,27.55-28.8,41.36-43.14c28.14-29.24,55.68-59.46,85.13-87.38c28.77-26.3,33.34,45.69,35.07,61.47
		c3.53,32.27,8.1,64.45,11.79,96.71c0.95,8.37,1.29,16.75,1.43,25.17c0.14,8.38,4.9301,7.67,11.9,11.02
		c12.95,6.21,25.57,14.39,36.2,24.08c4.8,4.37,10.12,9,13.83,14.37c4.0699,5.9-4.55,11.33-8.45,15.71
		c-9.74,10.92-18.86,22.43-26.75,34.77c-4.54,7.11-20.89,30.89-4.27,34.17c12.26,2.41,27.75-5.13,38.48-10.21
		c6.91-3.27,13.88-6.5,20.34-10.63c5.32-3.15,13.33-11.71,16.72-4.26C894.3813,602.8842,896.6313,609.7142,898.5613,616.3641z
		 M762.6913,592.3242c1.17-7.17,6.12-11.06,0.33-18.42c-4.48-5.69-11.71-6.47-18.33-5.18c-6.69,2.7599-6.9901,11.41-9.17,17.19
		c-2.64,7.02-7.56,13.14-12.66,18.52c-10.77,11.33-26.71,21.36-42.54,23.02c-7.33,0.77-18.1299,1.69-23.61-4.43
		c-4.29-4.43-11.61-7-17.54-4.38c-13.95,6.16-8.71,22.57,1.52,28.81c31.43,19.16,68.44,5.43,94.85-15.65
		C747.4012,622.3342,760.1613,607.7642,762.6913,592.3242z M416.7813,771.6042c0.8-6.3701,5.08-9.15,2.27-16.09
		c-3.01-7.45-10.64-10.69-18.4-8.94c3.51-0.79-3.21,0.48,0,0c-8.37,1.25-9.53,12.67-11.95,19.07c-2.72,7.18-7.62,13.2-13.02,18.63
		c-10.39,10.45-28.33,21.89-43.51,22.02c-8.17,0.08-18.05,1.24-23.84-5.9c-3.56-4.48-11.5-6.13-16.48-2.55
		c-12.75,9.13-6.71,23.6,4.89,30.14c30.97,15.2401,66.2,5.9,91.71-16.3C399.6812,801.9142,414.8213,787.1342,416.7813,771.6042z
		 M223.1513,638.3641c2.45-8.13,8.52-18.78,7.78-27.46c-23.02-1.07-45.87,3.62-68.89,2.6c0,0.01,0,0.03,0,0.04
		c-0.34,9.39,20.92,24.47,27.05,30.66c4.7,4.75,9.39,9.51,14.02,14.34c2.92,3.04,5.65,8.95,9.21,11.18
		C217.1113,659.7142,219.9613,648.9442,223.1513,638.3641z"/>
	<path d="M763.0212,573.9042c5.79,7.36,0.84,11.25-0.33,18.42c-2.53,15.44-15.29,30.01-27.15,39.48
		c-26.41,21.08-63.42,34.81-94.85,15.65c-10.23-6.24-15.47-22.65-1.52-28.81c5.93-2.62,13.25-0.05,17.54,4.38
		c5.48,6.12,16.28,5.2,23.61,4.43c15.83-1.66,31.77-11.69,42.54-23.02c5.1-5.38,10.02-11.5,12.66-18.52
		c2.18-5.78,2.48-14.4301,9.17-17.19C751.3113,567.4341,758.5413,568.2142,763.0212,573.9042z"/>
	<path d="M748.0712,433.1442c0.82,5.18,6.35,20.09-2.91,18.55c-11.07-1.83-22.35-6.58-33.14-9.71c-9.11-2.64-18.56-4.7-27.37-8.28
		c-11.87-4.83,2.2-9.85,7.31-14.08c15.95-13.19,31.45-27.14,47.97-39.65c0.25-0.19,0.49-0.37,0.74-0.56
		c0.03-0.03,0.05-0.05,0.08-0.07c2.69-2.23,2.43,15.73,2.62,17.55C744.6613,408.9842,746.1713,421.1442,748.0712,433.1442z"/>
	<path d="M735.0912,383.5641c0.33-0.32,6.1-4.73,5.66-4.22c-0.03,0.02-0.05,0.04-0.08,0.07c-0.25,0.19-0.49,0.37-0.74,0.56
		C736.6013,382.4842,735.2813,383.4442,735.0912,383.5641z"/>
	<path fill="#FFFFFF" d="M575.3713,1058.1342c7.76,17.87,1.74,31.9401-9.03,46.55c-6.43,8.72-10.23,11.09-19.82,4.48
		c-6.55-4.53-0.86-14.5601-3.45-21.52c-13.65-22.8-20.9399,17.64-26.47,19.92c-6.47,3.2-17.64,11.96-24.53,5.74
		c-5.96-5.38-5.64-10.5901-5.34-17.98c-0.12-22.05-24.46-0.91-30.23,5.8899c-10.74,12.64-21.98,23.13-37.53,10.65
		c-6.17-4.95-11.87-12.9-14.66-20.36c-3.21-6.5-8.84-2.26-13.8-0.0599c-14.67,7.35-34.92,11.2-51,6.59
		c-16.4-4.71-25.87-18.91-27.23-35.4c-0.93-11.41-0.63-37.38,8.03-46.3c3.84-2.95,15.98,4.3,19.41,6.22
		c6.63,3.71,1.85,16.71,1.82,23.2401c-0.05,7.99-1.5,19.6899,10.35,16.36c8.04-2.26,14.59-8.84,21.38-13.4
		c9.73-6.52,11.4-8.6899,23.09-6.6899c7.99,1.51,15.92,3.36,23.89,4.96c17.45,3.51,35.32,4.58,53.09,5.14
		c19,0.27,38.03,0.24,57-1.14c10.33-0.75,20.64-1.91,30.87-3.63C570.1213,1045.8842,571.9313,1050.2141,575.3713,1058.1342z"/>
	<path d="M635.8313,746.7142c-5.4401-1.96-19.8601,12.62-24.27,15.88c-21.3301,13.89-43.74-8.15-54.89-24.39
		c-5.5-8.02,5.11-20.54,8.51-28.08c6.0699-11.2-15.7101-8.32-20.61-6.98c-0.0901,0.02-0.17,0.05-0.25,0.07
		c-0.1899,0.05-0.38,0.11-0.5801,0.16c-15.71,4.61-63.6899,25.73-25.21,36.61c8.3301,2.36,16.02,2.57,24.61,2.65
		c2.9901,5.09,5,10.69,6.54,16.37c1.17,4.32,2.11,9.17,2.51,14.12c0.58,7.32-0.02,14.83-2.8199,21.09
		c-2.6001,5.8-8.04,10.85-13.8801,13.3c-5.26,2.21-12.6499-0.78-16.27,3.96c-9.21,12.06,6.79,13.46,15,11.31
		c12.98-3.4,21.9601-10.91,27.9501-22.7c4.38-8.01,1.67-18.02,0.97-27.17c-0.1801-2.39-0.23-4.73,0.03-6.95
		c6.02,1.15,11.7101,7.59,17.24,10.33c5.34,2.25,11.1901,3.17,16.9701,2.91c11.9399-0.53,22.4399-6.13,32.22-12.52
		C635.6013,762.7642,648.5112,752.3842,635.8313,746.7142z"/>
	<path d="M545.2513,702.9241c-0.1,0.04-0.32,0.11-0.6801,0.22c-0.09,0.02-0.17,0.05-0.25,0.07c-0.1899,0.05-0.3799,0.11-0.58,0.16
		c-2.39,0.67-3.45,0.97-3.71,1.03C540.5712,704.2441,544.6412,703.0742,545.2513,702.9241z"/>
	<path d="M419.0513,755.5142c2.81,6.94-1.47,9.72-2.27,16.09c-1.96,15.53-17.1,30.31-28.33,40.08
		c-25.51,22.2-60.74,31.54-91.71,16.3c-11.6-6.54-17.64-21.0099-4.89-30.14c4.98-3.58,12.92-1.93,16.48,2.55
		c5.79,7.14,15.67,5.98,23.84,5.9c15.18-0.13,33.12-11.57,43.51-22.02c5.4-5.43,10.3-11.45,13.02-18.63
		c2.42-6.4,3.58-17.82,11.95-19.07C408.4113,744.8242,416.0413,748.0641,419.0513,755.5142z"/>
	<path d="M400.6512,746.5742C397.4413,747.0541,404.1613,745.7842,400.6512,746.5742L400.6512,746.5742z"/>
	<path d="M230.9313,610.9042c0.74,8.68-5.33,19.33-7.78,27.46c-3.19,10.58-6.04,21.35-10.83,31.36c-3.56-2.23-6.29-8.14-9.21-11.18
		c-4.63-4.83-9.32-9.59-14.02-14.34c-6.13-6.19-27.39-21.27-27.05-30.66c0,3.96,22.95,0.98,0-0.04
		C185.0613,614.5242,207.9113,609.8342,230.9313,610.9042z"/>
	<path d="M162.0413,613.5042c22.95,1.02,0,4,0,0.04C162.0413,613.5342,162.0413,613.5142,162.0413,613.5042z"/>
</g>
</svg>
</file>

<file path="src/api/auth.js">
// MyTrainUp Frontend: Servizi API per l'Autenticazione (auth.js)

import { fetchWrapper } from "./config";

/**
 * Invia una richiesta di login al backend.
 * @param {string} username - Lo username o l'email dell'utente
 * @param {string} password - La password dell'utente
 * @returns {Promise<Object>} - Il pacchetto dati con token, ruolo, nome e id
 */
export async function loginUser(username, password) {
  // Usiamo il fetchWrapper per coerenza con il resto dell'app.
  // Il wrapper gestisce già il controllo res.ok e il parsing del JSON.
  return fetchWrapper.post("/auth/login", {
    username,
    password,
  });
}

/**
 * Funzione per il reset della password (se implementata nel backend).
 */
export async function resetPassword(clientId) {
  return fetchWrapper.post("/auth/reset-password", {
    client_id: clientId,
  });
}
</file>

<file path="src/api/clients.js">
// MyTrainUp Frontend: Servizi API per la Gestione dei Clienti

// Questo file (clients.js) fornisce le funzioni di interfaccia per interagire con gli endpoint API del backend dedicati alla gestione della lista dei clienti, utilizzati principalmente dalla Dashboard del Trainer.

// Funzioni chiave:
// 1. fetchClients(): Invia una richiesta GET all'endpoint `/api/clients/` per recuperare l'elenco
// - completo dei clienti registrati nel sistema.
// 2. addClient(name): Invia una richiesta POST all'endpoint `/api/clients/` con il nome del nuovo
// - cliente. Il backend gestirà la generazione automatica dell'username e della password di default.
// - Restituisce i dati del nuovo cliente creato (incluso l'ID).
// - Entrambe le funzioni gestiscono il controllo dello stato HTTP e la propagazione degli errori.

import { API_URL } from "./config"; // <--- USIAMO QUELLO CENTRALE

export async function fetchClients() {
  try {
    const res = await fetch(`${API_URL}/clients`);
    if (!res.ok) throw new Error('Errore caricamento clienti');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function addClient(name) {
  try {
    const res = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    if (!res.ok) throw new Error('Errore aggiunta cliente');
    return await res.json(); // ritorna il nuovo cliente
  } catch (err) {
    console.error(err);
    return null;
  }
}
</file>

<file path="src/api/config.js">
// MyTrainUp Frontend: Configurazione API e Wrapper Fetch (config.js)

export const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/api";

console.log("🌍 API Environment:", API_URL);

/**
 * Utility per standardizzare le chiamate HTTP al backend.
 * Recupera automaticamente il token dal sessionStorage se presente.
 */
async function apiCall(method, url, body = null, providedToken = null) {
  const headers = {};

  // 1. Recupero AUTOMATICO del token
  // Se non passiamo un token alla funzione, lei prova a prenderlo da sola
  const token = providedToken || sessionStorage.getItem("fit_token");

  const config = {
    method,
    headers,
  };

  // 2. Impostazione Header Content-Type
  if (body) {
    headers["Content-Type"] = "application/json";
    config.body = JSON.stringify(body);
  }

  // 3. Aggiunta automatica dell'Authorization Header
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(API_URL + url, config);

    // 4. Gestione Errori di Autenticazione (401)
    if (response.status === 401) {
      console.warn("⚠️ Token scaduto o non valido. Reindirizzamento al login.");
      // Opzionale: sessionStorage.clear(); window.location.href = '/login';
    }

    if (!response.ok) {
      let errorMessage = `Errore HTTP ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch (e) {
        // Se non è JSON, usiamo il messaggio generico
      }
      throw new Error(errorMessage);
    }

    // 5. Gestione risposte vuote (204)
    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return {};
    }

    return await response.json();
  } catch (error) {
    console.error(`❌ Errore API [${method} ${url}]:`, error.message);
    throw error;
  }
}

/**
 * Esportazione del wrapper per un utilizzo semplificato nei moduli API
 */
export const fetchWrapper = {
  get: (url, token) => apiCall("GET", url, null, token),
  post: (url, body, token) => apiCall("POST", url, body, token),
  put: (url, body, token) => apiCall("PUT", url, body, token),
  patch: (url, body, token) => apiCall("PATCH", url, body, token),
  delete: (url, token) => apiCall("DELETE", url, null, token),
};
</file>

<file path="src/api/exercises.js">
// ! frontend/src/api/exercises.js
// MyTrainUp Frontend: Servizi API per la Gestione e Ricerca Esercizi (Supporto JSON)

import { fetchWrapper } from "./config";

/**
 * Salva una nota specifica per un esercizio (lato Trainer).
 * Utilizza la rotta PATCH del backend che aggiorna solo il campo note.
 * @param {number|string} exerciseId - ID dell'esercizio
 * @param {string} note - Il testo della nota
 */
export async function saveNote(exerciseId, note) {
  try {
    // Il backend si aspetta 'trainer_notes' nel corpo della richiesta PATCH
    return await fetchWrapper.patch(`/exercises/${exerciseId}/notes`, {
      trainer_notes: note,
    });
  } catch (err) {
    console.error("Errore salvataggio nota:", err);
    return false;
  }
}

/**
 * Cerca esercizi esistenti nel database per l'autocompletamento.
 * @param {string} query - Testo da cercare
 */
export const searchExercises = async (query) => {
  if (!query) return [];

  try {
    // Usiamo il wrapper per includere automaticamente il token
    return await fetchWrapper.get(
      `/exercises/search?q=${encodeURIComponent(query)}`
    );
  } catch (err) {
    // Se l'API di ricerca non esiste ancora sul server, evitiamo il crash
    console.warn("API Ricerca non trovata o non disponibile");
    return [];
  }
};
</file>

<file path="src/api/folders.js">
// MyTrainUp Frontend: Servizi API per la Gestione delle Cartelle (folders.js)

import { fetchWrapper } from "./config";

/**
 * Recupera le cartelle di un cliente.
 * Il fetchWrapper aggiungerà automaticamente l'Authorization Header col token.
 * @param {number|string} clientId - ID del cliente
 * @param {string|null} role - Ruolo opzionale per il filtraggio
 */
export async function fetchFolders(clientId, role = null) {
  let url = `/folders/${clientId}`;

  // Se viene specificato un ruolo (es. 'client'), lo aggiungiamo alla query string
  if (role) {
    url += `?role=${role}`;
  }

  // fetchWrapper gestisce internamente .json() e il lancio degli errori
  return fetchWrapper.get(url);
}

/**
 * Crea una nuova cartella per un cliente.
 */
export async function createFolder(clientId, name) {
  return fetchWrapper.post("/folders", {
    client_id: clientId,
    name,
  });
}

/**
 * Elimina una cartella specifica.
 */
export async function deleteFolder(folderId) {
  return fetchWrapper.delete(`/folders/${folderId}`);
}
</file>

<file path="src/api/gamification.js">
// frontend/src/api/gamification.js
import { fetchWrapper } from "./config";

const BASE_URL = "/gamification";

/**
 * Recupera le quest giornaliere, gli XP, il livello e il progresso del forziere.
 * Restituisce: { quests: [], xp: int, level: int, weekly_progress: int }
 */
export async function fetchDailyQuests(token) {
  // GET /api/gamification/quests
  return await fetchWrapper.get(`${BASE_URL}/quests`, token);
}

/**
 * Marca una quest come completata (o la deseleziona).
 * Restituisce i nuovi XP, il livello e il progresso aggiornato del forziere.
 */
export async function completeQuest(questId, token) {
  // POST /api/gamification/complete
  return await fetchWrapper.post(
    `${BASE_URL}/complete`,
    { quest_id: questId },
    token
  );
}

/**
 * Riscatta il forziere (Bonus 200 XP).
 * Funziona solo se il backend conferma che l'utente ha accumulato 20 quest.
 */
export async function claimWeeklyLoot(token) {
  // POST /api/gamification/claim-weekly-loot
  return await fetchWrapper.post(`${BASE_URL}/claim-weekly-loot`, {}, token);
}
</file>

<file path="src/api/logs.js">
/**
 * TITOLO: Logs API (DEFINITIVO)
 * DESCRIZIONE: Wrapper atomici per le chiamate API. Nessuna trasformazione dati.
 */

import { API_URL } from "./config";

export const saveLog = async (logData, token, clientId) => {
  // logData arriva già formattato dalle utility
  const response = await fetch(`${API_URL}/logs/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...logData, client_id: clientId }),
  });
  if (!response.ok) throw new Error("Errore durante il salvataggio del log");
  return response.json();
};

export const deleteLog = async (logId, token) => {
  const response = await fetch(`${API_URL}/logs/${logId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Errore durante l'eliminazione del log");
  return true;
};

export const fetchWorkoutLogs = async (workoutId) => {
  const response = await fetch(`${API_URL}/logs/workout/${workoutId}`);
  if (!response.ok) throw new Error("Errore nel recupero dei log");
  return response.json();
};

export const saveCompletion = async (
  workoutId,
  weekNumber,
  duration,
  token
) => {
  const response = await fetch(`${API_URL}/logs/completion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      workout_id: workoutId,
      week_number: weekNumber,
      duration: duration,
    }),
  });
  if (!response.ok) throw new Error("Errore nel salvataggio");
  return response.json();
};

export const fetchCompletions = async (workoutId, token) => {
  const response = await fetch(`${API_URL}/logs/completion/${workoutId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Errore nel recupero");
  return response.json();
};
</file>

<file path="src/api/notifications.js">
/**
 * TITOLO: API Notifications (Full Edition)
 * DESCRIZIONE: Endpoint per la gestione delle notifiche: recupero, lettura ed eliminazione.
 * FIX: Aggiunto export deleteAllNotifications per risolvere il blocco di Vite.
 */

import { fetchWrapper } from "./config";

const BASE_URL = "/notifications";

/**
 * Recupera l'elenco completo delle notifiche dell'utente loggato.
 */
export const fetchNotifications = async (token) => {
  return await fetchWrapper.get(BASE_URL, token);
};

/**
 * Recupera il conteggio delle notifiche non lette.
 */
export const fetchUnreadCount = async (token) => {
  try {
    const data = await fetchWrapper.get(`${BASE_URL}/unread/count`, token);
    return data.count;
  } catch (error) {
    console.warn("Impossibile recuperare il conteggio notifiche:", error);
    return 0;
  }
};

/**
 * Marca una singola notifica come letta.
 */
export const markNotificationAsRead = async (token, notificationId) => {
  return await fetchWrapper.patch(
    `${BASE_URL}/${notificationId}/read`,
    {},
    token
  );
};

/**
 * Marca tutte le notifiche come lette.
 */
export const markAllNotificationsAsRead = async (token) => {
  return await fetchWrapper.patch(`${BASE_URL}/read/all`, {}, token);
};

/**
 * ELIMINA una notifica specifica.
 */
export const deleteNotification = async (token, notificationId) => {
  return await fetchWrapper.delete(`${BASE_URL}/${notificationId}`, token);
};

/**
 * ELIMINA tutte le notifiche dell'utente (NUOVA FUNZIONE).
 * Invia una richiesta DELETE al percorso base delle notifiche.
 */
export const deleteAllNotifications = async (token) => {
  // Puntiamo a /api/notifications/all
  return await fetchWrapper.delete(`${BASE_URL}/all`, token);
};
</file>

<file path="src/api/payments.js">
// frontend/src/api/payments.js
import { fetchWrapper } from "./config";

// Nota: fetchWrapper.get aggiunge automaticamente API_URL, quindi mettiamo solo il percorso relativo.

// 1. Recupera tutti i pagamenti
export const fetchPayments = async (trainerId) => {
  // Esempio: GET /payments/?trainer_id=123
  return await fetchWrapper.get(`/payments/?trainer_id=${trainerId}`);
};

// 2. Crea un nuovo pagamento
export const createPayment = async (paymentData, trainerId) => {
  const payload = { ...paymentData, trainer_id: trainerId };
  // Esempio: POST /payments/add
  return await fetchWrapper.post(`/payments/add`, payload);
};

// 3. Elimina un pagamento
export const deletePayment = async (id) => {
  // Esempio: DELETE /payments/123
  return await fetchWrapper.delete(`/payments/${id}`);
};
</file>

<file path="src/api/schedules.js">
// frontend/src/api/schedules.js
import { fetchWrapper } from './config'; 

const BASE_URL = '/schedules'; 

/**
 * Recupera gli appuntamenti del cliente.
 */
export async function fetchSchedules(token, startDate, endDate) {
    try {
        const data = await fetchWrapper.get(`${BASE_URL}?start=${startDate}&end=${endDate}`, token);
        return data; 
    } catch (error) {
        console.error("Errore nel recupero degli appuntamenti:", error);
        throw error;
    }
}

/**
 * Crea un nuovo appuntamento.
 */
export async function createSchedule(scheduleData, token) {
    try {
        const data = await fetchWrapper.post(BASE_URL, scheduleData, token);
        return data; 
    } catch (error) {
        console.error("Errore nella creazione dell'appuntamento:", error);
        throw error;
    }
}

/**
 * Elimina un appuntamento.
 */
export async function deleteSchedule(scheduleId, token) {
    try {
        const data = await fetchWrapper.delete(`${BASE_URL}/${scheduleId}`, token);
        return data; 
    } catch (error) {
        console.error("Errore nell'eliminazione dell'appuntamento:", error);
        throw error;
    }
}

/**
 * Aggiorna lo stato di completamento (Check).
 */
export async function updateScheduleStatus(scheduleId, isCompleted, token) {
    try {
        const data = await fetchWrapper.put(`${BASE_URL}/${scheduleId}/status`, { is_completed: isCompleted }, token);
        return data; 
    } catch (error) {
        console.error("Errore nell'aggiornamento dello stato:", error);
        throw error;
    }
}

/**
 * --- NUOVA FUNZIONE AGGIUNTA ---
 * Aggiorna un appuntamento esistente (Data, Ora, Descrizione).
 * @param {number} scheduleId - ID dell'evento.
 * @param {Object} scheduleData - I nuovi dati.
 * @param {string} token - Token JWT.
 */
export async function updateSchedule(scheduleId, scheduleData, token) {
    try {
        // Usiamo PUT sulla rotta base /schedules/:id
        const data = await fetchWrapper.put(`${BASE_URL}/${scheduleId}`, scheduleData, token);
        return data; 
    } catch (error) {
        console.error("Errore nell'aggiornamento evento:", error);
        throw error;
    }
}
</file>

<file path="src/api/workouts.js">
// ! frontend/src/api/workouts.js
// MyTrainUp Frontend: Servizi API per la Gestione delle Schede di Allenamento (workouts.js - Versione JSON)

import { fetchWrapper } from "./config";
import { saveNote } from "./exercises"; // <--- AGGIUNTO: Importiamo la funzione per le note

/**
 * Recupera tutte le schede associate a una specifica cartella.
 * @param {number|string} folderId - ID della cartella
 * @param {string|null} role - Ruolo opzionale per il filtraggio lato server
 */
export const fetchWorkoutsByFolder = async (folderId, role = null) => {
  let url = `/workouts?folder_id=${folderId}`;

  // Se viene specificato un ruolo (es. 'client'), lo aggiungiamo alla query string
  if (role) {
    url += `&role=${role}`;
  }

  // fetchWrapper recupera automaticamente il token da sessionStorage
  return fetchWrapper.get(url);
};

/**
 * Invia i dati per creare una nuova scheda di allenamento.
 * Include l'oggetto 'exercises' strutturato con il nuovo campo 'config'.
 */
export const createWorkout = async (workoutData) => {
  return fetchWrapper.post("/workouts", workoutData);
};

/**
 * Invia i dati per aggiornare una scheda esistente.
 * Nota: Usiamo POST come previsto dal backend per gestire l'UPSERT massivo.
 */
export const updateWorkout = async (id, workoutData) => {
  const payload = { ...workoutData, id };
  return fetchWrapper.post("/workouts", payload);
};

/**
 * Rimuove una scheda di allenamento specifica.
 */
export const deleteWorkout = async (id) => {
  return fetchWrapper.delete(`/workouts/${id}`);
};

/**
 * Funzione wrapper che decide se chiamare create o update in base alla presenza dell'id.
 */
export const saveWorkout = async (workoutData) => {
  if (workoutData.id) {
    return await updateWorkout(workoutData.id, workoutData);
  } else {
    return await createWorkout(workoutData);
  }
};

/**
 * Invia il feedback del cliente relativo a una scheda.
 * @param {number|string} workoutId - ID della scheda
 * @param {Object} feedbackData - Oggetto contenente { rating, comment }
 */
export const sendWorkoutFeedback = async (workoutId, feedbackData) => {
  // Allineato con la rotta POST /api/workouts/<id>/feedback del backend
  return fetchWrapper.post(`/workouts/${workoutId}/feedback`, feedbackData);
};

/**
 * Aggiorna le note di un esercizio specifico.
 * Ora implementata richiamando la logica centralizzata in exercises.js.
 */
export const updateExerciseNote = async (exerciseId, note) => {
  // Chiamiamo saveNote che gestisce la rotta PATCH /api/exercises/<id>/notes
  return await saveNote(exerciseId, note);
};
</file>

<file path="src/components/ClientArea/ActiveWorkoutTimer.jsx">
/**
 * TITOLO: Active Workout Timer (Automation Edition)
 * DESCRIZIONE: Gestisce il cronometro globale. Al termine, innesca il completamento massivo.
 * MODIFICHE: Ottimizzazione calcolo tempo reale e trigger onFinish potenziato.
 */

import React, { useState, useEffect, useRef } from "react";
import { Play, Square, Clock, CheckCircle2, Trophy } from "lucide-react";

export default function ActiveWorkoutTimer({
  workoutId,
  weekNumber,
  finishedTime, 
  onFinish, 
}) {
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  // 1. Sincronizzazione iniziale e calcolo immediato
  useEffect(() => {
    const storageKey = `workout_start_${workoutId}_w${weekNumber}`;
    const storedStart = localStorage.getItem(storageKey);

    if (storedStart && !finishedTime) {
      const startMs = parseInt(storedStart);
      setStartTime(startMs);
      // Calcolo immediato per evitare lo 00:00 iniziale al refresh
      setElapsed(Date.now() - startMs);
    } else if (!storedStart) {
      setStartTime(null);
      setElapsed(0);
    }
  }, [workoutId, weekNumber, finishedTime]);

  // 2. Gestione dell'intervallo
  useEffect(() => {
    if (startTime && !finishedTime) {
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [startTime, finishedTime]);

  const handleStart = () => {
    const now = Date.now();
    setStartTime(now);
    setElapsed(0);
    localStorage.setItem(`workout_start_${workoutId}_w${weekNumber}`, now.toString());
  };

  const handleStop = () => {
    if (!startTime) return;

    const totalSeconds = Math.floor(elapsed / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    // Formattazione stringa semantica
    const timeString = `${h > 0 ? h + "h " : ""}${m}m ${s}s`;

    // Pulizia
    localStorage.removeItem(`workout_start_${workoutId}_w${weekNumber}`);
    
    // Notifica al parent (WorkoutTab -> useClientWorkouts)
    // Questo triggererà il salvataggio della durata E la spunta automatica dei log
    if (onFinish) onFinish(timeString);
    
    setStartTime(null);
    setElapsed(0);
  };

  const formatDisplay = (ms) => {
    const totalSecs = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSecs / 3600).toString().padStart(2, "0");
    const m = Math.floor((totalSecs % 3600) / 60).toString().padStart(2, "0");
    const s = (totalSecs % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // --- RENDERING ---

  // CASO A: Allenamento completato (UI persistente richiesta)
  if (finishedTime) {
    return (
      <div className="w-full mt-4 p-5 bg-emerald-950/30 border-2 border-emerald-500/40 rounded-2xl flex items-center justify-between shadow-[0_0_20px_rgba(16,185,129,0.1)] animate-in fade-in slide-in-from-top-2">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-lg">
            <Trophy size={24} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">
              Sessione Conclusa
            </p>
            <p className="text-2xl font-mono font-black text-white leading-none mt-1">
              {finishedTime}
            </p>
          </div>
        </div>
        <CheckCircle2 size={32} className="text-emerald-500/50" />
      </div>
    );
  }

  // CASO B: Start
  if (!startTime) {
    return (
      <button
        onClick={handleStart}
        className="w-full mt-4 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(16,185,129,0.2)] transition-all active:scale-95 group"
      >
        <Play size={22} fill="currentColor" className="group-hover:scale-110 transition-transform" /> 
        <span className="tracking-tight text-lg">INIZIA SESSIONE</span>
      </button>
    );
  }

  // CASO C: In corso
  return (
    <div className="w-full mt-4 p-5 bg-slate-900 border-2 border-emerald-500/30 rounded-2xl flex flex-col items-center gap-4 animate-in fade-in duration-500">
      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
        <Clock size={14} className="text-emerald-400 animate-pulse" /> 
        <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">
          Allenamento in corso
        </span>
      </div>
      
      <div className="text-5xl font-mono font-black text-white tracking-tighter tabular-nums drop-shadow-md">
        {formatDisplay(elapsed)}
      </div>

      <button
        onClick={handleStop}
        className="w-full py-3 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border-2 border-red-600/30 rounded-xl font-black transition-all flex items-center justify-center gap-2 group"
      >
        <Square size={16} fill="currentColor" className="group-hover:scale-90 transition-transform" /> 
        TERMINA E SPUNTA TUTTO
      </button>
    </div>
  );
}
</file>

<file path="src/components/ClientArea/CircuitWorkoutView.jsx">
/**
 * TITOLO: Circuit Workout View (Dedicated Engine)
 * DESCRIZIONE: Gestisce esclusivamente la visualizzazione a round dei circuiti.
 * FUNZIONALITÀ: Inversione dei cicli (Giro -> Esercizi) e gestione del recupero fine giro.
 */

import React from "react";
import { Repeat, Clock } from "lucide-react";
import RecoveryTimer from "./RecoveryTimer";
import ClientSetEngine from "./ClientSetEngine";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import { useAuth } from "../../context/AuthContext";

export default function CircuitWorkoutView({ workoutData, currentWeek }) {
  const { logs, updateLog } = useWorkoutStore();
  const { user, token } = useAuth();

  return (
    <div className="space-y-8">
      {[...Array(workoutData.rounds)].map((_, roundIdx) => (
        <div
          key={roundIdx}
          className="space-y-4 bg-slate-900/40 p-5 rounded-[2rem] border-2 border-orange-500/10 shadow-inner"
        >
          {/* Header del Giro */}
          <div className="flex items-center justify-between mb-2 px-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500 rounded-lg shadow-lg shadow-orange-900/20">
                <Repeat size={18} className="text-white" />
              </div>
              <h5 className="text-lg font-black text-white uppercase tracking-tight">
                GIRO {roundIdx + 1}
              </h5>
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Round {roundIdx + 1} di {workoutData.rounds}
            </span>
          </div>

          {/* Lista Esercizi del Giro */}
          <div className="space-y-4">
            {workoutData.exercises.map((ex) => (
              <ClientSetEngine
                // Chiave unica combinata per evitare conflitti di rendering
                key={`${ex.id}-${roundIdx}`}
                // FIX: Usiamo lo spread {...ex} per assicurarci che tutte le proprietà (incluse le notes)
                // vengano passate come un nuovo oggetto, forzando l'aggiornamento se i dati cambiano.
                exercise={{ ...ex }}
                currentWeek={currentWeek}
                logs={logs[workoutData.id] || []}
                forceSetIndex={roundIdx} // Mostra solo il set corrispondente a questo giro
                isCircuitMode={true}
                onLogChange={(exId, setIdx, field, val) =>
                  updateLog(
                    workoutData.id,
                    exId,
                    setIdx,
                    field,
                    val,
                    token,
                    user.id
                  )
                }
              />
            ))}
          </div>

          {/* RECUPERO FINE GIRO (Solo se non è l'ultimo giro) */}
          {roundIdx < workoutData.rounds - 1 && (
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black text-orange-500/60 uppercase tracking-[0.2em]">
                <Clock size={14} /> Recupero fine giro
              </div>
              <div className="transform scale-110">
                <RecoveryTimer
                  value={workoutData.restBetweenRounds}
                  accentColor="orange"
                />
              </div>
              <p className="text-[9px] font-bold text-slate-600 uppercase">
                Preparati per il giro {roundIdx + 2}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
</file>

<file path="src/components/ClientArea/ClientArea.jsx">
/**
 * TITOLO: Client Area (Zustand Orchestrator)
 * DESCRIZIONE: Punto di ingresso principale per l'area cliente.
 * MODIFICHE: Collegamento a useWorkoutStore e useAuth. Rimozione props ridondanti.
 */

import React, { useState, useEffect } from "react";
import { User, Dumbbell } from "lucide-react";

// Hooks & Store
import { useGamification } from "../../hooks/useGamification";
import useWorkoutStore from "../../hooks/useWorkoutStore"; // Nuovo Store Zustand
import { useAuth } from "../../context/AuthContext"; // Nuovo Context Auth

// Sottocomponenti
import ProfileTab from "./ProfileTab";
import WorkoutTab from "./WorkoutTab";

export default function ClientArea() {
  const { user, token } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  // 1. RECUPERO AZIONI DALLO STORE
  const { loadFolders, loadWorkouts, selectedFolder, loading } =
    useWorkoutStore();

  // 2. RECUPERO STATO GAMIFICATION (Ancora hook separato per ora)
  const { xp, level, chestProgress, updateGamification, claimLoot } =
    useGamification(token);

  // 3. CARICAMENTO INIZIALE DATI
  useEffect(() => {
    if (user?.id) {
      loadFolders(user.id);
    }
  }, [user?.id, loadFolders]);

  // 4. CARICAMENTO WORKOUT AL CAMBIO CARTELLA
  useEffect(() => {
    if (selectedFolder && token) {
      loadWorkouts(selectedFolder, token);
    }
  }, [selectedFolder, token, loadWorkouts]);

  return (
    <div className="p-4 space-y-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 max-w-2xl mx-auto pb-20 relative">
      {/* Navigation Tabs */}
      <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-700/50">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold transition-all ${
            activeTab === "profile"
              ? "bg-slate-700 text-white shadow-sm border border-slate-600"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <User
            size={18}
            className={activeTab === "profile" ? "text-orange-400" : ""}
          />
          Il mio Profilo
        </button>
        <button
          onClick={() => setActiveTab("workouts")}
          className={`flex-1 py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold transition-all ${
            activeTab === "workouts"
              ? "bg-slate-700 text-white shadow-sm border border-slate-600"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Dumbbell
            size={18}
            className={activeTab === "workouts" ? "text-blue-400" : ""}
          />
          Le mie Schede
        </button>
      </div>

      {/* Tab Content Rendering */}
      <div className="min-h-[400px]">
        {loading && (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        )}

        {!loading && activeTab === "profile" && (
          <ProfileTab
            xp={xp}
            level={level}
            chestProgress={chestProgress}
            onClaimLoot={claimLoot}
            onGamificationUpdate={updateGamification}
            token={token}
          />
        )}

        {!loading && activeTab === "workouts" && (
          /* NOTA: WorkoutTab ora è autonomo, non servono più props! */
          <WorkoutTab />
        )}
      </div>
    </div>
  );
}
</file>

<file path="src/components/ClientArea/ClientScheduler.jsx">
// frontend/src/components/ClientArea/ClientScheduler.jsx
// MyTrainUp Frontend: Componente Calendario - VERSIONE AUTO-RESIZE TEXTAREA FIX

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Calendar, PlusCircle, Trash2, Clock, CheckCircle, ChevronLeft, ChevronRight, X, ChevronDown, Edit2 } from 'lucide-react';
import { fetchSchedules, createSchedule, deleteSchedule, updateScheduleStatus, updateSchedule } from '../../api/schedules'; 

const DAYS_OF_WEEK = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const HOURS = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
const MINUTES = ["00", "15", "30", "45"]; 

// --- COMPONENTE SELETTORE CUSTOM (Stile Card) ---
const CustomTimeSelect = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [containerRef]);

    useEffect(() => {
        if (isOpen && listRef.current) {
            const selectedEl = listRef.current.querySelector('[data-selected="true"]');
            if (selectedEl) selectedEl.scrollIntoView({ block: 'center' });
        }
    }, [isOpen]);

    return (
        <div className="relative w-1/2" ref={containerRef}>
            <button 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-slate-800 border ${isOpen ? 'border-orange-500 ring-1 ring-orange-500' : 'border-slate-600'} hover:border-slate-500 rounded-xl px-4 py-3 text-white outline-none text-center font-bold text-xl flex items-center justify-between transition-all shadow-sm`}
            >
                <span className="flex-1 tracking-wider">{value}</span>
                <ChevronDown size={20} className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
            </button>

            {isOpen && (
                <div ref={listRef} className="absolute z-50 mt-2 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-h-48 overflow-y-auto scrollbar-hide animate-in fade-in zoom-in-95 duration-100">
                    <div className="py-1">
                        {options.map(opt => (
                            <div 
                                key={opt}
                                data-selected={opt === value}
                                onClick={() => { onChange(opt); setIsOpen(false); }}
                                className={`px-4 py-2.5 text-center font-bold cursor-pointer transition-colors border-b border-slate-700/50 last:border-0
                                    ${opt === value ? 'bg-orange-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


export default function ClientScheduler({ client }) {
    const token = sessionStorage.getItem('fit_token');
    const clientId = client?.id;

    const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(new Date()));
    const [events, setEvents] = useState({}); 
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    const [editingEventId, setEditingEventId] = useState(null);

    const [newEvent, setNewEvent] = useState({ 
        date: formatDate(new Date()), 
        time: '15:00', 
        description: '',
        is_completed: false
    });

    // Ref per la textarea auto-ridimensionabile
    const textareaRef = useRef(null);

    // --- FIX AUTO RESIZE ---
    // Usa setTimeout per garantire che il modale sia renderizzato prima di calcolare l'altezza
    useEffect(() => {
        if (showModal && textareaRef.current) {
            setTimeout(() => {
                if (textareaRef.current) {
                    textareaRef.current.style.height = 'auto'; // Reset
                    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set Real Height
                }
            }, 10); // Ritardo minimo per permettere il rendering
        }
    }, [newEvent.description, showModal]);

    function getStartOfWeek(date) {
        const day = date.getDay(); 
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); 
        return new Date(date.setDate(diff));
    }

    function formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }

    const loadEvents = useCallback(async (start) => {
        if (!clientId || !token) return;
        setIsLoading(true);
        try {
            const endDate = new Date(start);
            endDate.setDate(start.getDate() + 6);
            const data = await fetchSchedules(token, formatDate(start), formatDate(endDate));
            setEvents(data || {}); 
        } catch (error) {
            console.error("Errore caricamento:", error);
            setEvents({});
        } finally {
            setIsLoading(false);
        }
    }, [clientId, token]);

    useEffect(() => { loadEvents(startOfWeek); }, [startOfWeek, loadEvents]);

    const handleSaveEvent = async (e) => {
        e.preventDefault();
        if (!newEvent.description.trim()) return;

        try {
            let savedEvent;
            
            if (editingEventId) {
                savedEvent = await updateSchedule(editingEventId, newEvent, token);
                setEvents(prev => {
                    const newEventsState = { ...prev };
                    Object.keys(newEventsState).forEach(dKey => {
                        newEventsState[dKey] = newEventsState[dKey].filter(ev => ev.id !== editingEventId);
                        if(newEventsState[dKey].length === 0) delete newEventsState[dKey];
                    });
                    const dateKey = savedEvent.date;
                    newEventsState[dateKey] = [...(newEventsState[dateKey] || []), savedEvent].sort((a, b) => a.time.localeCompare(b.time));
                    return newEventsState;
                });
            } else {
                savedEvent = await createSchedule(newEvent, token);
                setEvents(prev => {
                    const dateKey = savedEvent.date;
                    return {
                        ...prev,
                        [dateKey]: [...(prev[dateKey] || []), savedEvent].sort((a, b) => a.time.localeCompare(b.time))
                    };
                });
            }
            closeModal();
        } catch (error) {
            console.error("Errore salvataggio:", error);
            alert("Errore durante il salvataggio. Riprova.");
        }
    };

    const handleDeleteEvent = async (dateKey, eventId, e) => {
        e.stopPropagation(); 
        if (!window.confirm("Eliminare questo impegno?")) return;
        try {
            await deleteSchedule(eventId, token);
            setEvents(prev => {
                const newEvents = { ...prev };
                if (newEvents[dateKey]) {
                    newEvents[dateKey] = newEvents[dateKey].filter(e => e.id !== eventId);
                    if (newEvents[dateKey].length === 0) delete newEvents[dateKey];
                }
                return newEvents;
            });
        } catch (error) { console.error("Errore eliminazione:", error); }
    };
    
    const changeWeek = (direction) => {
        const newStart = new Date(startOfWeek);
        newStart.setDate(startOfWeek.getDate() + (direction === 'next' ? 7 : -7));
        setStartOfWeek(newStart);
    };

    const openNewModal = (date) => {
        setEditingEventId(null);
        setNewEvent({ date: date, time: '15:00', description: '', is_completed: false });
        setShowModal(true);
    };

    const openEditModal = (event) => {
        setEditingEventId(event.id);
        setNewEvent({ 
            date: event.date, 
            time: event.time, 
            description: event.description,
            is_completed: event.is_completed 
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingEventId(null);
    };

    const toggleCompletion = async (event, e) => {
        e.stopPropagation();
        try {
            await updateScheduleStatus(event.id, !event.is_completed, token);
            setEvents(prev => {
                const newEvents = { ...prev };
                const dateKey = event.date;
                if (newEvents[dateKey]) {
                    const idx = newEvents[dateKey].findIndex(ev => ev.id === event.id);
                    if (idx > -1) newEvents[dateKey][idx] = { ...event, is_completed: !event.is_completed };
                }
                return newEvents;
            });
        } catch (error) { console.error(error); }
    };

    const updateTime = (type, val) => {
        const [h, m] = newEvent.time.split(':');
        if (type === 'h') setNewEvent({ ...newEvent, time: `${val}:${m}` });
        if (type === 'm') setNewEvent({ ...newEvent, time: `${h}:${val}` });
    };

    const weekDays = [...Array(7)].map((_, i) => {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        return {
            name: DAYS_OF_WEEK[i],
            date: date,
            dateKey: formatDate(date),
            isToday: formatDate(date) === formatDate(new Date()),
            events: events[formatDate(date)] || []
        };
    });


    return (
        <div className="p-4 space-y-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 max-w-3xl mx-auto pb-20">
            
            {/* HEADER */}
            <div className="border-b border-slate-700 pb-4">
                <h3 className="font-bold text-2xl text-white flex items-center gap-2 mb-1">
                    <Calendar className="text-orange-500" /> Pianificazione
                </h3>
                <p className="text-sm text-slate-400">Tocca un evento per modificarlo.</p>

                <div className="flex justify-between items-center mt-4 bg-slate-900 p-2 rounded-lg border border-slate-700">
                    <button onClick={() => changeWeek('prev')} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"><ChevronLeft size={24} /></button>
                    <span className="font-bold text-lg text-white capitalize">
                        {weekDays[0].date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })} - {weekDays[6].date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })}
                    </span>
                    <button onClick={() => changeWeek('next')} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full"><ChevronRight size={24} /></button>
                </div>
            </div>

            {isLoading && <div className="text-center text-slate-500 py-10">Caricamento...</div>}

            {/* LISTA GIORNI */}
            <div className="flex flex-col gap-3">
                {weekDays.map(day => (
                    <div key={day.dateKey} 
                        className={`flex flex-col sm:flex-row gap-4 p-4 rounded-xl border transition-all ${day.isToday ? 'border-orange-500/50 bg-slate-900/80' : 'border-slate-700 bg-slate-900/40'}`}
                    >
                        <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center sm:w-24 min-w-[100px] border-b sm:border-b-0 sm:border-r border-slate-700/50 pb-2 sm:pb-0 sm:pr-4">
                            <div className="text-left">
                                <span className={`block font-bold text-lg capitalize ${day.isToday ? 'text-orange-400' : 'text-slate-200'}`}>{day.name}</span>
                                <span className="text-sm text-slate-500">{day.date.getDate()} {day.date.toLocaleDateString('it-IT', { month: 'short' })}</span>
                            </div>
                            <button onClick={() => openNewModal(day.dateKey)} className="sm:hidden bg-slate-800 p-2 rounded-full text-blue-400 border border-slate-700 hover:bg-slate-700">
                                <PlusCircle size={20} />
                            </button>
                        </div>

                        <div className="flex-1 space-y-2">
                            {day.events.length > 0 ? (
                                day.events.map(event => (
                                    <div 
                                        key={event.id} 
                                        onClick={() => openEditModal(event)} 
                                        className={`flex items-start justify-between p-3 rounded-lg border shadow-sm cursor-pointer hover:bg-slate-700/50 transition-all
                                        ${event.is_completed ? 'bg-emerald-900/10 border-emerald-500/30 text-emerald-100/60' : 'bg-slate-800 border-slate-700 text-white'}`}
                                    >
                                        <div className="flex gap-3 overflow-hidden flex-1">
                                            <div className={`mt-0.5 p-1.5 h-fit rounded-lg flex-shrink-0 ${event.is_completed ? 'bg-emerald-500/20 text-emerald-500' : 'bg-orange-500/20 text-orange-500'}`}>
                                                <Clock size={16} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-bold text-sm leading-tight mb-1">{event.time}</p>
                                                <p className={`text-sm break-words whitespace-normal leading-snug ${event.is_completed ? 'line-through decoration-emerald-500/50' : ''}`}>
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center gap-1 pl-2 border-l border-slate-700/50 ml-2">
                                            <button onClick={(e) => toggleCompletion(event, e)} className={`p-2 rounded-lg ${event.is_completed ? 'text-emerald-400' : 'text-slate-500 hover:text-emerald-400'}`}>
                                                <CheckCircle size={18} />
                                            </button>
                                            <button onClick={(e) => handleDeleteEvent(day.dateKey, event.id, e)} className="p-2 rounded-lg text-slate-500 hover:text-red-400">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex items-center justify-center sm:justify-start min-h-[40px] text-slate-600 text-sm italic">Nessun impegno.</div>
                            )}
                        </div>
                        <div className="hidden sm:flex items-center">
                            <button onClick={() => openNewModal(day.dateKey)} className="h-full w-10 flex items-center justify-center rounded-lg border border-dashed border-slate-700 text-slate-500 hover:text-blue-400 hover:bg-blue-900/10">
                                <PlusCircle size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODALE CENTRATO E RESPONSIVE --- */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={closeModal}>
                    <div 
                        className="bg-slate-900 w-full max-w-sm rounded-2xl shadow-2xl border border-slate-700 overflow-hidden animate-in zoom-in-95 duration-200 relative" 
                        onClick={e => e.stopPropagation()}
                    >
                        
                        {/* Header Modale */}
                        <div className="flex justify-between items-center px-6 py-4 bg-slate-800 border-b border-slate-700">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                {editingEventId ? <Edit2 size={20} className="text-orange-500" /> : <PlusCircle size={20} className="text-blue-500" />}
                                {editingEventId ? "Modifica Impegno" : "Nuovo Impegno"}
                            </h4>
                            <button onClick={closeModal} className="text-slate-400 hover:text-white bg-slate-700/50 p-1.5 rounded-full transition-colors"><X size={18} /></button>
                        </div>
                        
                        {/* Body Modale */}
                        <form onSubmit={handleSaveEvent} className="p-6 space-y-5">
                            
                            {/* Data */}
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">Data</label>
                                <input type="date" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} 
                                    className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none font-medium transition-all shadow-sm" required />
                            </div>
                            
                            {/* Orario Custom Selectors */}
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">Ora</label>
                                <div className="flex gap-2 items-center justify-center">
                                    <CustomTimeSelect options={HOURS} value={newEvent.time.split(':')[0]} onChange={(val) => updateTime('h', val)} />
                                    <span className="text-slate-500 font-bold text-2xl pb-1">:</span>
                                    <CustomTimeSelect options={MINUTES} value={newEvent.time.split(':')[1]} onChange={(val) => updateTime('m', val)} />
                                </div>
                            </div>

                            {/* Attività - TEXTAREA AUTO-RESIZE */}
                            <div>
                                <label className="block text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-wider">Attività</label>
                                <textarea 
                                    ref={textareaRef}
                                    value={newEvent.description} 
                                    onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} 
                                    className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none placeholder-slate-500 font-medium resize-none shadow-sm transition-all overflow-hidden min-h-[50px]" 
                                    placeholder="Es. Allenamento Petto" 
                                    rows="1" 
                                    required 
                                />
                            </div>
                            
                            {/* Bottoni Azione */}
                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={closeModal}
                                    className="flex-1 px-4 py-3.5 text-sm font-bold text-slate-400 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:text-white transition-all text-center">
                                    Annulla
                                </button>
                                <button type="submit" 
                                    className={`flex-1 px-4 py-3.5 text-sm font-bold text-white rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-center
                                    ${editingEventId ? 'bg-orange-600 hover:bg-orange-500 shadow-orange-900/20' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20'}`}>
                                    {editingEventId ? "Salva Modifiche" : "Salva"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
</file>

<file path="src/components/ClientArea/ClientSetEngine.jsx">
// ! frontend/src/components/ClientArea/ClientSetEngine.jsx
/**
 * TITOLO: Client Set Engine (Architect Edition)
 * DESCRIZIONE: Motore di esecuzione allenamento per il cliente.
 * FUNZIONALITÀ: Gestisce log, timer, note e integrazione video YouTube.
 * UPDATE: Risoluzione latenza e supporto Player Video Modal.
 */

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Check,
  Link,
  Info,
  MessageSquare,
  Youtube,
} from "lucide-react";
import RecoveryTimer from "./RecoveryTimer";
import YoutubeModal from "./YoutubeModal"; // Assicurati che il file sia creato
import { getLogEntry, isSetCompleted } from "../../utils/logUtils";
import { splitSubString } from "../../utils/exerciseParser";

/**
 * Mappatura colori per la coerenza visiva.
 */
const getColorClasses = (type) => {
  const maps = {
    normal: {
      border: "border-orange-500/30",
      text: "text-orange-400",
      focus: "focus-within:border-orange-500",
      label: "NORMALE",
    },
    stripping: {
      border: "border-red-500/30",
      text: "text-red-400",
      focus: "focus-within:border-red-500",
      label: "STRIPPING",
    },
    rest_pause: {
      border: "border-blue-500/30",
      text: "text-blue-400",
      focus: "focus-within:border-blue-500",
      label: "REST-PAUSE",
    },
    superset: {
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      focus: "focus-within:border-emerald-500",
      label: "SUPER SERIE",
    },
    circuit: {
      border: "border-orange-500/30",
      text: "text-orange-400",
      focus: "focus-within:border-orange-500",
      label: "CIRCUITO",
    },
  };
  return maps[type] || maps.normal;
};

/**
 * Componente Atomico: InputBox con gestione stato locale (Anti-Latenza)
 */
const InputBox = ({
  label,
  placeholder,
  value,
  onChange,
  subLabel,
  isCompleted,
  focusClass,
  lastWeekValue,
}) => {
  const [localValue, setLocalValue] = useState(value || "");

  useEffect(() => {
    setLocalValue(value || "");
  }, [value]);

  const handleBlur = () => {
    if (localValue !== value) onChange(localValue);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={`relative flex items-center bg-slate-950/80 border-2 rounded-xl h-11 sm:h-14 transition-all shadow-inner 
        ${isCompleted ? "border-emerald-500/50" : `border-slate-800 ${focusClass}`}`}
      >
        <input
          type="text"
          inputMode="decimal"
          className={`bg-transparent text-lg sm:text-2xl font-black w-full text-center outline-none transition-colors 
            ${isCompleted ? "text-emerald-400" : "text-white"}`}
          placeholder={placeholder || "0"}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex flex-col items-center leading-none mt-0.5 px-1">
        <span
          className={`text-[8px] sm:text-[9px] font-black uppercase tracking-tight ${isCompleted ? "text-emerald-500/70" : "text-slate-500"}`}
        >
          {label}
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`text-[9px] sm:text-[10px] font-black ${isCompleted ? "text-emerald-400/50" : "text-slate-400"}`}
          >
            / {subLabel || "0"}
          </span>
          {lastWeekValue && lastWeekValue !== "-" && (
            <span className="text-[7px] sm:text-[8px] font-bold text-orange-500/80 bg-orange-500/10 px-1 rounded border border-orange-500/20">
              LV: {lastWeekValue}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ClientSetEngine({
  exercise,
  currentWeek,
  logs,
  onLogChange,
  isCircuitMode = false,
  forceSetIndex = null,
  isExpanded,
  onToggleExpand,
}) {
  const [openNoteIndex, setOpenNoteIndex] = useState(null);
  const [localNotes, setLocalNotes] = useState({});
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  if (!exercise) return null;

  const exerciseType = isCircuitMode
    ? "circuit"
    : exercise.exercise_type || "normal";
  const mainStyle = getColorClasses(exerciseType);
  const isSuperSet = exerciseType === "superset";
  const config = exercise.config || exercise.sets || [];

  const setsToRender =
    forceSetIndex !== null
      ? config[forceSetIndex]
        ? [{ set: config[forceSetIndex], idx: forceSetIndex }]
        : []
      : config.map((s, i) => ({ set: s, idx: i }));

  const handleNoteBlur = (idx) => {
    if (localNotes[idx] !== undefined) {
      onLogChange(exercise.id, idx, "notes", localNotes[idx]);
    }
  };

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        isCircuitMode
          ? "border-slate-800/50 bg-slate-900/40"
          : isExpanded
            ? `${mainStyle.border.replace("30", "50")} bg-slate-800/40 shadow-xl`
            : "border-slate-800 bg-slate-900/20"
      }`}
    >
      {/* HEADER ESERCIZIO */}
      <div
        onClick={onToggleExpand}
        className={`p-3 sm:p-4 flex items-center justify-between cursor-pointer ${isCircuitMode ? "bg-transparent" : "bg-slate-900/60"}`}
      >
        <div className="flex items-center gap-2 flex-1 pr-2">
          {isSuperSet ? (
            <Link size={18} className="text-emerald-500 shrink-0" />
          ) : (
            <ChevronRight size={18} className={`${mainStyle.text} shrink-0`} />
          )}
          <h4 className="font-black text-white text-sm sm:text-base uppercase tracking-tight whitespace-normal break-words leading-tight">
            {exercise.name}
            {isSuperSet && exercise.second_name && (
              <span className="text-emerald-400 text-xs block sm:inline sm:ml-1">
                {" "}
                + {exercise.second_name}
              </span>
            )}
          </h4>
        </div>

        {/* PULSANTE VIDEO YOUTUBE */}
        {exercise.youtube_link && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(true);
            }}
            className="p-2 bg-red-600/20 hover:bg-red-600/40 text-red-500 rounded-full transition-all ml-2 shrink-0 border border-red-500/30"
          >
            <Youtube size={20} />
          </button>
        )}
      </div>

      {/* BODY */}
      {(isExpanded || isCircuitMode) && (
        <div className="p-3 sm:p-5 space-y-4 animate-in slide-in-from-top-2">
          {/* NOTE TRAINER GLOBALI */}
          {exercise.notes &&
            typeof exercise.notes === "string" &&
            exercise.notes.trim() !== "" && (
              <div className="bg-blue-950/20 border border-blue-500/20 p-3 rounded-xl flex gap-3 items-start">
                <Info className="text-blue-400 shrink-0 mt-0.5" size={18} />
                <div className="space-y-1 w-full">
                  <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest block opacity-80">
                    Istruzioni del Trainer
                  </span>
                  <p className="text-sm text-blue-100/90 whitespace-pre-wrap leading-relaxed font-medium">
                    {exercise.notes}
                  </p>
                </div>
              </div>
            )}

          {/* RENDERING DEI SET */}
          {setsToRender.map(({ set, idx }) => {
            const currentLog = getLogEntry(logs, exercise.id, currentWeek, idx);
            const isCompleted = isSetCompleted(currentLog);
            const setStyle = getColorClasses(set.type || exerciseType);
            const lastWeekLog = getLogEntry(
              logs,
              exercise.id,
              currentWeek - 1,
              idx,
            );

            const subRepsTarget = splitSubString(set.reps || "0");
            const subKgsTarget = splitSubString(set.kg || "0");
            const subRestTarget = splitSubString(set.rest || "0");
            const subRepsLog = splitSubString(currentLog.reps_done || "");
            const subKgsLog = splitSubString(currentLog.kg_done || "");
            const isSplit = subRepsTarget.length > 1;

            if (localNotes[idx] === undefined && currentLog.notes) {
              localNotes[idx] = currentLog.notes;
            }

            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border-2 transition-all ${
                  isCompleted
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : `bg-slate-900/60 ${setStyle.border.replace("30", "20")}`
                } space-y-3 relative`}
              >
                {/* SET HEADER & NOTE TOGGLE */}
                <div className="flex flex-col gap-2 border-b border-slate-800 pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {!isCircuitMode && (
                        <span
                          className={`w-5 h-5 flex items-center justify-center rounded-full text-[9px] font-black border ${
                            isCompleted
                              ? "bg-emerald-600 border-emerald-400 text-white"
                              : `bg-slate-800 border-slate-700 ${setStyle.text}`
                          }`}
                        >
                          {idx + 1}
                        </span>
                      )}
                      <span
                        className={`text-[8px] font-black uppercase tracking-widest ${setStyle.text}`}
                      >
                        {setStyle.label}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenNoteIndex(openNoteIndex === idx ? null : idx);
                      }}
                      className={`flex items-center gap-1 text-[9px] font-bold uppercase transition-colors px-2 py-1 rounded-md
                        ${currentLog.notes ? "text-blue-400 bg-blue-900/20" : "text-slate-500 hover:text-white"}`}
                    >
                      <MessageSquare size={12} />{" "}
                      {currentLog.notes ? "Modifica Nota" : "Nota"}
                    </button>
                  </div>
                  {set.note && set.note.trim() !== "" && (
                    <div className="flex gap-2 items-start mt-1 pl-1">
                      <Info
                        size={12}
                        className="text-blue-400 shrink-0 mt-0.5"
                      />
                      <p className="text-xs text-blue-200 italic leading-tight">
                        {set.note}
                      </p>
                    </div>
                  )}
                </div>

                {/* INPUT NOTA CLIENTE */}
                {(openNoteIndex === idx || currentLog.notes) && (
                  <div className="animate-in fade-in slide-in-from-top-1">
                    <textarea
                      placeholder="Scrivi qui una nota per il diario..."
                      className="w-full bg-slate-950/50 text-white text-xs p-2 rounded-lg border border-slate-700 outline-none focus:border-blue-500 min-h-[50px] resize-none mb-1"
                      value={localNotes[idx] || ""}
                      onChange={(e) =>
                        setLocalNotes({ ...localNotes, [idx]: e.target.value })
                      }
                      onBlur={() => handleNoteBlur(idx)}
                    />
                  </div>
                )}

                {/* INPUT REPS & KG */}
                {subRepsTarget.map((target, subIdx) => {
                  const phaseRest = subRestTarget[subIdx] || subRestTarget[0];
                  return (
                    <div
                      key={subIdx}
                      className={`space-y-1 ${subIdx > 0 ? "pt-2 border-t border-slate-800/50" : ""}`}
                    >
                      {isSplit && (
                        <span
                          className={`text-[7px] font-bold uppercase ${setStyle.text} opacity-60 ml-1`}
                        >
                          {isSuperSet
                            ? "ESERCIZIO " + (subIdx === 0 ? "A" : "B")
                            : "FASE " + (subIdx + 1)}
                        </span>
                      )}
                      <div className="grid grid-cols-3 gap-2 items-start">
                        <div className="col-span-1">
                          {set.type === "timer" ? (
                            <div className="flex flex-col items-center gap-1">
                              <div className="flex items-center justify-center h-11 sm:h-14 w-full">
                                <RecoveryTimer
                                  value={target}
                                  isCompletedProp={isCompleted}
                                  accentColor={setStyle.text.split("-")[1]}
                                />
                              </div>
                              <span className="text-[8px] font-black text-slate-500 uppercase mt-1 tracking-tighter text-center">
                                / {target}"
                              </span>
                            </div>
                          ) : (
                            <InputBox
                              label="REPS"
                              placeholder={target}
                              value={
                                isSplit
                                  ? subRepsLog[subIdx]
                                  : currentLog.reps_done
                              }
                              subLabel={target}
                              isCompleted={isCompleted}
                              focusClass={setStyle.focus}
                              lastWeekValue={
                                isSplit
                                  ? splitSubString(lastWeekLog.reps_done || "")[
                                      subIdx
                                    ]
                                  : lastWeekLog.reps_done
                              }
                              onChange={(v) => {
                                if (isSplit) {
                                  const newArr = [...subRepsLog];
                                  while (newArr.length < subRepsTarget.length)
                                    newArr.push("");
                                  newArr[subIdx] = v;
                                  onLogChange(
                                    exercise.id,
                                    idx,
                                    "reps",
                                    newArr.join("+"),
                                  );
                                } else onLogChange(exercise.id, idx, "reps", v);
                              }}
                            />
                          )}
                        </div>
                        <div className="col-span-1">
                          <InputBox
                            label="KG"
                            placeholder={subKgsTarget[subIdx] || "0"}
                            value={
                              isSplit ? subKgsLog[subIdx] : currentLog.kg_done
                            }
                            subLabel={subKgsTarget[subIdx] || "0"}
                            isCompleted={isCompleted}
                            focusClass={setStyle.focus}
                            lastWeekValue={
                              isSplit
                                ? splitSubString(lastWeekLog.kg_done || "")[
                                    subIdx
                                  ]
                                : lastWeekLog.kg_done
                            }
                            onChange={(v) => {
                              if (isSplit) {
                                const newArr = [...subKgsLog];
                                while (newArr.length < subKgsTarget.length)
                                  newArr.push("");
                                newArr[subIdx] = v;
                                onLogChange(
                                  exercise.id,
                                  idx,
                                  "kg",
                                  newArr.join("+"),
                                );
                              } else onLogChange(exercise.id, idx, "kg", v);
                            }}
                          />
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                          <div className="flex items-center justify-center h-11 sm:h-14 w-full">
                            {phaseRest &&
                            phaseRest !== "0" &&
                            phaseRest !== "-" ? (
                              <div className="transform scale-90 sm:scale-100">
                                <RecoveryTimer
                                  value={phaseRest}
                                  isCompletedProp={isCompleted}
                                />
                              </div>
                            ) : (
                              <div className="h-full bg-slate-800/20 w-full rounded-xl border border-slate-800/50 flex items-center justify-center text-[10px] text-slate-700 font-bold">
                                N/A
                              </div>
                            )}
                          </div>
                          {phaseRest &&
                            phaseRest !== "0" &&
                            phaseRest !== "-" && (
                              <span
                                className={`text-[8px] sm:text-[9px] font-black uppercase tracking-tight mt-1 ${isCompleted ? "text-emerald-500/70" : "text-slate-500"}`}
                              >
                                REC
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <button
                  onClick={() =>
                    onLogChange(
                      exercise.id,
                      idx,
                      "manual_complete",
                      isCompleted,
                    )
                  }
                  className={`w-full py-2.5 rounded-xl font-black text-[9px] uppercase tracking-widest border-2 transition-all 
                    ${
                      isCompleted
                        ? "bg-emerald-600 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : `bg-slate-800/50 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500`
                    }`}
                >
                  {isCompleted ? (
                    <Check size={14} className="mx-auto" />
                  ) : (
                    "CONFERMA SET"
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL PER VIDEO YOUTUBE */}
      <YoutubeModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={exercise.youtube_link}
        title={exercise.name}
      />
    </div>
  );
}
</file>

<file path="src/components/ClientArea/ProfileTab.jsx">
/**
 * TITOLO: Profile Tab Component
 * DESCRIZIONE: Sezione dedicata alla Gamification e al profilo dell'utente.
 * RESPONSABILITÀ: Rendering di XP, Livelli, Daily Quests e riscatto del Loot settimanale.
 * COLLABORAZIONI: Utilizza XPBar, DailyQuests, TrophyCase e WeekendLoot.
 */

import React from "react";
import XPBar from "../Gamification/XPBar";
import DailyQuests from "../Gamification/DailyQuests";
import TrophyCase from "../Gamification/TrophyCase";
import WeekendLoot from "../Gamification/WeekendLoot";

export default function ProfileTab({
  xp,
  level,
  chestProgress,
  onClaimLoot,
  onGamificationUpdate,
  token,
}) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      {/* 1. Barra Esperienza e Livello */}
      <XPBar xp={xp} level={level} />

      {/* 2. Bottino del Weekend (Chest) */}
      <WeekendLoot
        questCount={chestProgress}
        totalQuestsNeeded={20}
        onClaim={onClaimLoot}
      />

      {/* 3. Bacheca Trofei */}
      <TrophyCase level={level} />

      {/* 4. Sfide Giornaliere */}
      <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/50">
        <DailyQuests token={token} onUpdate={onGamificationUpdate} />
      </div>
    </div>
  );
}
</file>

<file path="src/components/ClientArea/RecoveryTimer.jsx">
/**
 * TITOLO: Recovery Timer (Pixel-Perfect & Crash-Proof)
 * DESCRIZIONE: Timer ottimizzato per griglia a 3 colonne con gestione audio e scaling.
 * FIX: Rimozione dipendenze da "exercise" per evitare crash, allineamento compatto.
 */

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Square, BellRing, CheckCircle2 } from "lucide-react";

export default function RecoveryTimer({
  value,
  onFinish,
  small,
  accentColor = "orange",
  isCompletedProp = false,
}) {
  const [status, setStatus] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCompleted, setIsCompleted] = useState(isCompletedProp);

  const endTimeRef = useRef(null);
  const remainingTimeRef = useRef(0);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const beepIntervalRef = useRef(null);

  // Mappatura colori per Tailwind JIT (Classi intere)
  const colorMap = {
    orange: {
      border: "border-orange-500/40",
      text: "text-orange-400",
      bg: "bg-orange-600",
      lightBg: "bg-orange-500/10",
    },
    red: {
      border: "border-red-500/40",
      text: "text-red-400",
      bg: "bg-red-600",
      lightBg: "bg-red-500/10",
    },
    blue: {
      border: "border-blue-500/40",
      text: "text-blue-400",
      bg: "bg-blue-600",
      lightBg: "bg-blue-500/10",
    },
    emerald: {
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      bg: "bg-emerald-600",
      lightBg: "bg-emerald-500/10",
    },
  };
  const theme = colorMap[accentColor] || colorMap.orange;

  useEffect(() => {
    const numericValue = parseInt(value?.toString().replace(/\D/g, "") || 0);
    remainingTimeRef.current = numericValue;
    setTimeLeft(numericValue);
    setIsCompleted(isCompletedProp);
  }, [value, isCompletedProp]);

  // Engine Audio Beep
  const playBiBeep = () => {
    try {
      if (!audioCtxRef.current)
        audioCtxRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const playTone = (time, freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.2, time + 0.01);
        gain.gain.linearRampToValueAtTime(0, time + 0.1);
        osc.start(time);
        osc.stop(time + 0.12);
      };
      const now = ctx.currentTime;
      playTone(now, 1200);
      playTone(now + 0.15, 1200);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (status === "finished") {
      playBiBeep();
      beepIntervalRef.current = setInterval(playBiBeep, 2000);
    } else if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
    }
    return () => clearInterval(beepIntervalRef.current);
  }, [status]);

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const diff = Math.ceil((endTimeRef.current - now) / 1000);
        if (diff <= 0) {
          setTimeLeft(0);
          setStatus("finished");
          clearInterval(intervalRef.current);
        } else {
          setTimeLeft(diff);
        }
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [status]);

  const handleStart = (e) => {
    e?.stopPropagation();
    endTimeRef.current = Date.now() + remainingTimeRef.current * 1000;
    setStatus("running");
  };

  const handlePause = (e) => {
    e?.stopPropagation();
    remainingTimeRef.current = Math.max(
      0,
      (endTimeRef.current - Date.now()) / 1000
    );
    setStatus("paused");
  };

  const handleReset = (e) => {
    e?.stopPropagation();
    const numericValue = parseInt(value?.toString().replace(/\D/g, "") || 0);
    remainingTimeRef.current = numericValue;
    setTimeLeft(numericValue);
    setStatus("idle");
    setIsCompleted(false);
  };

  const handleConfirmCompletion = (e) => {
    e?.stopPropagation();
    setStatus("idle");
    setIsCompleted(true);
    if (onFinish) onFinish();
  };

  const timeDisplay =
    timeLeft > 59
      ? `${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
          .toString()
          .padStart(2, "0")}`
      : `${timeLeft}`;
  const dynamicFont =
    timeDisplay.length > 2 ? "text-[15px] sm:text-base" : "text-lg sm:text-xl";
  const iconSize = 14;

  // Box base senza margini verticali extra per l'allineamento rialzato
  const baseBoxClass = `flex items-center justify-center gap-1.5 rounded-xl border-2 transition-all duration-300 h-11 sm:h-14 w-full shadow-lg active:scale-95 px-2`;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[100px] mx-auto group">
      {isCompleted && status !== "finished" ? (
        <button
          onClick={handleReset}
          className={`${baseBoxClass} bg-emerald-500/10 border-emerald-500/50 text-emerald-400`}
        >
          <CheckCircle2 size={iconSize} />
          <span className={`font-mono font-black ${dynamicFont} leading-none`}>
            {timeDisplay}
          </span>
        </button>
      ) : status === "idle" ? (
        <button
          onClick={handleStart}
          className={`${baseBoxClass} bg-slate-900 ${theme.border} ${theme.text} hover:bg-slate-800`}
        >
          <Play size={iconSize} fill="currentColor" />
          <span className={`font-mono font-black ${dynamicFont} leading-none`}>
            {timeDisplay}
          </span>
        </button>
      ) : status === "running" ? (
        <div
          className={`${baseBoxClass} ${theme.bg} border-white/20 text-white animate-pulse`}
        >
          <span
            className={`font-mono font-black ${dynamicFont} leading-none flex-1 text-center`}
          >
            {timeDisplay}
          </span>
          <button
            onClick={handlePause}
            className="p-0.5 hover:bg-white/20 rounded"
          >
            <Pause size={iconSize} fill="currentColor" />
          </button>
        </div>
      ) : status === "paused" ? (
        <div
          className={`${baseBoxClass} bg-slate-700 border-slate-500 text-white`}
        >
          <span
            className={`font-mono font-black ${dynamicFont} opacity-50 flex-1 text-center leading-none`}
          >
            {timeDisplay}
          </span>
          <div className="flex items-center gap-1">
            <button onClick={handleStart} className="p-0.5">
              <Play size={iconSize - 2} fill="currentColor" />
            </button>
            <button onClick={handleReset} className="p-0.5 text-red-400">
              <Square size={iconSize - 2} fill="currentColor" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleConfirmCompletion}
          className={`${baseBoxClass} bg-emerald-500 border-emerald-300 text-white animate-bounce shadow-[0_0_15px_rgba(16,185,129,0.5)]`}
        >
          <BellRing size={iconSize} className="animate-shake" />
          <span className="font-black text-[10px] uppercase">OK</span>
        </button>
      )}
    </div>
  );
}
</file>

<file path="src/components/ClientArea/StandardWorkoutView.jsx">
// ! frontend/src/components/ClientArea/StandardWorkoutView.jsx
/**
 * TITOLO: Standard Workout View (Classic Engine + PDF Export FIX)
 * DESCRIZIONE: Gestisce la visualizzazione delle schede pesi e l'esportazione in PDF.
 * FIX: Risoluzione TypeError autoTable per ambienti Vite/ESM.
 */

import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import ClientSetEngine from "./ClientSetEngine";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import { useAuth } from "../../context/AuthContext";

// Import librerie PDF - CAMBIATO QUI
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function StandardWorkoutView({ workoutData, currentWeek }) {
  const { logs, updateLog } = useWorkoutStore();
  const { user, token } = useAuth();

  const [expandedExercises, setExpandedExercises] = useState(new Set());

  const toggleExercise = (id) => {
    setExpandedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  /**
   * FUNZIONE GENERAZIONE PDF
   */
  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      const dateStr = new Date().toLocaleDateString("it-IT");
      const workoutLogs = logs[workoutData.id] || [];

      // 1. Header del Documento
      doc.setFontSize(20);
      doc.setTextColor(40, 40, 40);
      doc.text("MYTRAINUP - SCHEDA ALLENAMENTO", 14, 22);

      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Cliente: ${user?.name || "Utente"}`, 14, 30);
      doc.text(`Data Esportazione: ${dateStr}`, 14, 35);
      doc.text(`Scheda: ${workoutData.title}`, 14, 40);
      doc.text(`Settimana: ${currentWeek}`, 14, 45);

      // 2. Preparazione Dati Tabella
      const tableRows = [];

      workoutData.exercises.forEach((ex, index) => {
        ex.config.forEach((set, setIdx) => {
          const log = workoutLogs.find(
            (l) =>
              l.exercise_id === ex.id &&
              l.week_number === currentWeek &&
              l.set_index === setIdx,
          );

          tableRows.push([
            setIdx === 0 ? `${index + 1}. ${ex.name}` : "",
            `Set ${setIdx + 1}`,
            log?.reps_done || set.reps || "-",
            log?.kg_done || set.kg || "-",
            set.rest || "-",
            log?.notes || set.note || "-",
          ]);
        });
        // Separatore tra esercizi
        tableRows.push(["", "", "", "", "", ""]);
      });

      // 3. Generazione Tabella - CAMBIATO QUI: chiamata a funzione invece di metodo doc
      autoTable(doc, {
        startY: 55,
        head: [["ESERCIZIO", "SET", "REPS", "KG", "RECUPERO", "NOTE"]],
        body: tableRows,
        theme: "striped",
        headStyles: { fillColor: [234, 88, 12], textColor: [255, 255, 255] },
        styles: { fontSize: 8, cellPadding: 3 },
        columnStyles: {
          0: { fontStyle: "bold", cellWidth: 50 },
          5: { cellWidth: 50 },
        },
        didParseCell: function (data) {
          if (data.row.raw[0] === "" && data.row.raw[1] === "") {
            data.cell.styles.fillColor = [255, 255, 255];
          }
        },
      });

      // 4. Download
      const fileName = `MyTrainUp_${workoutData.title.replace(/\s+/g, "_")}_Sett${currentWeek}.pdf`;
      doc.save(fileName);
    } catch (error) {
      console.error("Errore durante la generazione del PDF:", error);
      alert("Si è verificato un errore durante la creazione del PDF.");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-orange-500" />
          <span className="text-xs font-black text-white uppercase tracking-widest">
            Sessione Settimana {currentWeek}
          </span>
        </div>

        <button
          onClick={generatePDF}
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-black transition-all shadow-lg active:scale-95"
        >
          <Download size={14} />
          ESPORTA PDF
        </button>
      </div>

      <div className="space-y-4">
        {workoutData.exercises.map((ex) => (
          <ClientSetEngine
            key={ex.id}
            exercise={ex}
            currentWeek={currentWeek}
            logs={logs[workoutData.id] || []}
            isExpanded={expandedExercises.has(ex.id)}
            onToggleExpand={() => toggleExercise(ex.id)}
            isCircuitMode={false}
            onLogChange={(exId, setIdx, field, val) =>
              updateLog(
                workoutData.id,
                exId,
                setIdx,
                field,
                val,
                token,
                user.id,
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
</file>

<file path="src/components/ClientArea/WorkoutFeedback.jsx">
// MyTrainUp Frontend: Componente Feedback Scheda (Rating e Commento)

// Questo file (WorkoutFeedback.jsx) implementa l'interfaccia utente che permette al Cliente
// di valutare una scheda di allenamento (rating a stelle e commento testuale) dopo averla completata.

// Funzioni chiave:
// 1. Gestione Stato (Status): Traccia il ciclo di vita del feedback:
// - 'idle': Stato iniziale, in attesa del rating.
// - 'commenting': Dopo aver selezionato il rating, l'utente può inserire un commento.
// - 'saved': Il feedback è stato inviato con successo al backend.
// 2. handleRate(value): Aggiorna il rating in base alla stella cliccata.
// 3. handleSubmit: Funzione asincrona che chiama l'API `sendWorkoutFeedback` per inviare
// - il rating e il commento al backend.
// - Il backend utilizza questo evento per aggiornare la scheda e generare una notifica 'WORKOUT_FEEDBACK'
// - al Trainer.
// 4. Interfaccia: L'interfaccia utilizza un approccio a stati che mostra progressivamente:
// - Le stelle interattive.
// - Il pulsante per aprire l'area commento (solo se è stato dato un rating).
// - Il campo di testo e il pulsante di conferma (fase 'commenting').
// - Il messaggio di successo (fase 'saved').

import React, { useState } from 'react';
import { Star, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { sendWorkoutFeedback } from '../../api/workouts';

export default function WorkoutFeedback({ workoutId, initialRating = 0, initialComment = "" }) {
  // Stati: 'idle' (iniziale), 'commenting' (scrive testo), 'saved' (finito)
  const [status, setStatus] = useState(initialRating > 0 ? 'saved' : 'idle');
  const [rating, setRating] = useState(initialRating);
  const [comment, setComment] = useState(initialComment);

  // Gestione click sulle stelle
  const handleRate = (value) => {
    if (status === 'saved') return; // Se già salvato, non modificare
    setRating(value);
  };

  // Primo step: Clicco "Invia Valutazione" -> Apro area testo
  const handleOpenComment = () => {
    if (rating === 0) return alert("Seleziona almeno una stella!");
    setStatus('commenting');
  };

  // Secondo step: Confermo tutto
  const handleSubmit = async () => {
    const success = await sendWorkoutFeedback(workoutId, rating, comment);
    if (success) {
      setStatus('saved');
    } else {
      alert("Errore nel salvataggio del feedback.");
    }
  };

  return (
    <div className="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
      
      {/* HEADER: Titolo e Stelle */}
      <div className="flex flex-col items-center gap-2 mb-3">
        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
          Com'è andato l'allenamento?
        </h4>
        
        {/* STELLE INTERATTIVE */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRate(star)}
              disabled={status === 'saved'}
              className={`transition-all transform ${
                star <= rating 
                  ? "text-yellow-400 scale-110" 
                  : "text-slate-600 hover:text-yellow-400/50"
              }`}
            >
              <Star 
                fill={star <= rating ? "currentColor" : "none"} 
                size={28} 
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>
      </div>

      {/* BODY: Pulsanti e Area Testo */}
      <div className="space-y-3">
        
        {/* FASE 1: Bottone Iniziale */}
        {status === 'idle' && (
          <button 
            onClick={handleOpenComment}
            className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${
              rating > 0 
                ? "bg-orange-500 text-white shadow-lg hover:bg-orange-600" 
                : "bg-slate-700 text-slate-500 cursor-not-allowed"
            }`}
          >
            Invia Valutazione
          </button>
        )}

        {/* FASE 2: Area Testo + Conferma */}
        {status === 'commenting' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <textarea
              placeholder="Lascia un commento (opzionale)... es. 'Tutto bene ma stanco'"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 mb-2 resize-none"
              rows="3"
            />
            <button 
              onClick={handleSubmit}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send size={16} /> Conferma e Invia
            </button>
          </div>
        )}

        {/* FASE 3: Messaggio Successo */}
        {status === 'saved' && (
          <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded-lg flex items-center gap-3 animate-in zoom-in duration-300">
            <CheckCircle className="text-emerald-500" size={24} />
            <div className="text-left">
              <p className="text-emerald-400 font-bold text-sm">Feedback Inviato!</p>
              <p className="text-emerald-200/60 text-xs italic">
                "{comment || "Nessun commento scritto"}"
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
</file>

<file path="src/components/ClientArea/WorkoutTab.jsx">
/**
 * TITOLO: Workout Tab (Progress Edition)
 * DESCRIZIONE: Punto di ingresso con visualizzazione del progresso del ciclo.
 * LOGICA: Calcola la percentuale di completamento basandosi sulle settimane totali e i log salvati.
 */

import React, { useState } from "react";
import {
  ClipboardList,
  ChevronDown,
  ChevronUp,
  Layers,
  Zap,
  Trophy
} from "lucide-react";
import ActiveWorkoutTimer from "./ActiveWorkoutTimer";
import { prepareWorkoutData } from "../../utils/exerciseMapper";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import { useAuth } from "../../context/AuthContext";

import StandardWorkoutView from "./StandardWorkoutView";
import CircuitWorkoutView from "./CircuitWorkoutView";

export default function WorkoutTab() {
  const {
    folders,
    selectedFolder,
    setSelectedFolder,
    workouts,
    completions,
    activeWeeks,
    setActiveWeeks,
    finishWorkout,
  } = useWorkoutStore();

  const { user, token } = useAuth();
  const [expandedWorkouts, setExpandedWorkouts] = useState([]);

  const toggleWorkout = (id) => {
    setExpandedWorkouts((prev) =>
      prev.includes(id) ? prev.filter((wid) => wid !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      
      {/* 1. SELETTORE CARTELLE */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-700 pb-4">
        <h3 className="font-bold text-xl text-white flex items-center gap-2">
          <ClipboardList className="text-orange-500" /> Le tue Schede
        </h3>

        <select
          className="bg-slate-900 border border-slate-600 text-white p-2.5 rounded-lg text-sm font-bold outline-none focus:ring-1 focus:ring-orange-500 w-full sm:w-auto cursor-pointer"
          value={selectedFolder || ""}
          onChange={(e) => setSelectedFolder(parseInt(e.target.value))}
          disabled={folders.length === 0}
        >
          {folders.length === 0 && <option>Nessuna cartella</option>}
          {folders.map((f) => (
            <option key={f.id} value={f.id} className="bg-slate-800">
              {f.name}
            </option>
          ))}
        </select>
      </div>

      {/* 2. LISTA SCHEDE */}
      <div className="space-y-4">
        {workouts.map((w) => {
          const workoutData = prepareWorkoutData(w);
          const isOpen = expandedWorkouts.includes(w.id);
          const currentWeek = activeWeeks[w.id] || 1;
          
          // CALCOLO PROGRESSO
          const totalWeeks = parseInt(w.duration_weeks) || 1;
          const completedWeeksCount = Object.keys(completions[w.id] || {}).length;
          const progressPercent = Math.min(Math.round((completedWeeksCount / totalWeeks) * 100), 100);

          return (
            <div
              key={w.id}
              className={`bg-slate-800 border rounded-2xl overflow-hidden shadow-md transition-all ${
                isOpen ? "border-slate-500 shadow-xl" : "border-slate-700"
              }`}
            >
              {/* Header Scheda con Progress Bar */}
              <div
                onClick={() => toggleWorkout(w.id)}
                className="bg-slate-900 text-white p-4 cursor-pointer hover:bg-slate-800 transition-colors"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      {workoutData.isCircuit && <Zap size={16} className="text-orange-500" />}
                      <h4 className="font-black text-lg leading-tight tracking-tight uppercase">
                        {w.title}
                      </h4>
                    </div>
                    {w.cycle_name && (
                      <div className="flex items-center gap-1.5">
                        <Layers size={12} className="text-orange-500" />
                        <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em]">
                          {w.cycle_name}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Stato di completamento visivo */}
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Progresso</span>
                      <span className="text-xs font-black text-white">{progressPercent}%</span>
                    </div>
                    <div className="text-slate-500 bg-slate-800 p-2 rounded-lg">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </div>

                {/* BARRA DI PROGRESSO ORIZZONTALE */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                  <div 
                    className={`h-full transition-all duration-1000 ease-out rounded-full ${
                      progressPercent === 100 ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-orange-500"
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                
                {progressPercent === 100 && (
                  <div className="flex items-center gap-1 mt-2 animate-pulse">
                    <Trophy size={10} className="text-emerald-400" />
                    <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Ciclo Completato</span>
                  </div>
                )}
              </div>

              {isOpen && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  
                  {/* Selettore Settimane */}
                  <div className="flex gap-2 overflow-x-auto p-3 bg-slate-900/50 border-b border-slate-700 scrollbar-hide">
                    {[...Array(totalWeeks)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setActiveWeeks({ ...activeWeeks, [w.id]: i + 1 })}
                        className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap border-2 ${
                          currentWeek === i + 1
                            ? "bg-orange-600 text-white border-orange-400"
                            : "bg-slate-800 text-slate-500 border-slate-700"
                        }`}
                      >
                        SETTIMANA {i + 1}
                      </button>
                    ))}
                  </div>

                  <div className="px-4 py-2">
                    <ActiveWorkoutTimer
                      workoutId={w.id}
                      weekNumber={currentWeek}
                      finishedTime={completions[w.id]?.[currentWeek]}
                      onFinish={(time) =>
                        finishWorkout(w.id, time, token, user.id)
                      }
                    />
                  </div>

                  {/* Smistamento Visualizzazione */}
                  <div className="p-4">
                    {workoutData.isCircuit ? (
                      <CircuitWorkoutView
                        workoutData={workoutData}
                        currentWeek={currentWeek}
                      />
                    ) : (
                      <StandardWorkoutView
                        workoutData={workoutData}
                        currentWeek={currentWeek}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
</file>

<file path="src/components/ClientArea/YoutubeModal.jsx">
// ! frontend/src/components/ClientArea/YoutubeModal.jsx
/**
 * TITOLO: Youtube Modal Player
 * DESCRIZIONE: Modal per la visualizzazione dei video tutorial degli esercizi.
 * UPDATE: Pulizia Feature Policy per rimozione warning console e ottimizzazione player.
 */

import React from "react";
import { X } from "lucide-react";

export default function YoutubeModal({ isOpen, onClose, videoUrl, title }) {
  if (!isOpen || !videoUrl) return null;

  /**
   * Converte URL standard (watch?v=...) o abbreviati (youtu.be/...)
   * nel formato embed richiesto dall'iframe.
   */
  const getEmbedUrl = (url) => {
    try {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = match && match[2].length === 11 ? match[2] : null;

      // modestbranding=1 nasconde il logo YouTube nella barra di controllo
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
        : null;
    } catch (e) {
      return null;
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Header Modal */}
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-slate-800/50">
          <h3 className="text-white font-black uppercase tracking-tight text-sm truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container (16:9 Aspect Ratio) */}
        <div className="relative pt-[56.25%] bg-black">
          {embedUrl ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={embedUrl}
              title={title}
              // Pulizia 'allow': rimossi i parametri obsoleti che causavano i warning
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm italic">
              Link video non valido o non supportato
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
</file>

<file path="src/components/ClientSelector/ClientSelector.jsx">
// ! frontend/src/components/ClientSelector/ClientSelector.jsx
/**
 * TITOLO: Client Selector (Archive Edition)
 * DESCRIZIONE: Gestisce la lista dei clienti con tasto archiviazione rapida accanto al nome.
 */

import React, { useState, useEffect } from "react";
import { Users, UserPlus, Trash2, Archive, RotateCcw } from "lucide-react";
import { API_URL } from "../../api/config";

export default function ClientSelector({
  selectedClient,
  onSelect,
  showArchived,
}) {
  const [clients, setClients] = useState([]);
  const [newName, setNewName] = useState("");
  const token = sessionStorage.getItem("fit_token");

  const fetchClients = async () => {
    try {
      const activeParam = showArchived ? 0 : 1;
      const res = await fetch(`${API_URL}/auth/clients?active=${activeParam}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setClients(data);
    } catch (err) {
      console.error("Errore caricamento clienti:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [showArchived]);

  // FUNZIONE ARCHIVIAZIONE/RIPRISTINO RAPIDO
  const toggleArchive = async (e, client) => {
    e.stopPropagation(); // Evita di selezionare il cliente mentre lo archivi
    const confirmMsg = client.is_active
      ? `Archiviare ${client.name}?`
      : `Ripristinare ${client.name}?`;

    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await fetch(
        `${API_URL}/auth/users/${client.id}/toggle-active`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (res.ok) {
        fetchClients(); // Ricarica la lista locale
        if (selectedClient?.id === client.id) onSelect(null); // Deseleziona se rimosso
      }
    } catch (err) {
      alert("Errore durante l'operazione");
    }
  };

  const addClient = async () => {
    if (!newName) return;
    try {
      const res = await fetch(`${API_URL}/clients/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newName }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(`✅ Cliente creato!\n👤 User: ${data.username}\n🔑 Pass: fit123`);
        setNewName("");
        fetchClients();
      }
    } catch (err) {
      console.error("Errore Add Client:", err);
    }
  };

  const deleteClient = async (id) => {
    if (!confirm("Eliminare DEFINITIVAMENTE il cliente?")) return;
    try {
      const res = await fetch(`${API_URL}/clients/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        fetchClients();
        if (selectedClient?.id === id) onSelect(null);
      }
    } catch (err) {
      alert("Errore connessione");
    }
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 space-y-4 h-full flex flex-col">
      <div className="flex items-center gap-2 text-white border-b border-slate-700 pb-2">
        {showArchived ? (
          <Archive className="text-slate-400" size={20} />
        ) : (
          <Users className="text-orange-500" size={20} />
        )}
        <h3 className="font-bold text-lg">
          {showArchived ? "Archivio" : "Clienti"}
        </h3>
      </div>

      {!showArchived && (
        <div className="flex gap-2 animate-in fade-in duration-300">
          <input
            type="text"
            placeholder="Nuovo cliente..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 p-2.5 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm outline-none focus:border-orange-500 transition-all"
          />
          <button
            onClick={addClient}
            className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center"
          >
            <UserPlus size={20} />
          </button>
        </div>
      )}

      <ul className="space-y-2 mt-2 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        {clients.map((c) => (
          <li
            key={c.id}
            className={`flex justify-between items-center bg-slate-900 p-2 rounded-lg border transition-all group cursor-pointer 
                          ${selectedClient?.id === c.id ? "border-orange-500" : "border-slate-800 hover:border-slate-600"}
                         `}
            onClick={() => onSelect(c)}
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span
                className={`truncate text-sm font-medium ${selectedClient?.id === c.id ? "text-orange-500 font-bold" : "text-slate-300 group-hover:text-white"}`}
              >
                {c.name}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {/* TASTO ARCHIVIA/RIPRISTINA ACCANTO AL NOME */}
              <button
                onClick={(e) => toggleArchive(e, c)}
                className={`p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100 ${showArchived ? "text-emerald-500 hover:bg-emerald-500/20" : "text-slate-500 hover:bg-slate-700 hover:text-white"}`}
                title={showArchived ? "Ripristina" : "Archivia"}
              >
                {showArchived ? <RotateCcw size={16} /> : <Archive size={16} />}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteClient(c.id);
                }}
                className="text-slate-600 hover:text-red-500 p-1.5 hover:bg-slate-800 rounded-md transition-all opacity-0 group-hover:opacity-100"
                title="Elimina"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
</file>

<file path="src/components/Gamification/DailyQuests.jsx">
// frontend/src/components/Gamification/DailyQuests.jsx
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Circle,
  Zap,
  Loader,
  Apple,
  Activity,
  Moon,
  Brain,
  Star,
  Info,
  X,
} from "lucide-react";
import { fetchDailyQuests, completeQuest } from "../../api/gamification";

export default function DailyQuests({ token, onUpdate }) {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  // --- HELPER: ICONE E COLORI PER CATEGORIA ---
  const getCategoryDetails = (category) => {
    switch (category) {
      case "nutrition":
        return {
          icon: <Apple size={18} />,
          color: "text-green-400",
          bg: "bg-green-400/10 border-green-400/20",
        };
      case "movement":
        return {
          icon: <Activity size={18} />,
          color: "text-blue-400",
          bg: "bg-blue-400/10 border-blue-400/20",
        };
      case "recovery":
        return {
          icon: <Moon size={18} />,
          color: "text-purple-400",
          bg: "bg-purple-400/10 border-purple-400/20",
        };
      case "mindset":
        return {
          icon: <Brain size={18} />,
          color: "text-pink-400",
          bg: "bg-pink-400/10 border-pink-400/20",
        };
      default:
        return {
          icon: <Star size={18} />,
          color: "text-yellow-400",
          bg: "bg-yellow-400/10 border-yellow-400/20",
        };
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchDailyQuests(token);
        setQuests(data.quests);
        // MODIFICA FONDAMENTALE: Passiamo data.weekly_progress (che è il forziere accumulato)
        if (onUpdate) onUpdate(data.xp, data.level, data.weekly_progress);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [token]);

  const handleToggle = async (quest) => {
    if (processingId === quest.id) return;
    setProcessingId(quest.id);
    try {
      const result = await completeQuest(quest.id, token);

      // Aggiorniamo la lista locale per l'effetto visivo immediato
      const updatedQuests = quests.map((q) =>
        q.id === quest.id ? { ...q, is_completed: result.new_status } : q
      );
      setQuests(updatedQuests);

      // MODIFICA FONDAMENTALE: Passiamo result.weekly_progress aggiornato dal DB
      if (onUpdate)
        onUpdate(result.total_xp, result.current_level, result.weekly_progress);

      if (result.leveled_up) {
        // Opzionale: puoi usare una modale custom invece dell'alert
        alert("🎉 LEVEL UP! Complimenti!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setProcessingId(null);
    }
  };

  const renderQuestCard = (quest) => {
    const isDone = quest.is_completed === 1;
    const isProcessing = processingId === quest.id;
    const { icon, color, bg } = getCategoryDetails(quest.category || "default");
    const isBonus = quest.difficulty === "hard";

    return (
      <div
        key={quest.id}
        onClick={() => handleToggle(quest)}
        className={`
                    relative overflow-hidden p-3 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer group min-h-[60px]
                    ${
                      isDone
                        ? "bg-slate-900/40 border-slate-700/50 opacity-60 grayscale-[0.5]"
                        : isBonus
                        ? "bg-slate-800 border-orange-500/30 shadow-sm shadow-orange-900/20 hover:border-orange-500 hover:bg-slate-750"
                        : "bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-750"
                    }
                `}
      >
        <div className="flex items-center gap-3 z-10 flex-1">
          <div
            className={`p-2 rounded-lg flex-shrink-0 ${
              isDone ? "bg-slate-800 text-slate-500" : `${bg} ${color}`
            }`}
          >
            {icon}
          </div>
          <div className="flex-1 pr-2">
            <p
              className={`font-bold text-sm leading-tight ${
                isDone
                  ? "text-slate-500 line-through decoration-slate-600"
                  : "text-slate-200"
              }`}
            >
              {quest.label}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 z-10 pl-2 flex-shrink-0">
          <div
            className={`
                        hidden sm:block text-xs font-bold px-2 py-1 rounded-md border 
                        ${
                          isDone
                            ? "bg-slate-800 text-slate-500 border-slate-700"
                            : isBonus
                            ? "bg-orange-900/40 text-orange-300 border-orange-500/30"
                            : "bg-slate-900 text-slate-400 border-slate-600"
                        }
                    `}
          >
            +{quest.xp_reward} XP
          </div>
          <div
            className={`transition-all duration-300 ${
              isDone
                ? "text-emerald-500 scale-110"
                : "text-slate-600 group-hover:text-orange-400"
            }`}
          >
            {isProcessing ? (
              <Loader className="animate-spin" size={22} />
            ) : isDone ? (
              <CheckCircle size={22} className="fill-emerald-900/20" />
            ) : (
              <Circle size={22} />
            )}
          </div>
        </div>
        {isDone && (
          <div className="absolute inset-0 bg-emerald-500/5 z-0 pointer-events-none"></div>
        )}
      </div>
    );
  };

  if (loading)
    return (
      <div className="p-4 text-center text-slate-500">
        <Loader className="animate-spin inline mr-2" size={16} /> Caricamento
        quest...
      </div>
    );

  const standardQuests = quests.filter((q) => q.difficulty !== "hard");
  const bonusQuests = quests.filter((q) => q.difficulty === "hard");

  return (
    <div className="space-y-3 relative">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider opacity-80">
          <Zap className="text-yellow-400 fill-yellow-400" size={16} />
          Obiettivi di Oggi
        </h4>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowInfo(true);
          }}
          className="text-slate-500 hover:text-orange-400 transition-colors p-1"
        >
          <Info size={18} />
        </button>
      </div>

      <div className="grid gap-2">{standardQuests.map(renderQuestCard)}</div>

      {bonusQuests.length > 0 && (
        <div className="mt-4 pt-2 border-t border-slate-700/50">
          <p className="text-xs text-orange-400 font-bold mb-2 uppercase tracking-widest flex items-center gap-1">
            <Star size={12} className="fill-orange-400" /> Sfida Bonus
          </p>
          <div className="grid gap-2">{bonusQuests.map(renderQuestCard)}</div>
        </div>
      )}

      {showInfo && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] animate-in fade-in duration-300"
            onClick={() => setShowInfo(false)}
          ></div>

          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-2xl z-[1000] animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-3">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Info className="text-orange-400" size={20} /> Guida agli
                Obiettivi
              </h3>
              <button
                onClick={() => setShowInfo(false)}
                className="text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Le <strong>Quest Giornaliere</strong> sono piccoli obiettivi per
                migliorare il tuo stile di vita oltre l'allenamento.
              </p>

              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                <p className="font-bold text-orange-400 mb-1">
                  Come funzionano:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Clicca su un obiettivo per segnarlo come completato.</li>
                  <li>
                    Ogni completamento ti assegna <strong>punti XP</strong>.
                  </li>
                  <li>
                    Gli XP aumentano il tuo <strong>Livello Eroe</strong>.
                  </li>
                  <li>
                    Le quest completate riempiono il tuo{" "}
                    <strong>Forziere</strong> (0/20).
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setShowInfo(false)}
                className="w-full mt-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all shadow-lg"
              >
                Ho capito!
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
</file>

<file path="src/components/Gamification/TrophyCase.jsx">
// frontend/src/components/Gamification/TrophyCase.jsx
import React from "react";
import { Shield, Star, Trophy, Crown, Flame, Lock, Medal } from "lucide-react";

export default function TrophyCase({ level }) {
  const badges = [
    {
      id: 1,
      lvl: 10,
      label: "Neofita",
      icon: <Flame size={22} />,
      color: "from-orange-400 to-red-600",
      shape: "shape-rosette", // Coccarda
    },
    {
      id: 2,
      lvl: 25,
      label: "Atleta",
      icon: <Medal size={22} />,
      color: "from-slate-300 to-slate-500",
      shape: "shape-shield", // Scudo antico
    },
    {
      id: 3,
      lvl: 50,
      label: "Veterano",
      icon: <Trophy size={22} />,
      color: "from-yellow-300 to-yellow-600",
      shape: "shape-hexagon", // Esagono
    },
    {
      id: 4,
      lvl: 75,
      label: "Eroe",
      icon: <Crown size={22} />,
      color: "from-purple-400 to-indigo-600",
      shape: "shape-star", // Stella
    },
    {
      id: 5,
      lvl: 100,
      label: "Leggenda",
      icon: <Star size={22} />,
      color: "from-cyan-300 to-blue-500",
      shape: "shape-diamond", // Diamante
    },
  ];

  return (
    <div className="bg-slate-900/60 border border-slate-700/50 rounded-3xl p-5 mb-6 shadow-2xl relative overflow-hidden">
      {/* Titolo stilizzato */}
      <div className="flex flex-col items-center mb-6">
        <h4 className="text-[10px] uppercase tracking-[0.3em] text-orange-500/80 font-black">
          Hall of Fame
        </h4>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-1"></div>
      </div>

      <div className="flex justify-between items-center gap-1">
        {badges.map((badge) => {
          const isUnlocked = level >= badge.lvl;

          return (
            <div
              key={badge.id}
              className="flex flex-col items-center gap-3 flex-1 group"
            >
              {/* Slot Emblema */}
              <div className="relative">
                {/* Effetto ombra esterna solo se sbloccato */}
                {isUnlocked && (
                  <div
                    className={`absolute inset-0 blur-md opacity-40 bg-gradient-to-br ${badge.color} scale-110`}
                  ></div>
                )}

                <div
                  className={`
                                    relative w-14 h-14 flex items-center justify-center transition-all duration-1000
                                    ${badge.shape}
                                    ${
                                      isUnlocked
                                        ? `bg-gradient-to-br ${badge.color} shadow-inner brightness-110 scale-100 rotate-0`
                                        : "bg-slate-800/80 border border-slate-700 opacity-30 scale-90"
                                    }
                                `}
                >
                  {isUnlocked ? (
                    <div className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] animate-in zoom-in spin-in-12 duration-700">
                      {badge.icon}
                    </div>
                  ) : (
                    <Lock size={14} className="text-slate-500" />
                  )}

                  {/* Overlay di luce per effetto "vetro" */}
                  {isUnlocked && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none"></div>
                  )}
                </div>
              </div>

              {/* Label e Livello */}
              <div className="text-center">
                <p
                  className={`text-[8px] font-bold uppercase tracking-tighter transition-colors ${
                    isUnlocked ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {badge.label}
                </p>
                <p
                  className={`text-[10px] font-black mt-0.5 ${
                    isUnlocked ? "text-orange-400" : "text-slate-700"
                  }`}
                >
                  L{badge.lvl}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Definizione delle forme tramite Clip-Path */}
      <style>{`
                /* Coccarda/Fiocco */
                .shape-rosette {
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                    /* Variato leggermente per sembrare un fiocco a 10 punte */
                    clip-path: polygon(50% 0%, 65% 15%, 85% 15%, 85% 35%, 100% 50%, 85% 65%, 85% 85%, 65% 85%, 50% 100%, 35% 85%, 15% 85%, 15% 65%, 0% 50%, 15% 35%, 15% 15%, 35% 15%);
                }

                /* Scudo Antico */
                .shape-shield {
                    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%);
                }

                /* Esagono */
                .shape-hexagon {
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                }

                /* Stella */
                .shape-star {
                    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                }

                /* Diamante */
                .shape-diamond {
                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                }
            `}</style>
    </div>
  );
}
</file>

<file path="src/components/Gamification/WeekendLoot.jsx">
// frontend/src/components/Gamification/WeekendLoot.jsx
import React, { useState, useEffect } from 'react';
import { Gift, Sparkles } from 'lucide-react';

export default function WeekendLoot({ questCount, totalQuestsNeeded = 5, onClaim }) {
    const [status, setStatus] = useState('locked'); 
    const progressPercent = Math.min(100, (questCount / totalQuestsNeeded) * 100);

    useEffect(() => {
        if (questCount >= totalQuestsNeeded) setStatus('ready');
        else setStatus('locked');
    }, [questCount, totalQuestsNeeded]);

    const handleOpen = () => {
        setStatus('opening');
        setTimeout(() => {
            if (onClaim) onClaim(200);
            setStatus('locked');
        }, 2200);
    };

    return (
        // Ridotto my-12 a my-8 per occupare meno spazio verticale
        <div className="relative my-8 flex flex-col items-center">
            
            {status === 'opening' && (
                <div className="fixed inset-0 z-[9999] pointer-events-none animate-cinematic-flash"></div>
            )}

            {(status === 'ready' || status === 'opening') && (
                // Ridotto scale da 2.5 a 2.0 per adattarsi al forziere più piccolo
                <div className={`absolute inset-0 flex items-center justify-center scale-[2.0] pointer-events-none transition-all duration-700 ${status === 'opening' ? 'scale-[3.5] brightness-200' : ''}`}>
                    <div className="absolute w-16 h-16 bg-orange-500/30 rounded-full blur-[30px] animate-pulse"></div>
                    <div className={`absolute w-48 h-48 opacity-40 badge-rays ${status === 'opening' ? 'animate-spin-fast' : 'animate-spin-slow'}`}></div>
                </div>
            )}

            <div 
                onClick={status === 'ready' ? handleOpen : null}
                className={`
                    relative z-10 p-5 rounded-[2rem] border-[3px] transition-all duration-500
                    ${status === 'ready' 
                        ? 'bg-slate-800 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:scale-110 animate-bounce-subtle cursor-pointer' 
                        : 'bg-slate-900/40 border-slate-700/50 opacity-90'}
                    ${status === 'opening' ? 'animate-chest-burst' : ''}
                `}
            >
                <div className="relative z-20 text-center">
                    {/* Ridotta dimensione Gift da 56 a 44 */}
                    <Gift size={44} className={status === 'ready' || status === 'opening' ? 'text-orange-400' : 'text-slate-600'} />
                    {(status === 'ready' || status === 'opening') && (
                        <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={16} />
                    )}
                </div>

                <div className={`
                    absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full font-black text-[9px] whitespace-nowrap shadow-xl border-2 z-30 transition-all
                    ${status === 'ready' ? 'bg-orange-600 border-orange-400 text-white' : 'bg-slate-800 border-slate-600 text-slate-400'}
                    ${status === 'opening' ? 'scale-0 opacity-0' : 'scale-100'}
                `}>
                    {status === 'ready' ? 'SBLOCCA BOTTINO!' : `${questCount} / ${totalQuestsNeeded} QUEST`}
                </div>
            </div>

            <style>{`
                .badge-rays {
                    background: conic-gradient(
                        from 0deg,
                        transparent 0%,
                        rgba(249, 115, 22, 0.6) 15%,
                        transparent 30%,
                        rgba(249, 115, 22, 0.6) 45%,
                        transparent 60%,
                        rgba(249, 115, 22, 0.6) 75%,
                        transparent 90%,
                        transparent 100%
                    );
                    mask-image: radial-gradient(circle, black 10%, transparent 65%);
                    -webkit-mask-image: radial-gradient(circle, black 10%, transparent 65%);
                }

                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .animate-spin-slow { animation: spin-slow 12s linear infinite; }

                @keyframes spin-fast { from { transform: rotate(0deg); } to { transform: rotate(1080deg); } }
                .animate-spin-fast { animation: spin-fast 2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }

                @keyframes cinematic-flash {
                    0% { background: transparent; backdrop-filter: blur(0px); }
                    80% { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(4px); }
                    100% { background: transparent; backdrop-filter: blur(0px); }
                }
                .animate-cinematic-flash { animation: cinematic-flash 2.2s ease-in-out forwards; }

                @keyframes chest-burst {
                    0% { transform: scale(1) rotate(0); }
                    20% { transform: scale(1.1) rotate(-5deg); }
                    40% { transform: scale(1.2) rotate(5deg); }
                    60% { transform: scale(1.3) rotate(-5deg); brightness: 1.5; }
                    80% { transform: scale(1.6); opacity: 1; filter: brightness(3); }
                    100% { transform: scale(2); opacity: 0; }
                }
                .animate-chest-burst { animation: chest-burst 2.2s ease-in forwards; }

                @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                .animate-bounce-subtle { animation: bounce-subtle 3s ease-in-out infinite; }
            `}</style>
        </div>
    );
}
</file>

<file path="src/components/Gamification/XPBar.jsx">
// frontend/src/components/Gamification/XPBar.jsx
import React from 'react';
import { Trophy } from 'lucide-react';

export default function XPBar({ xp, level }) {
    // FORMULA ESPONENZIALE (Allineata al Backend)
    // XP per iniziare il livello attuale
    const currentLevelStartXp = Math.pow(level - 1, 2) * 50;
    
    // XP necessari per raggiungere il livello successivo
    const nextLevelThresholdXp = Math.pow(level, 2) * 50;
    
    // XP totali richiesti per completare questo specifico livello
    const xpRequiredForThisLevel = nextLevelThresholdXp - currentLevelStartXp;
    
    // XP guadagnati dall'inizio del livello attuale ad ora
    const xpProgressInLevel = xp - currentLevelStartXp;
    
    // Calcolo percentuale reale
    const progressPercent = Math.min(100, Math.max(0, (xpProgressInLevel / xpRequiredForThisLevel) * 100));

    return (
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-lg mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

            <div className="flex justify-between items-end mb-2 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl rotate-3 shadow-lg flex items-center justify-center border-2 border-orange-300">
                            <span className="text-white font-black text-xl -rotate-3">{level}</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-slate-900 rounded-full p-1 border border-slate-700">
                            <Trophy size={12} className="text-yellow-400" />
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-bold text-lg leading-none">Livello {level}</h3>
                        <p className="text-slate-400 text-xs mt-1 font-medium">Verso il livello {level + 1}</p>
                    </div>
                </div>

                <div className="text-right">
                    <span className="text-orange-400 font-bold text-sm">{xp} XP</span>
                    <span className="text-slate-500 text-xs"> / {nextLevelThresholdXp}</span>
                </div>
            </div>

            <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-700 relative">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)'}}></div>
                
                <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ease-out relative"
                    style={{ width: `${progressPercent}%` }}
                >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 blur-sm"></div>
                </div>
            </div>
            
            <div className="flex justify-between mt-1.5 px-1">
                <span className="text-[10px] text-slate-500 font-mono">{currentLevelStartXp} XP</span>
                <span className="text-[10px] text-slate-500 font-mono">{nextLevelThresholdXp} XP</span>
            </div>
        </div>
    );
}
</file>

<file path="src/components/shared/ClientHeader.jsx">
/**
 * TITOLO: Client Header Component
 * DESCRIZIONE: Banner informativo sul cliente selezionato o profilo personale.
 * RESPONSABILITÀ: Visualizzare nome, livello e stato del cliente in modo consistente.
 */

import React from "react";
import { UserCheck, Trophy } from "lucide-react";

export default function ClientHeader({ name, level, role = "client" }) {
  const isTrainerView = role === "trainer_view";

  return (
    <div
      className={`bg-slate-900/50 border ${
        isTrainerView ? "border-blue-500/30" : "border-orange-500/30"
      } p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-full hidden sm:flex ${
            isTrainerView
              ? "bg-blue-500/20 text-blue-400"
              : "bg-orange-500/20 text-orange-400"
          }`}
        >
          <UserCheck size={32} />
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">
            {isTrainerView ? "Cliente Selezionato" : "Il Mio Profilo"}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-none truncate max-w-[200px] sm:max-w-md">
            {name}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-slate-800 border-2 border-orange-500/20 px-4 py-3 rounded-xl shadow-lg">
        <div className="relative flex items-center">
          <div className="absolute inset-0 bg-orange-500 blur-lg opacity-30"></div>
          <Trophy size={26} className="text-orange-500 relative z-10" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold text-orange-500/70 uppercase tracking-widest">
            LVL
          </span>
          <span className="text-3xl font-black text-white font-mono leading-none">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}
</file>

<file path="src/components/shared/SetRow.jsx">
// ! frontend/src/components/shared/SetRow.jsx
/**
 * TITOLO: Set Row Component (Controlled & Aligned Edition)
 * DESCRIZIONE: Componente per la modifica delle singole righe nel builder.
 * FIX: Debouncing locale anti-latenza e textarea flessibile per le note.
 */

import React, { useState, useEffect } from "react";
import { Trash2, FileText, Timer } from "lucide-react";

const TYPE_CONFIG = {
  superset: { color: "emerald", label: "Super Set" },
  stripping: { color: "red", label: "Stripping" },
  rest_pause: { color: "blue", label: "Rest Pause" },
  normal: { color: "orange", label: "Normal" },
};

export default function SetRow({
  indexLabel,
  subLabel,
  type = "normal",
  reps,
  kg,
  rest,
  note,
  onFieldChange,
  onRemove,
  showRemove = true,
  isRestDisabled = false,
  isReadOnly = false,
}) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.normal;
  const color = config.color;

  // STATI LOCALI PER ANTI-LATENZA (Debouncing)
  const [localReps, setLocalReps] = useState(reps || "");
  const [localKg, setLocalKg] = useState(kg || "");
  const [localRest, setLocalRest] = useState(rest || "");
  const [localNote, setLocalNote] = useState(note || "");

  // Sincronizzazione stati locali se le props cambiano dall'esterno
  useEffect(() => setLocalReps(reps || ""), [reps]);
  useEffect(() => setLocalKg(kg || ""), [kg]);
  useEffect(() => setLocalRest(rest || ""), [rest]);
  useEffect(() => setLocalNote(note || ""), [note]);

  const handleBlur = (field, localValue, propValue) => {
    if (localValue !== (propValue || "")) {
      onFieldChange(field, localValue);
    }
  };

  return (
    <div
      className={`p-3 rounded-xl shadow-md border bg-slate-900 border-${color}-700/50 space-y-2 transition-all`}
    >
      {/* Header della riga */}
      <div className="flex items-center gap-3 border-b border-slate-700/50 pb-2">
        <span className="w-6 h-6 flex items-center justify-center rounded-full border bg-slate-800 text-slate-400 border-slate-600 text-xs font-bold">
          {indexLabel}
        </span>
        <span className="text-[10px] font-bold text-slate-300 uppercase flex-1">
          {subLabel}
        </span>
        <span
          className={`text-[10px] font-bold uppercase tracking-wide border px-1.5 rounded text-${color}-400 border-${color}-900 bg-${color}-900/20`}
        >
          {config.label}
        </span>
      </div>

      {/* Campi Input: Grid ottimizzata */}
      <div className="grid grid-cols-12 gap-2 items-end pt-1">
        {/* REPS */}
        <div className="col-span-4">
          <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase mb-1">
            Reps
          </span>
          <input
            type="text"
            disabled={isReadOnly}
            className={`w-full text-center p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none`}
            value={localReps}
            onChange={(e) => setLocalReps(e.target.value)}
            onBlur={() => handleBlur("reps", localReps, reps)}
            placeholder="10"
          />
        </div>

        {/* KG */}
        <div className="col-span-4">
          <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase mb-1">
            Kg
          </span>
          <input
            type="text"
            disabled={isReadOnly}
            className={`w-full text-center p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none`}
            value={localKg}
            onChange={(e) => setLocalKg(e.target.value)}
            onBlur={() => handleBlur("kg", localKg, kg)}
            placeholder="50"
          />
        </div>

        {/* RECUPERO */}
        <div className="col-span-4">
          <div className="flex items-center gap-1 mb-1">
            <Timer size={10} className="text-slate-500" />
            <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase">
              Rec
            </span>
          </div>
          <input
            type="text"
            disabled={isReadOnly || isRestDisabled}
            className={`w-full text-center p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none ${
              isRestDisabled ? "opacity-30" : ""
            }`}
            value={localRest}
            onChange={(e) => setLocalRest(e.target.value)}
            onBlur={() => handleBlur("rest", localRest, rest)}
            placeholder="90"
          />
        </div>
      </div>

      {/* Note Trainer - TRASFORMATO IN TEXTAREA FLESSIBILE */}
      <div className="pt-1">
        <span className="text-[8px] sm:text-[10px] text-slate-500 block uppercase mb-1">
          Note per Cliente
        </span>
        <div className="relative">
          <FileText
            size={14}
            className="absolute left-2.5 top-3 text-slate-500"
          />
          <textarea
            disabled={isReadOnly}
            className={`w-full pl-8 p-2 border border-slate-600 rounded-lg text-sm bg-slate-800 text-white focus:border-${color}-500 outline-none min-h-[42px] resize-y overflow-hidden leading-tight`}
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            onBlur={() => handleBlur("note", localNote, note)}
            placeholder="Esempio: Esplosivo nella fase concentrica... (Premi Invio per andare a capo)"
            rows={1}
          />
        </div>
      </div>

      {/* Pulsante Rimuovi */}
      {!isReadOnly && showRemove && (
        <div className="flex justify-end pt-1">
          <button
            onClick={onRemove}
            className="text-red-400 hover:text-red-300 p-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-red-500/50 transition-colors"
          >
            <Trash2 size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
</file>

<file path="src/components/shared/ValueBox.jsx">
/**
 * TITOLO: ValueBox Component
 * DESCRIZIONE: Visualizzatore atomico per dati di allenamento (Reps, Kg, Rec).
 * RESPONSABILITÀ: Rendering consistente di un valore con label e sub-label (Target).
 */

import React from "react";

export default function ValueBox({ value, label, subLabel, isRest }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <div
        className={`bg-slate-800 border border-slate-600 rounded-lg px-2 py-1.5 ${
          isRest ? "text-orange-400" : "text-white"
        } font-bold font-mono text-sm min-w-[50px] text-center shadow-sm`}
      >
        {value || "-"}
      </div>
      <div className="flex flex-col text-left justify-center">
        <span className="text-[10px] text-slate-500 font-bold uppercase leading-tight">
          {label}
        </span>
        {subLabel && (
          <span className="text-[9px] text-slate-600 leading-tight">
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/Payments/PaymentManager.jsx">
// ! frontend/src/components/TrainerDashboard/Payments/PaymentManager.jsx

import React, { useState, useEffect } from "react";
import {
  Plus,
  History,
  CheckCircle,
  AlertCircle,
  XCircle,
  Calendar,
  Wallet,
  WalletCards,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";

// IMPORT CLEAN CODE: Usiamo le funzioni API, non fetch dirette
import {
  fetchPayments,
  createPayment,
  deletePayment,
} from "../../../api/payments";
// (Opzionale) Se hai un file api/clients.js usalo, altrimenti qui sotto uso un fetch diretto rapido per i clienti
import { API_URL } from "../../../api/config";

export default function PaymentManager({ trainerId, onClose }) {
  // --- STATI ---
  const [clients, setClients] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI States
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [expandedClientId, setExpandedClientId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // STATO PER IL MESE VISUALIZZATO
  const [viewDate, setViewDate] = useState(new Date());

  // Form State
  const [newPayment, setNewPayment] = useState({
    client_id: "",
    amount: "",
    payment_date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  // --- INIT ---
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // 1. Carico i clienti (Uso API_URL diretto per semplicità)
      // Nota: Se avessi api/clients.js sarebbe: await fetchClients(trainerId);
      const resClients = await fetch(
        `${API_URL}/clients/?trainer_id=${trainerId}`
      );
      const dataClients = await resClients.json();

      // 2. Carico i pagamenti (Uso la funzione pulita)
      const dataPayments = await fetchPayments(trainerId);

      setClients(dataClients);
      setPayments(dataPayments);
      setLoading(false);
    } catch (error) {
      console.error("Errore fetch dati:", error);
      setLoading(false);
    }
  };

  // --- LOGICHE MATEMATICHE ---
  const changeMonth = (increment) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setViewDate(newDate);
  };

  const selectedMonth = viewDate.getMonth();
  const selectedYear = viewDate.getFullYear();

  const monthlyTotal = payments
    .filter((p) => {
      const d = new Date(p.payment_date);
      return d.getMonth() === selectedMonth && d.getFullYear() === selectedYear;
    })
    .reduce((sum, p) => sum + p.amount, 0);

  // --- LOGICA SEMAFORO ---
  const getClientStatus = (clientId) => {
    const clientPayments = payments
      .filter((p) => p.client_id === clientId)
      .sort((a, b) => new Date(b.payment_date) - new Date(a.payment_date));

    if (clientPayments.length === 0) return "red";

    const lastDate = new Date(clientPayments[0].payment_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    lastDate.setHours(0, 0, 0, 0);

    if (lastDate >= today) return "green";

    const diffTime = today - lastDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 30) return "green";
    if (diffDays <= 35) return "yellow";
    return "red";
  };

  const getLastPaymentDate = (clientId) => {
    const clientPayments = payments
      .filter((p) => p.client_id === clientId)
      .sort((a, b) => new Date(b.payment_date) - new Date(a.payment_date));
    return clientPayments.length > 0
      ? clientPayments[0].payment_date
      : "Nessun dato";
  };

  // --- AZIONI ---
  const handleOpenModal = (client) => {
    const lastP = payments.find((p) => p.client_id === client.id);
    setNewPayment({
      ...newPayment,
      client_id: client.id,
      amount: lastP ? lastP.amount : "",
      notes: "",
    });
    setIsModalOpen(true);
  };

  const handleSubmitPayment = async () => {
    if (!newPayment.amount || !newPayment.client_id) return;
    try {
      await createPayment(newPayment, trainerId); // Chiamata pulita
      await loadData(); // Ricarica i dati
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Errore salvataggio: " + error.message);
    }
  };

  const handleDeletePayment = async (paymentId) => {
    if (!window.confirm("Sei sicuro di voler eliminare questo pagamento?"))
      return;
    try {
      await deletePayment(paymentId); // Chiamata pulita
      await loadData(); // Ricarica i dati
    } catch (error) {
      console.error(error);
      alert("Errore eliminazione: " + error.message);
    }
  };

  if (loading)
    return (
      <div className="p-10 text-center text-slate-400">
        Caricamento contabilità...
      </div>
    );

  return (
    <div className="bg-slate-900 min-h-full p-4 md:p-8 animate-in fade-in duration-300">
      {/* HEADER + SALVADANAIO */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Wallet className="text-orange-500" /> Gestione Pagamenti
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Tieni traccia degli incassi e delle scadenze.
          </p>
        </div>

        {/* CARD SALVADANAIO */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl min-w-[340px] flex items-center justify-start gap-8 relative overflow-hidden group">
          <div className="flex flex-col gap-3 z-10 flex-1">
            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => changeMonth(-1)}
                className="hover:text-white hover:bg-slate-700 rounded-full p-1 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-bold uppercase tracking-widest min-w-[100px] text-center">
                {viewDate.toLocaleString("it-IT", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={() => changeMonth(1)}
                className="hover:text-white hover:bg-slate-700 rounded-full p-1 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div
              className={`text-4xl font-mono font-bold transition-all duration-300 pl-1 ${
                showPrivacy
                  ? "text-emerald-400"
                  : "text-slate-600 blur-md select-none"
              }`}
            >
              €{" "}
              {monthlyTotal.toLocaleString("it-IT", {
                minimumFractionDigits: 2,
              })}
            </div>
          </div>
          <button
            onClick={() => setShowPrivacy(!showPrivacy)}
            className="relative group cursor-pointer p-3 rounded-xl hover:bg-slate-800/50 transition-all z-10 active:scale-95 shrink-0"
          >
            {showPrivacy ? (
              <WalletCards size={42} className="text-emerald-400" />
            ) : (
              <Wallet
                size={42}
                className="text-slate-600 group-hover:text-slate-400"
              />
            )}
          </button>
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white"
        >
          <XCircle size={32} />
        </button>
      )}

      {/* TABELLA CLIENTI */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
        <div className="grid grid-cols-12 gap-4 p-4 bg-slate-900/50 border-b border-slate-700 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div className="col-span-5 md:col-span-4">Cliente</div>
          <div className="col-span-2 text-center hidden md:block">Stato</div>
          <div className="col-span-4 md:col-span-3 text-right md:text-left">
            Ultimo Pagamento
          </div>
          <div className="col-span-3 text-right">Azioni</div>
        </div>

        <div className="divide-y divide-slate-700">
          {clients.map((client) => {
            const status = getClientStatus(client.id);
            const lastDate = getLastPaymentDate(client.id);
            const isExpanded = expandedClientId === client.id;

            return (
              <div
                key={client.id}
                className="group transition-colors hover:bg-slate-700/30"
              >
                {/* Riga Principale */}
                <div className="grid grid-cols-12 gap-4 p-4 items-center">
                  <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full md:hidden shrink-0 ${
                        status === "green"
                          ? "bg-emerald-500"
                          : status === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="font-bold text-white truncate">
                      {client.name}
                    </span>
                  </div>
                  <div className="col-span-2 hidden md:flex justify-center">
                    {status === "green" && (
                      <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle size={12} /> OK
                      </span>
                    )}
                    {status === "yellow" && (
                      <span className="bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20 flex items-center gap-1">
                        <AlertCircle size={12} /> Scade
                      </span>
                    )}
                    {status === "red" && (
                      <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded text-xs font-bold border border-red-500/20 flex items-center gap-1">
                        <XCircle size={12} /> KO
                      </span>
                    )}
                  </div>
                  <div className="col-span-4 md:col-span-3 text-right md:text-left text-sm text-slate-300">
                    {lastDate !== "Nessun dato"
                      ? new Date(lastDate).toLocaleDateString()
                      : "-"}
                  </div>
                  <div className="col-span-3 flex justify-end gap-2">
                    <button
                      onClick={() =>
                        setExpandedClientId(isExpanded ? null : client.id)
                      }
                      className={`p-2 rounded-lg transition-all ${
                        isExpanded
                          ? "bg-slate-700 text-white"
                          : "text-slate-400 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      <History size={18} />
                    </button>
                    <button
                      onClick={() => handleOpenModal(client)}
                      className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg shadow-md active:scale-95"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* STORICO */}
                {isExpanded && (
                  <div className="bg-slate-900/50 p-4 border-t border-slate-700/50 shadow-inner animate-in slide-in-from-top-2 duration-200">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-3 ml-1 flex items-center gap-2">
                      <History size={12} /> Ultime Transazioni
                    </h4>
                    <div className="space-y-2">
                      {payments.filter((p) => p.client_id === client.id)
                        .length > 0 ? (
                        payments
                          .filter((p) => p.client_id === client.id)
                          .sort(
                            (a, b) =>
                              new Date(b.payment_date) -
                              new Date(a.payment_date)
                          )
                          .slice(0, 5)
                          .map((p) => (
                            <div
                              key={p.id}
                              className="flex justify-between items-center bg-slate-800 p-2 rounded border border-slate-700 text-sm group/row hover:border-slate-600 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <Calendar
                                  size={14}
                                  className="text-slate-500"
                                />
                                <span className="text-slate-300 font-mono">
                                  {new Date(
                                    p.payment_date
                                  ).toLocaleDateString()}
                                </span>
                                {p.notes && (
                                  <span className="text-xs text-slate-500 italic border-l border-slate-600 pl-2 ml-2 hidden sm:block">
                                    {p.notes}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="font-mono font-bold text-emerald-400">
                                  € {p.amount}
                                </span>
                                <button
                                  onClick={() => handleDeletePayment(p.id)}
                                  className="text-slate-400 hover:text-red-400 hover:bg-red-500/20 p-2 rounded-lg transition-colors"
                                  title="Elimina pagamento"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          ))
                      ) : (
                        <p className="text-sm text-slate-500 italic ml-1">
                          Nessun pagamento registrato.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Plus className="text-orange-500" /> Registra Pagamento
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Cliente:{" "}
              <span className="text-white font-bold">
                {clients.find((c) => c.id === newPayment.client_id)?.name}
              </span>
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Data
                </label>
                <input
                  type="date"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  value={newPayment.payment_date}
                  onChange={(e) =>
                    setNewPayment({
                      ...newPayment,
                      payment_date: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Importo (€)
                </label>
                <input
                  type="number"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 outline-none font-mono text-lg"
                  placeholder="50.00"
                  value={newPayment.amount}
                  onChange={(e) =>
                    setNewPayment({ ...newPayment, amount: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Note (Opzionale)
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Es. Bonifico, Contanti..."
                  value={newPayment.notes}
                  onChange={(e) =>
                    setNewPayment({ ...newPayment, notes: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 rounded-xl font-bold text-slate-400 hover:bg-slate-700 transition-colors"
              >
                Annulla
              </button>
              <button
                onClick={handleSubmitPayment}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold shadow-lg active:scale-95"
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/WorkoutBuilder/CircuitBuilder.jsx">
// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/CircuitBuilder.jsx
/**
 * TITOLO: Circuit Workout Builder (JSON Enterprise Edition)
 * DESCRIZIONE: Costruttore avanzato per circuiti con gestione automatica dei round.
 * LOGICA: Trasforma un singolo input in una sequenza JSON multi-set basata sui round.
 */

import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Plus, Save, ArrowLeft, Copy, Repeat, Clock, CheckCircle, Zap } from "lucide-react";

import { createWorkout, updateWorkout } from "../../../api/workouts";
import { useFolders } from "../../../hooks/useFolders";
import { mapCircuitExerciseToUI, mapUIToCircuitExercise } from "../../../utils/circuitMapper";

import WorkoutHeader from "./WorkoutHeader";
import CircuitExerciseItem from "./CircuitExerciseItem";

export default function CircuitBuilder({
  trainerId,
  clientId,
  onCancel,
  onSuccess,
  initialData,
}) {
  const { folders, loadFolders, addFolder, removeFolder } = useFolders(clientId);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // --- STATI DELLA SCHEDA ---
  const [title, setTitle] = useState("");
  const [cycleName, setCycleName] = useState("");
  const [durationWeeks, setDurationWeeks] = useState(4);
  const [isVisible, setIsVisible] = useState(1);
  const [rounds, setRounds] = useState(3);
  const [circuitRest, setCircuitRest] = useState("90");
  const [selectedExercises, setSelectedExercises] = useState([]);

  // 1. Caricamento iniziale cartelle
  useEffect(() => {
    if (clientId) {
      loadFolders().then((data) => {
        if (data?.length > 0 && !selectedFolder && !initialData)
          setSelectedFolder(data[0].id);
      });
    }
  }, [clientId, loadFolders, initialData]);

  // 2. Popolamento dati in caso di Modifica (Normalizzazione JSON)
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setCycleName(initialData.cycle_name || "");
      setDurationWeeks(initialData.duration_weeks || 4);
      setRounds(initialData.circuit_rounds || 3);
      setCircuitRest(initialData.circuit_rest || "90");
      setIsVisible(initialData.is_visible ?? 1);
      if (initialData.folder_id) setSelectedFolder(parseInt(initialData.folder_id));

      if (initialData.exercises) {
        // Usiamo il mapper per estrarre la configurazione base dal JSON multi-round
        setSelectedExercises(initialData.exercises.map(mapCircuitExerciseToUI));
      }
    }
  }, [initialData]);

  // --- GESTIONE ESERCIZI (CRUD) ---

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setSelectedExercises((items) => {
      const oldIndex = items.findIndex((ex) => ex.tempId === active.id);
      const newIndex = items.findIndex((ex) => ex.tempId === over.id);
      const newList = [...items];
      const [removed] = newList.splice(oldIndex, 1);
      newList.splice(newIndex, 0, removed);
      return newList;
    });
  };

  const addExercise = () => {
    setSelectedExercises((prev) => [
      ...prev,
      {
        tempId: `${Date.now()}-${Math.random()}`, // ID univoco per DnD
        name: "",
        mode: "reps",
        reps: "10",
        workTime: "40",
        kg: "",
        rest: "20",
        notes: "",
      },
    ]);
  };

  const removeExercise = (tempId) => {
    setSelectedExercises((prev) => prev.filter((e) => e.tempId !== tempId));
  };

  const updateExercise = (tempId, field, value) => {
    setSelectedExercises((prev) =>
      prev.map((e) => (e.tempId === tempId ? { ...e, [field]: value } : e))
    );
  };

  // --- PERSISTENZA ---
  const handleSave = async (isCopy = false) => {
    if (!title || !selectedFolder || selectedExercises.length === 0)
      return alert("Dati incompleti: controlla titolo, cartella ed esercizi.");

    // TRASFORMAZIONE: Il mapper espande l'input singolo in un array JSON di 'N' round
    const formattedExercises = selectedExercises.map((ex, idx) =>
      mapUIToCircuitExercise(ex, parseInt(rounds), idx)
    );

    const payload = {
      trainer_id: trainerId,
      client_id: clientId,
      folder_id: selectedFolder,
      title,
      cycle_name: cycleName,
      duration_weeks: parseInt(durationWeeks),
      is_visible: isVisible,
      workout_type: "circuit",
      circuit_rounds: parseInt(rounds),
      circuit_rest: String(circuitRest),
      exercises: formattedExercises,
    };

    try {
      if (initialData && !isCopy) await updateWorkout(initialData.id, payload);
      else await createWorkout(payload);
      alert("Circuito salvato con successo!");
      onSuccess();
    } catch (err) {
      console.error("Errore salvataggio circuito:", err);
      alert("Errore tecnico durante il salvataggio.");
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl border-2 border-slate-700 shadow-xl animate-in fade-in duration-300">
      {/* Header Builder */}
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <div className="flex items-center gap-4">
          <button onClick={onCancel} className="p-2 hover:bg-slate-700 rounded-full text-slate-400">
            <ArrowLeft size={24} />
          </button>
          <div>
            <div className="flex items-center gap-2 text-white">
              <Zap size={20} className="text-orange-500" />
              <h2 className="text-xl font-black uppercase tracking-tight">Builder Circuito</h2>
            </div>
            <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Protocollo JSON Active</p>
          </div>
        </div>
        <button onClick={onCancel} className="font-black text-xs text-red-500 uppercase tracking-widest">ANNULLA</button>
      </div>

      <WorkoutHeader
        folders={folders} selectedFolder={selectedFolder} onSelectFolder={setSelectedFolder}
        onAddFolder={addFolder} onDeleteFolder={removeFolder}
        title={title} setTitle={setTitle} cycleName={cycleName} setCycleName={setCycleName}
        durationWeeks={durationWeeks} setDurationWeeks={setDurationWeeks}
        isVisible={isVisible} setIsVisible={setIsVisible} isEditMode={!!initialData}
      />

      {/* Parametri Specifici Circuito */}
      <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/50 p-5 rounded-2xl border border-orange-500/20 shadow-inner">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-orange-500 uppercase flex items-center gap-2">
            <Repeat size={14} /> Giri Totali (Rounds)
          </label>
          <input
            type="number"
            className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl p-3 text-white font-bold outline-none focus:border-orange-500"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-orange-500 uppercase flex items-center gap-2">
            <Clock size={14} /> Recupero Fine Giro (Sec)
          </label>
          <input
            type="text"
            className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl p-3 text-white font-bold outline-none focus:border-orange-500"
            value={circuitRest}
            onChange={(e) => setCircuitRest(e.target.value)}
          />
        </div>
      </div>

      {/* Area Esercizi DnD */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={selectedExercises.map((ex) => ex.tempId)} strategy={verticalListSortingStrategy}>
          <div className="space-y-4 mb-6">
            {selectedExercises.map((ex, index) => (
              <CircuitExerciseItem
                key={ex.tempId} ex={ex} index={index}
                onRemove={removeExercise} updateExercise={updateExercise}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        onClick={addExercise}
        className="w-full py-5 border-2 border-dashed border-slate-600 text-slate-500 rounded-2xl font-black text-xs uppercase hover:border-orange-500 hover:text-orange-500 transition-all flex justify-center gap-2 items-center"
      >
        <Plus size={18} /> Aggiungi Esercizio al Circuito
      </button>

      {/* Azioni di Salvataggio */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700 mt-8">
        {initialData && (
          <button
            onClick={() => handleSave(true)}
            className="flex-1 bg-slate-700 text-white py-4 rounded-xl font-black text-xs uppercase flex justify-center items-center gap-2 transition-all hover:bg-slate-600"
          >
            <Copy size={18} /> Salva come nuova
          </button>
        )}
        <button
          onClick={() => handleSave(false)}
          className="flex-1 bg-gradient-to-r from-orange-600 to-orange-800 text-white py-4 rounded-xl font-black text-sm uppercase shadow-xl hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
        >
          <CheckCircle size={20} />
          {initialData ? "Aggiorna Circuito" : "Crea Circuito"}
        </button>
      </div>
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/WorkoutBuilder/CircuitExerciseItem.jsx">
/**
 * TITOLO: Circuit Exercise Item
 * DESCRIZIONE: Componente riga per un esercizio all'interno di un circuito.
 * RESPONSABILITÀ: Rendering dell'esercizio, switch tra modalità Reps/Timer e gestione input.
 */

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  GripVertical,
  Trash2,
  Dumbbell,
  Timer as TimerIcon,
  AlignLeft, // Aggiunta icona per le note
} from "lucide-react";

export default function CircuitExerciseItem({
  ex,
  index,
  onRemove,
  updateExercise,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ex.tempId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : "auto",
  };

  const isTimer = ex.mode === "timer";

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col gap-3 relative group transition-all hover:border-slate-600"
    >
      {/* Handle per il drag & drop */}
      <div
        {...listeners}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 p-2 cursor-grab text-slate-400 hover:text-white transition-colors z-10"
      >
        <GripVertical size={24} />
      </div>

      {/* Header: Indice, Nome Esercizio, Tasto Elimina */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3 w-full">
          <span className="bg-slate-800 text-slate-400 w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold border border-slate-700">
            {index + 1}
          </span>
          <input
            type="text"
            placeholder="Nome Esercizio"
            className="bg-transparent text-white font-bold text-lg border-b border-transparent hover:border-slate-600 focus:border-orange-500 outline-none w-full placeholder-slate-600 transition-colors py-1"
            value={ex.name}
            onChange={(e) => updateExercise(ex.tempId, "name", e.target.value)}
          />
        </div>
        <button
          onClick={() => onRemove(ex.tempId)}
          className="text-slate-500 hover:text-red-500 transition-colors p-2 hover:bg-slate-800 rounded-lg"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Switch Modalità: Ripetizioni vs Timer */}
      <div className="flex justify-start gap-4 mb-3 border-b border-slate-700 pb-2">
        <button
          onClick={() => updateExercise(ex.tempId, "mode", "reps")}
          className={`text-xs font-bold px-3 py-1 rounded-full transition-all flex items-center gap-2 ${
            !isTimer
              ? "bg-orange-600 text-white"
              : "bg-slate-700 text-slate-400 hover:bg-slate-600"
          }`}
        >
          <Dumbbell size={14} /> Ripetizioni
        </button>
        <button
          onClick={() => updateExercise(ex.tempId, "mode", "timer")}
          className={`text-xs font-bold px-3 py-1 rounded-full transition-all flex items-center gap-2 ${
            isTimer
              ? "bg-emerald-600 text-white"
              : "bg-slate-700 text-slate-400 hover:bg-slate-600"
          }`}
        >
          <TimerIcon size={14} /> A Tempo
        </button>
      </div>

      {/* Griglia Input Numerici (Allargata ora che le note sono sotto) */}
      <div className="grid grid-cols-12 gap-3 items-end mb-2">
        {!isTimer ? (
          <>
            <div className="col-span-4">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Reps
              </label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-2.5 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm text-center"
                value={ex.reps}
                onChange={(e) =>
                  updateExercise(ex.tempId, "reps", e.target.value)
                }
              />
            </div>
            <div className="col-span-4">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Kg
              </label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-2.5 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm text-center"
                value={ex.kg}
                onChange={(e) =>
                  updateExercise(ex.tempId, "kg", e.target.value)
                }
              />
            </div>
            <div className="col-span-4">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Rec. Intra
              </label>
              <input
                type="text"
                className="w-full bg-slate-800 text-white p-2.5 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm text-center"
                value={ex.rest}
                onChange={(e) =>
                  updateExercise(ex.tempId, "rest", e.target.value)
                }
              />
            </div>
          </>
        ) : (
          <>
            <div className="col-span-6">
              <label className="text-[10px] text-emerald-400 uppercase font-bold mb-1 block">
                Tempo Lavoro (sec)
              </label>
              <input
                type="number"
                className="w-full bg-slate-900 text-white p-2.5 rounded-lg border border-emerald-600 focus:border-emerald-500 outline-none text-sm text-center"
                value={ex.workTime}
                onChange={(e) =>
                  updateExercise(ex.tempId, "workTime", e.target.value)
                }
              />
            </div>
            <div className="col-span-6">
              <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 block">
                Tempo Riposo (sec)
              </label>
              <input
                type="number"
                className="w-full bg-slate-900 text-white p-2.5 rounded-lg border border-slate-600 focus:border-emerald-500 outline-none text-sm text-center"
                value={ex.restTime}
                onChange={(e) =>
                  updateExercise(ex.tempId, "restTime", e.target.value)
                }
              />
            </div>
          </>
        )}
      </div>

      {/* Sezione Note: Spostata in basso e trasformata in Textarea */}
      <div className="w-full mt-2">
        <label className="text-[10px] text-slate-500 uppercase font-bold mb-1 flex items-center gap-1">
          <AlignLeft size={10} /> Note Tecniche / Istruzioni
        </label>
        <textarea
          className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-600 focus:border-orange-500 outline-none text-sm min-h-[80px] resize-y placeholder-slate-500 leading-relaxed"
          placeholder="Scrivi qui le istruzioni dettagliate per l'esecuzione..."
          value={ex.notes}
          onChange={(e) => updateExercise(ex.tempId, "notes", e.target.value)}
        />
      </div>
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/WorkoutBuilder/ExerciseItem.jsx">
// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/ExerciseItem.jsx
/**
 * TITOLO: Exercise Item Component (JSON Enterprise Edition)
 * DESCRIZIONE: Gestisce la visualizzazione di un esercizio e dei suoi set nel builder.
 * LOGICA: Debouncing locale, textarea flessibile, riordinamento manuale (Mobile), Espandi/Comprimi e Link YouTube.
 */

import React, { useState, useEffect } from "react";
import {
  Plus,
  X,
  Info,
  ChevronDown,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Youtube,
} from "lucide-react";
import SetRow from "../../shared/SetRow";
import { splitSubString, joinSubArray } from "../../../utils/exerciseParser";

export default function ExerciseItem({
  ex,
  exIdx,
  totalExercises,
  onMoveUp,
  onMoveDown,
  onUpdateName,
  onRemove,
  onAddSet,
  onRemoveSet,
  onUpdateSet,
}) {
  const [showSetMenu, setShowSetMenu] = useState(false);

  // STATO PER ESPANDI/COMPRIMI
  const [isExpanded, setIsExpanded] = useState(true);

  const isSuperSet = ex.exercise_type === "superset";

  // STATI LOCALI PER ANTI-LATENZA (Debouncing)
  const [localName, setLocalName] = useState(ex.name || "");
  const [localSecondName, setLocalSecondName] = useState(ex.second_name || "");
  const [localNotes, setLocalNotes] = useState(ex.notes || "");
  const [localYoutubeLink, setLocalYoutubeLink] = useState(
    ex.youtube_link || "",
  );

  // Sincronizzazione stati locali se il prop cambia dall'esterno
  useEffect(() => setLocalName(ex.name || ""), [ex.name]);
  useEffect(() => setLocalSecondName(ex.second_name || ""), [ex.second_name]);
  useEffect(() => setLocalNotes(ex.notes || ""), [ex.notes]);
  useEffect(
    () => setLocalYoutubeLink(ex.youtube_link || ""),
    [ex.youtube_link],
  );

  /**
   * Determina se un campo deve essere trattato con la "Split Logic" (es. "10+8")
   */
  const checkIsSplit = (type, field) => {
    if (isSuperSet || type === "stripping" || type === "rest_pause") {
      return field === "reps" || field === "kg" || field === "rest";
    }
    return false;
  };

  /**
   * Gestisce l'aggiornamento dei dati gestendo sia valori singoli che splittati (+)
   */
  const handleFieldChange = (setIdx, field, subIndex, newValue, isSplit) => {
    if (!isSplit) {
      onUpdateSet(exIdx, setIdx, field, newValue);
      return;
    }

    const parts = splitSubString(ex.sets[setIdx][field] || "");
    while (parts.length < 2) parts.push("");

    parts[subIndex] = newValue;
    const finalString = joinSubArray(parts);

    onUpdateSet(exIdx, setIdx, field, finalString);
  };

  return (
    <div
      className={`relative border rounded-xl p-3 sm:p-4 shadow-lg transition-all duration-300 ${
        isSuperSet
          ? "bg-slate-800 border-emerald-500/50"
          : "bg-slate-800 border-slate-700 hover:border-orange-500"
      }`}
    >
      {/* HEADER: Nomi Esercizio e Azioni */}
      <div
        className={`flex flex-col gap-3 ${isExpanded ? "border-b border-slate-700 pb-3 mb-4" : ""}`}
      >
        <div className="flex justify-between items-start gap-2">
          {/* LATO SINISTRO: Numero e Nome */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span
              className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-bold shadow-md flex-shrink-0 mt-1 ${
                isSuperSet
                  ? "bg-emerald-600 text-white"
                  : "bg-orange-600 text-white"
              }`}
            >
              {exIdx + 1}
            </span>
            <div className="flex-1 flex flex-col gap-2 pr-2">
              <input
                type="text"
                placeholder={isSuperSet ? "Nome Esercizio A" : "Nome Esercizio"}
                className="font-bold text-base sm:text-lg text-white bg-transparent border-b border-transparent hover:border-slate-600 focus:border-orange-500 outline-none px-1 w-full truncate"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                onBlur={() => {
                  if (localName !== ex.name)
                    onUpdateName(exIdx, "name", localName);
                }}
              />
              {isSuperSet && (
                <input
                  type="text"
                  placeholder="Nome Esercizio B"
                  className="font-bold text-base sm:text-lg text-emerald-400 bg-transparent border-b border-transparent hover:border-slate-600 focus:border-emerald-500 outline-none px-1 w-full truncate"
                  value={localSecondName}
                  onChange={(e) => setLocalSecondName(e.target.value)}
                  onBlur={() => {
                    if (localSecondName !== ex.second_name) {
                      onUpdateName(exIdx, "second_name", localSecondName);
                    }
                  }}
                />
              )}
            </div>
          </div>

          {/* LATO DESTRO: Pulsanti Azione (Riordino, Toggle, Elimina) */}
          <div className="flex flex-col gap-2 shrink-0 items-end">
            <div className="flex items-center gap-1">
              {/* Pulsante Apri/Chiudi */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                title={isExpanded ? "Comprimi Esercizio" : "Espandi Esercizio"}
              >
                {isExpanded ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>
              {/* Pulsante Rimuovi */}
              <button
                onClick={() => onRemove(exIdx)}
                className="p-2 bg-red-900/20 hover:bg-red-900/40 text-red-400 hover:text-red-300 rounded-lg transition-colors"
                title="Rimuovi Esercizio"
              >
                <X size={18} />
              </button>
            </div>

            {/* Controlli di Riordino Mobile (Su/Giù) */}
            <div className="flex items-center gap-1 bg-slate-900/80 rounded-lg p-1 border border-slate-700">
              <button
                onClick={onMoveUp}
                disabled={exIdx === 0}
                className="p-1.5 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white hover:bg-slate-700 rounded transition-all"
                title="Sposta Su"
              >
                <ArrowUp size={14} />
              </button>
              <button
                onClick={onMoveDown}
                disabled={exIdx === totalExercises - 1}
                className="p-1.5 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white hover:bg-slate-700 rounded transition-all"
                title="Sposta Giù"
              >
                <ArrowDown size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BODY (Visibile solo se isExpanded è true) */}
      {isExpanded && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          {/* INPUT YOUTUBE LINK */}
          <div className="flex gap-2 items-center mb-3 bg-slate-900/30 p-2 rounded-xl border border-slate-700/50">
            <Youtube size={16} className="text-red-500 shrink-0 ml-1" />
            <input
              type="text"
              placeholder="Incolla qui il link al video YouTube..."
              className="w-full bg-transparent text-slate-300 text-xs p-1 outline-none"
              value={localYoutubeLink}
              onChange={(e) => setLocalYoutubeLink(e.target.value)}
              onBlur={() => {
                if (localYoutubeLink !== ex.youtube_link)
                  onUpdateName(exIdx, "youtube_link", localYoutubeLink);
              }}
            />
          </div>

          {/* TEXTAREA NOTE GLOBALI ESERCIZIO */}
          <div className="flex gap-2 items-start mb-5 bg-slate-900/30 p-2 rounded-xl border border-slate-700/50">
            <Info size={16} className="text-blue-400 mt-2 shrink-0 ml-1" />
            <textarea
              placeholder="Istruzioni globali per questo esercizio (vai a capo con Invio)..."
              className="w-full bg-transparent text-blue-200 text-xs p-1 outline-none min-h-[40px] resize-y leading-relaxed"
              value={localNotes}
              onChange={(e) => setLocalNotes(e.target.value)}
              onBlur={() => {
                if (localNotes !== ex.notes)
                  onUpdateName(exIdx, "notes", localNotes);
              }}
            />
          </div>

          {/* LISTA SERIE (SETS) */}
          <div className="space-y-4">
            {ex.sets.map((set, setIdx) => {
              const type = isSuperSet ? "superset" : set.type;
              const isMultiRow =
                type === "stripping" || type === "rest_pause" || isSuperSet;
              const rowCount = isMultiRow ? 2 : 1;

              return Array.from({ length: rowCount }).map((_, subIndex) => {
                const isSecondRow = subIndex === 1;

                // Etichette dinamiche per chiarezza del trainer
                let subLabel = `Serie ${setIdx + 1}`;
                if (isSuperSet)
                  subLabel =
                    subIndex === 0
                      ? localName || ex.name
                      : localSecondName || ex.second_name;
                else if (isMultiRow) subLabel = `Giro ${subIndex + 1}`;

                return (
                  <SetRow
                    key={`${setIdx}-${subIndex}`}
                    indexLabel={setIdx + 1}
                    subLabel={subLabel}
                    type={type}
                    reps={
                      isMultiRow
                        ? splitSubString(set.reps || "")[subIndex] || ""
                        : set.reps || ""
                    }
                    kg={
                      checkIsSplit(type, "kg")
                        ? splitSubString(set.kg || "")[subIndex] || ""
                        : set.kg || ""
                    }
                    rest={
                      checkIsSplit(type, "rest")
                        ? splitSubString(set.rest || "")[subIndex] || ""
                        : set.rest || ""
                    }
                    note={set.note || ""}
                    isRestDisabled={false}
                    showRemove={!isSecondRow && ex.sets.length > 1}
                    onRemove={() => onRemoveSet(exIdx, setIdx)}
                    onFieldChange={(field, val) =>
                      handleFieldChange(
                        setIdx,
                        field,
                        subIndex,
                        val,
                        checkIsSplit(type, field),
                      )
                    }
                  />
                );
              });
            })}
          </div>

          {/* FOOTER: Selezione Tecnica Set */}
          <div className="mt-5 flex justify-center relative">
            {isSuperSet ? (
              <button
                onClick={() => onAddSet(exIdx)}
                className="text-xs text-emerald-500 font-bold bg-slate-900 px-4 py-2 rounded-full border border-slate-700 hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-1 shadow-sm"
              >
                <Plus size={14} /> Aggiungi Serie Doppia
              </button>
            ) : !showSetMenu ? (
              <button
                onClick={() => setShowSetMenu(true)}
                className="text-xs text-orange-500 font-bold bg-slate-900 px-4 py-2 rounded-full border border-slate-700 hover:bg-orange-600 hover:text-white transition-all flex items-center gap-1 shadow-sm"
              >
                <Plus size={14} /> Aggiungi Serie
              </button>
            ) : (
              <div className="flex gap-2 animate-in zoom-in duration-200 bg-slate-900 p-1 rounded-full border border-slate-700 shadow-xl">
                {["normal", "stripping", "rest_pause"].map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      onAddSet(exIdx, t);
                      setShowSetMenu(false);
                    }}
                    className="text-[10px] bg-slate-700 text-white px-3 py-1.5 rounded-full hover:bg-slate-600 transition-colors uppercase font-bold"
                  >
                    {t.replace("_", " ")}
                  </button>
                ))}
                <button
                  onClick={() => setShowSetMenu(false)}
                  className="text-slate-500 hover:text-white px-2"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/WorkoutBuilder/StandardBuilder.jsx">
// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/StandardBuilder.jsx
/**
 * TITOLO: Standard Workout Builder (JSON Enterprise Edition)
 * DESCRIZIONE: Orchestratore per la creazione di schede con supporto nativo JSON.
 * LOGICA: Gestione atomica dei set e ordinamento manuale per supporto Mobile.
 */

import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Plus,
  Save,
  Dumbbell,
  Link,
  ArrowLeft,
  Copy,
  GripVertical,
} from "lucide-react";

// API & Hooks
import { createWorkout, updateWorkout } from "../../../api/workouts";
import { useFolders } from "../../../hooks/useFolders";

// Utilities (Source of Truth per la trasformazione dati)
import {
  mapExerciseToUI,
  mapUIToExercise,
} from "../../../utils/exerciseMapper";

// Sottocomponenti
import WorkoutHeader from "./WorkoutHeader";
import ExerciseItem from "./ExerciseItem";

/**
 * SortableItem: Wrapper per la logica di Drag & Drop
 */
const SortableItem = ({
  ex,
  exIdx,
  totalExercises,
  onMoveUp,
  onMoveDown,
  onUpdateName,
  onRemove,
  onAddSet,
  onRemoveSet,
  onUpdateSet,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ex.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="relative">
      <div
        {...listeners}
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 p-2 cursor-grab text-slate-400 hover:text-white transition-colors z-10 hidden sm:block"
      >
        <GripVertical size={24} />
      </div>
      <ExerciseItem
        ex={ex}
        exIdx={exIdx}
        totalExercises={totalExercises}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        onUpdateName={onUpdateName}
        onRemove={onRemove}
        onAddSet={onAddSet}
        onRemoveSet={onRemoveSet}
        onUpdateSet={onUpdateSet}
      />
    </div>
  );
};

export default function StandardBuilder({
  trainerId,
  clientId,
  workoutToEdit,
  onCancel,
  onSuccess,
}) {
  const { folders, loadFolders, addFolder, removeFolder } =
    useFolders(clientId);
  const [selectedFolder, setSelectedFolder] = useState(null);

  // --- STATI DELLA SCHEDA ---
  const [title, setTitle] = useState("");
  const [cycleName, setCycleName] = useState("");
  const [durationWeeks, setDurationWeeks] = useState(4);
  const [isVisible, setIsVisible] = useState(1);
  const [exercises, setExercises] = useState([]);
  const [showAddMenu, setShowAddMenu] = useState(false);

  // 1. Inizializzazione Cartelle
  useEffect(() => {
    if (clientId) {
      loadFolders().then((data) => {
        if (!workoutToEdit && data?.length > 0) setSelectedFolder(data[0].id);
      });
    }
  }, [clientId, loadFolders, workoutToEdit]);

  // 2. Popolamento in caso di Edit (Normalizzazione Dati)
  useEffect(() => {
    if (workoutToEdit) {
      setTitle(workoutToEdit.title);
      setCycleName(workoutToEdit.cycle_name || "");
      setDurationWeeks(workoutToEdit.duration_weeks || 4);
      setIsVisible(workoutToEdit.is_visible ?? 1);
      if (workoutToEdit.folder_id)
        setSelectedFolder(parseInt(workoutToEdit.folder_id));

      // TRASFORMAZIONE: Usiamo il mapper per assicurarci che ogni esercizio abbia l'array 'sets' di oggetti
      const parsed = workoutToEdit.exercises.map((ex) => mapExerciseToUI(ex));
      setExercises(parsed);
    }
  }, [workoutToEdit]);

  // --- LOGICA AZIONI ESERCIZI ---

  // Drag & Drop Nativo (per Desktop)
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setExercises((items) => {
      const oldIndex = items.findIndex((ex) => ex.id === active.id);
      const newIndex = items.findIndex((ex) => ex.id === over.id);
      const newList = [...items];
      const [removed] = newList.splice(oldIndex, 1);
      newList.splice(newIndex, 0, removed);
      return newList;
    });
  };

  // Spostamento Manuale (per Mobile)
  const moveExercise = (index, direction) => {
    setExercises((items) => {
      const newList = [...items];
      if (direction === "up" && index > 0) {
        [newList[index - 1], newList[index]] = [
          newList[index],
          newList[index - 1],
        ];
      } else if (direction === "down" && index < newList.length - 1) {
        [newList[index + 1], newList[index]] = [
          newList[index],
          newList[index + 1],
        ];
      }
      return newList;
    });
  };

  const addExercise = (type = "normal") => {
    setExercises([
      ...exercises,
      {
        id: Date.now() + Math.random(),
        name: "",
        second_name: "",
        exercise_type: type === "superset" ? "superset" : "normal",
        // Inizializziamo subito con il formato oggetti JSON
        sets: [
          {
            reps: "",
            kg: "",
            rest: "",
            note: "",
            type: type === "superset" ? "normal" : type,
          },
        ],
      },
    ]);
    setShowAddMenu(false);
  };

  // AGGIORNATA: Gestione dello stato più precisa per gli input dei set
  const updateSet = (exIdx, sIdx, field, value) => {
    setExercises((prev) => {
      const newEx = [...prev];
      newEx[exIdx].sets[sIdx] = { ...newEx[exIdx].sets[sIdx], [field]: value };
      return newEx;
    });
  };

  // --- PERSISTENZA ---
  const handleSave = async (saveAsNew = false) => {
    if (!title || !selectedFolder || exercises.length === 0)
      return alert(
        "Compila tutti i campi obbligatori (Titolo, Cartella, Esercizi)",
      );

    // TRASFORMAZIONE: Convertiamo lo stato locale nel formato 'config' per il Backend
    const formattedExercises = exercises.map((ex, i) => mapUIToExercise(ex, i));

    const workoutData = {
      trainer_id: trainerId,
      client_id: clientId,
      folder_id: selectedFolder,
      title,
      cycle_name: cycleName,
      duration_weeks: parseInt(durationWeeks),
      is_visible: isVisible,
      workout_type: "standard",
      exercises: formattedExercises,
    };

    try {
      if (workoutToEdit && !saveAsNew) {
        await updateWorkout(workoutToEdit.id, workoutData);
      } else {
        await createWorkout(workoutData);
      }
      alert("Scheda salvata con successo!");
      onSuccess();
    } catch (error) {
      console.error("Errore salvataggio:", error);
      alert("Errore durante il salvataggio della scheda.");
    }
  };

  return (
    <div
      className={`space-y-6 p-6 bg-slate-800 rounded-2xl border-2 transition-all ${
        workoutToEdit
          ? "border-orange-500 shadow-2xl shadow-orange-900/10"
          : "border-slate-700"
      }`}
    >
      {/* 1. Header di Navigazione */}
      <div className="flex items-center justify-between border-b border-slate-700 pb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-slate-700 rounded-full text-slate-400"
          >
            <ArrowLeft size={24} />
          </button>
          <div
            className={`p-2 rounded-lg ${
              workoutToEdit ? "bg-orange-600" : "bg-slate-700"
            }`}
          >
            <Dumbbell size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-white tracking-tight leading-none">
              {workoutToEdit ? "Modifica Scheda" : "Nuova Scheda"}
            </h3>
            <p className="text-[10px] text-slate-500 font-black uppercase mt-1 tracking-widest">
              Protocollo JSON Active
            </p>
          </div>
        </div>
        <button
          onClick={onCancel}
          className="font-black text-xs text-red-500 tracking-widest"
        >
          ANNULLA
        </button>
      </div>

      {/* 2. Meta-Dati */}
      <WorkoutHeader
        folders={folders}
        selectedFolder={selectedFolder}
        onSelectFolder={setSelectedFolder}
        onAddFolder={addFolder}
        onDeleteFolder={removeFolder}
        title={title}
        setTitle={setTitle}
        cycleName={cycleName}
        setCycleName={setCycleName}
        durationWeeks={durationWeeks}
        setDurationWeeks={setDurationWeeks}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        isEditMode={!!workoutToEdit}
      />

      {/* 3. Area Esercizi (DnD) */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={exercises.map((ex) => ex.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-6">
            {exercises.map((ex, exIdx) => (
              <SortableItem
                key={ex.id}
                ex={ex}
                exIdx={exIdx}
                totalExercises={exercises.length}
                onMoveUp={() => moveExercise(exIdx, "up")}
                onMoveDown={() => moveExercise(exIdx, "down")}
                onUpdateName={(idx, f, v) => {
                  const n = [...exercises];
                  n[idx][f] = v;
                  setExercises(n);
                }}
                onRemove={(idx) =>
                  setExercises(exercises.filter((_, i) => i !== idx))
                }
                onAddSet={(idx, type) => {
                  const n = [...exercises];
                  const last = n[idx].sets[n[idx].sets.length - 1];
                  n[idx].sets.push({
                    reps: last?.reps || "",
                    kg: last?.kg || "",
                    rest: last?.rest || "",
                    note: "",
                    type: type || "normal",
                  });
                  setExercises(n);
                }}
                onRemoveSet={(exI, sI) => {
                  const n = [...exercises];
                  if (n[exI].sets.length > 1) {
                    n[exI].sets = n[exI].sets.filter((_, i) => i !== sI);
                    setExercises(n);
                  }
                }}
                onUpdateSet={updateSet}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {/* 4. Footer */}
      <div className="pt-6 border-t border-slate-700 space-y-4">
        {!showAddMenu ? (
          <button
            onClick={() => setShowAddMenu(true)}
            className="w-full py-5 border-2 border-dashed border-slate-600 text-slate-500 rounded-xl font-black uppercase text-xs hover:border-orange-500 hover:text-orange-500 transition-all flex justify-center gap-3 items-center"
          >
            <Plus size={20} /> Aggiungi Esercizio alla scheda
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
            <button
              onClick={() => addExercise("normal")}
              className="py-4 bg-slate-900 text-white rounded-xl border-2 border-slate-700 hover:border-orange-500 flex items-center justify-center gap-3 font-bold"
            >
              <Dumbbell size={18} className="text-orange-500" /> NORMALE
            </button>
            <button
              onClick={() => addExercise("superset")}
              className="py-4 bg-slate-900 text-white rounded-xl border-2 border-slate-700 hover:border-emerald-500 flex items-center justify-center gap-3 font-bold"
            >
              <Link size={18} className="text-emerald-500" /> SUPER SERIE
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {workoutToEdit && (
            <button
              onClick={() => handleSave(true)}
              className="flex-1 bg-slate-700 text-white py-4 rounded-xl font-black uppercase text-xs transition-all flex justify-center items-center gap-2"
            >
              <Copy size={20} /> Salva come nuova
            </button>
          )}
          <button
            onClick={() => handleSave(false)}
            className="flex-1 bg-gradient-to-r from-orange-600 to-orange-800 text-white py-4 rounded-xl font-black uppercase text-sm shadow-xl shadow-orange-900/20 hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
          >
            <Save size={20} />{" "}
            {workoutToEdit ? "Aggiorna Allenamento" : "Crea Allenamento"}
          </button>
        </div>
      </div>
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/WorkoutBuilder/WorkoutCreator.jsx">
/**
 * TITOLO: Workout Creator Router
 * DESCRIZIONE: Componente di alto livello che funge da selettore per il tipo di scheda da creare.
 * RESPONSABILITÀ: Gestione della modalità (Standard vs Circuito) e routing interno.
 */

import React, { useState } from "react";
import { Dumbbell, Zap } from "lucide-react";
import StandardBuilder from "./StandardBuilder";
import CircuitBuilder from "./CircuitBuilder";

export default function WorkoutCreators({
  trainerId,
  clientId,
  workoutToEdit,
  onClearEdit,
}) {
  // Determina la modalità iniziale: se modifichiamo, saltiamo la scelta.
  const initialMode = workoutToEdit ? workoutToEdit.workout_type : null;
  const [mode, setMode] = useState(initialMode);

  /**
   * Reset dello stato per tornare al menu di scelta o chiudere il builder.
   */
  const handleReset = () => {
    setMode(null);
    onClearEdit();
  };

  // --- RENDERIZZA IL BUILDER SPECIFICO ---
  if (mode === "standard") {
    return (
      <StandardBuilder
        trainerId={trainerId}
        clientId={clientId}
        workoutToEdit={workoutToEdit}
        onCancel={handleReset}
        onSuccess={handleReset}
      />
    );
  }

  if (mode === "circuit") {
    return (
      <CircuitBuilder
        trainerId={trainerId}
        clientId={clientId}
        initialData={workoutToEdit}
        onCancel={handleReset}
        onSuccess={handleReset}
      />
    );
  }

  // --- MENU DI SCELTA INIZIALE ---
  return (
    <div className="animate-in zoom-in-95 duration-200">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Che tipo di allenamento vuoi creare?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ChoiceCard
          title="Scheda Normale"
          description="La classica scheda di sala pesi con serie, ripetizioni e recuperi specifici."
          icon={<Dumbbell size={48} />}
          onClick={() => setMode("standard")}
        />

        <ChoiceCard
          title="Scheda a Circuito"
          description="Esercizi in sequenza continua. Imposta i giri totali e il maxi-recupero finale."
          icon={<Zap size={48} />}
          onClick={() => setMode("circuit")}
        />
      </div>
    </div>
  );
}

/**
 * Sotto-componente per le card di selezione modalità.
 */
function ChoiceCard({ title, description, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-slate-800 hover:bg-slate-750 border-2 border-slate-700 hover:border-orange-500 rounded-2xl p-8 cursor-pointer transition-all group flex flex-col items-center gap-4 text-center shadow-lg hover:shadow-orange-900/20 hover:-translate-y-1"
    >
      <div className="bg-slate-900 p-6 rounded-full group-hover:bg-orange-500 transition-colors text-orange-500 group-hover:text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/WorkoutBuilder/WorkoutHeader.jsx">
// ! frontend/src/components/TrainerDashboard/WorkoutBuilder/WorkoutHeader.jsx
/**
 * TITOLO: Workout Header Component (Responsive Edition)
 * DESCRIZIONE: Gestisce l'intestazione della scheda (Titolo, Cartella, Ciclo, Durata e Visibilità).
 * UPDATE: Layout ultra-responsive per prevenire l'overflow dei tasti cartella.
 */

import React, { useState } from "react";
import { Plus, Trash2, Check, X, Eye, EyeOff } from "lucide-react";

export default function WorkoutHeader({
  folders,
  selectedFolder,
  onSelectFolder,
  onAddFolder,
  onDeleteFolder,
  title,
  setTitle,
  cycleName,
  setCycleName,
  durationWeeks,
  setDurationWeeks,
  isVisible,
  setIsVisible,
  isEditMode,
}) {
  const [isCreating, setIsCreating] = useState(false);
  const [tempFolderName, setTempFolderName] = useState("");

  const handleCreateSubmit = async () => {
    if (!tempFolderName.trim()) return;
    const success = await onAddFolder(tempFolderName);
    if (success) {
      setTempFolderName("");
      setIsCreating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-800 p-4 sm:p-6 rounded-xl border border-slate-700 shadow-lg">
      {/* SEZIONE SINISTRA: GESTIONE CARTELLA (FIX RESPONSIVE) */}
      <div className="flex flex-col">
        <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
          Cartella di Destinazione
        </label>

        <div className="w-full">
          {isCreating ? (
            <div className="flex items-center flex-nowrap gap-1 bg-slate-900 border border-orange-500 rounded-lg p-1 shadow-sm animate-in fade-in zoom-in duration-200">
              <input
                type="text"
                placeholder="Nome..."
                className="flex-1 min-w-0 p-1.5 bg-transparent outline-none text-sm text-white font-medium placeholder-slate-500"
                value={tempFolderName}
                onChange={(e) => setTempFolderName(e.target.value)}
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleCreateSubmit()}
              />
              <button
                onClick={handleCreateSubmit}
                className="shrink-0 text-slate-900 bg-emerald-500 hover:bg-emerald-400 p-2 rounded-md transition-all"
              >
                <Check size={16} />
              </button>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setTempFolderName("");
                }}
                className="shrink-0 text-slate-400 hover:text-red-400 p-2 hover:bg-slate-800 rounded-md transition-all"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="flex items-center flex-nowrap gap-2 bg-slate-900 border border-slate-600 rounded-lg p-1.5 hover:border-orange-500 transition-colors">
              <select
                className="flex-1 min-w-0 p-1 bg-transparent outline-none text-sm font-medium text-white cursor-pointer appearance-none"
                value={selectedFolder || ""}
                onChange={(e) => onSelectFolder(parseInt(e.target.value))}
              >
                <option value="" disabled>
                  Seleziona cartella
                </option>
                {folders.map((f) => (
                  <option key={f.id} value={f.id} className="bg-slate-700">
                    {f.name}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-1 shrink-0">
                {selectedFolder && !isEditMode && (
                  <button
                    onClick={() => onDeleteFolder(selectedFolder)}
                    className="p-2 text-slate-500 hover:text-red-500 transition-colors rounded-md hover:bg-slate-800"
                    title="Elimina cartella"
                  >
                    <Trash2 size={16} />
                  </button>
                )}

                {!isEditMode && (
                  <button
                    onClick={() => setIsCreating(true)}
                    className="text-slate-900 bg-orange-500 hover:bg-orange-400 p-2 transition-all rounded-md shadow-sm"
                    title="Nuova Cartella"
                  >
                    <Plus size={16} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEZIONE DESTRA: DATI SCHEDA E VISIBILITÀ */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-2">
          <label className="text-xs font-bold text-orange-500 uppercase tracking-wide truncate">
            Nome della Scheda
          </label>

          <button
            onClick={() => setIsVisible(isVisible === 1 ? 0 : 1)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black transition-all border shrink-0 ${
              isVisible === 1
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 hover:bg-emerald-500/20"
                : "bg-slate-700 text-slate-400 border-slate-600 hover:text-white"
            }`}
          >
            {isVisible === 1 ? <Eye size={14} /> : <EyeOff size={14} />}
            <span className="hidden xs:inline">
              {isVisible === 1 ? "VISIBILE" : "NASCOSTA"}
            </span>
          </button>
        </div>

        <input
          type="text"
          className="w-full border border-slate-600 p-2.5 rounded-lg font-bold text-lg outline-none text-white focus:border-orange-500 bg-slate-900 transition-all placeholder:text-slate-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Es. Scheda Forza A"
        />

        <div className="flex gap-4">
          <div className="flex-1 min-w-0">
            <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
              Ciclo
            </label>
            <input
              type="text"
              className="w-full border border-slate-600 p-2.5 rounded-lg text-sm outline-none focus:border-orange-500 bg-slate-900 text-white placeholder:text-slate-700"
              value={cycleName}
              onChange={(e) => setCycleName(e.target.value)}
              placeholder="Es. Mesociclo 1"
            />
          </div>

          <div className="w-24 sm:w-32 shrink-0">
            <label className="text-xs font-bold text-orange-500 uppercase block mb-2 tracking-wide">
              Settimane
            </label>
            <select
              className="w-full border border-slate-600 p-2.5 rounded-lg text-sm outline-none focus:border-orange-500 bg-slate-900 text-white cursor-pointer appearance-none"
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num} className="bg-slate-700">
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/ClientMonitor.jsx">
// ! frontend/src/components/TrainerDashboard/ClientMonitor.jsx
/**
 * TITOLO: Client Monitor (Architect Edition)
 * DESCRIZIONE: Monitoraggio performance con visualizzazione Note Trainer e Log Atleta.
 * UPDATE: Fix Titoli esercizi responsive (multi-riga).
 */

import React, { useState, useEffect } from "react";
import {
  Eye,
  Folder,
  Trash2,
  Pencil,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Link,
  Repeat,
  Info,
} from "lucide-react";

// API
import { fetchFolders } from "../../api/folders";
import { fetchWorkoutsByFolder, deleteWorkout } from "../../api/workouts";
import { fetchWorkoutLogs } from "../../api/logs";

// Utilities & Shared Components
import { mapExerciseToUI } from "../../utils/exerciseMapper";
import { getLogEntry, getLogOrGhost } from "../../utils/logUtils";
import { splitSubString } from "../../utils/exerciseParser";
import ValueBox from "../shared/ValueBox";

export default function ClientMonitor({ clientId, onEdit }) {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [expandedWorkouts, setExpandedWorkouts] = useState([]);
  const [expandedExercises, setExpandedExercises] = useState(new Set());
  const [logs, setLogs] = useState({});
  const [activeWeeks, setActiveWeeks] = useState({});

  const TYPE_STYLES = {
    normal: { color: "orange", label: "NORMALE" },
    stripping: { color: "red", label: "STRIPPING" },
    rest_pause: { color: "blue", label: "RESTPAUSE" },
    superset: { color: "emerald", label: "SUPER SET" },
    circuit: { color: "purple", label: "GIRO" },
  };

  useEffect(() => {
    if (clientId) loadFoldersAndFindTarget();
  }, [clientId]);

  useEffect(() => {
    if (selectedFolder) loadWorkoutsForSelectedFolder();
  }, [selectedFolder]);

  const loadFoldersAndFindTarget = async () => {
    try {
      const foldersData = await fetchFolders(clientId);
      setFolders(foldersData);
      if (foldersData.length > 0) setSelectedFolder(foldersData[0].id);
    } catch (err) {
      console.error("Errore folders:", err);
    }
  };

  const loadWorkoutsForSelectedFolder = async () => {
    const data = await fetchWorkoutsByFolder(selectedFolder);
    const normalized = data.map((w) => ({
      ...w,
      exercises: w.exercises.map(mapExerciseToUI),
    }));
    setWorkouts(normalized);
    setExpandedWorkouts(normalized.map((w) => w.id));

    normalized.forEach((w) => {
      fetchWorkoutLogs(w.id).then((workoutLogs) => {
        setLogs((prev) => ({ ...prev, [w.id]: workoutLogs }));
      });
      setActiveWeeks((prev) => ({ ...prev, [w.id]: 1 }));
    });
  };

  const toggleWorkout = (id) => {
    setExpandedWorkouts((prev) =>
      prev.includes(id) ? prev.filter((wId) => wId !== id) : [...prev, id]
    );
  };

  const toggleExercise = (id) => {
    setExpandedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="space-y-6 pb-20">
      {/* HEADER MONITOR */}
      <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-slate-700 text-orange-500 shadow-inner">
            <Eye size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Diario di Bordo</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Analisi Performance
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 p-2 rounded-lg border border-slate-600 w-full sm:w-auto">
          <Folder size={20} className="text-orange-500 ml-2" />
          <select
            className="bg-transparent text-white text-sm font-bold outline-none cursor-pointer p-1 w-full"
            value={selectedFolder || ""}
            onChange={(e) => setSelectedFolder(e.target.value)}
          >
            {folders.map((f) => (
              <option key={f.id} value={f.id} className="bg-slate-800">
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-8">
        {workouts.map((workout) => {
          const isOpen = expandedWorkouts.includes(workout.id);
          const currentWeek = activeWeeks[workout.id] || 1;
          const wLogs = logs[workout.id] || [];
          const isCircuit = workout.workout_type === "circuit";

          return (
            <div
              key={workout.id}
              className={`bg-slate-800 rounded-xl shadow-xl border border-slate-700 overflow-hidden transition-all ${
                isOpen ? "ring-2 ring-orange-500/30" : ""
              }`}
            >
              <div
                onClick={() => toggleWorkout(workout.id)}
                className="bg-slate-900 border-b border-slate-700 p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800 select-none"
              >
                <div className="flex items-center gap-3 flex-1">
                  {isOpen ? (
                    <ChevronUp size={20} className="text-orange-500 shrink-0" />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-slate-500 shrink-0"
                    />
                  )}
                  {/* Titolo Scheda Responsive */}
                  <h3 className="font-black text-lg text-white uppercase tracking-tight whitespace-normal leading-tight">
                    {workout.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(workout);
                    }}
                    className="text-orange-400 p-2 bg-slate-800 rounded-lg border border-slate-600 hover:bg-orange-600 hover:text-white transition-all"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm("Eliminare?"))
                        deleteWorkout(workout.id).then(() =>
                          setWorkouts((p) =>
                            p.filter((w) => w.id !== workout.id)
                          )
                        );
                    }}
                    className="text-red-400 p-2 bg-slate-800 rounded-lg border border-slate-600 hover:bg-red-600 hover:text-white transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="animate-in slide-in-from-top-2">
                  {/* SELETTORE SETTIMANA */}
                  <div className="flex gap-2 overflow-x-auto p-3 bg-slate-900/30 border-b border-slate-700 scrollbar-hide">
                    {[...Array(parseInt(workout.duration_weeks) || 1)].map(
                      (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() =>
                            setActiveWeeks((prev) => ({
                              ...prev,
                              [workout.id]: i + 1,
                            }))
                          }
                          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                            currentWeek === i + 1
                              ? "bg-orange-600 text-white border-orange-400 shadow-md"
                              : "bg-slate-800 text-slate-500 border-slate-700 hover:border-orange-500/50"
                          }`}
                        >
                          SETTIMANA {i + 1}
                        </button>
                      )
                    )}
                  </div>

                  <div className="p-4 space-y-6">
                    {isCircuit ? (
                      /* --- VISTA CIRCUITO --- */
                      <div className="space-y-6">
                        {[...Array(workout.circuit_rounds || 1)].map(
                          (_, roundIdx) => (
                            <div
                              key={roundIdx}
                              className="border-2 border-orange-500/10 rounded-2xl overflow-hidden bg-slate-900/20"
                            >
                              <div className="bg-orange-950/20 p-3 border-b border-orange-500/10 flex items-center font-black text-orange-400 uppercase text-[10px] tracking-[0.2em]">
                                <Repeat size={14} className="mr-2" /> GIRO{" "}
                                {roundIdx + 1}
                              </div>
                              <div className="divide-y divide-slate-800">
                                {workout.exercises.map((ex) => {
                                  const setConfig =
                                    ex.config[roundIdx] || ex.config[0] || {};
                                  const log = getLogEntry(
                                    wLogs,
                                    ex.id,
                                    currentWeek,
                                    roundIdx
                                  );
                                  const displayWork =
                                    log.reps_done ||
                                    getLogOrGhost(
                                      wLogs,
                                      ex.id,
                                      currentWeek,
                                      roundIdx,
                                      "reps"
                                    ) ||
                                    setConfig.reps;
                                  const displayKg =
                                    log.kg_done ||
                                    getLogOrGhost(
                                      wLogs,
                                      ex.id,
                                      currentWeek,
                                      roundIdx,
                                      "kg"
                                    ) ||
                                    setConfig.kg;

                                  return (
                                    <div key={ex.id} className="p-4">
                                      {/* Titolo Esercizio Circuito Responsive */}
                                      <div className="mb-3 flex justify-between items-start font-bold text-white text-sm">
                                        <span className="flex items-center gap-2 flex-1 whitespace-normal break-words leading-tight pr-2">
                                          <ChevronRight
                                            size={16}
                                            className="text-orange-500 shrink-0"
                                          />{" "}
                                          {ex.name}
                                        </span>
                                        <span className="text-[9px] font-black text-orange-400 uppercase border border-orange-900/40 px-2 py-0.5 rounded shrink-0">
                                          {setConfig.type === "timer"
                                            ? "TIMER"
                                            : "REPS"}
                                        </span>
                                      </div>

                                      {/* NOTA TECNICA CIRCUITO */}
                                      {setConfig.notes &&
                                        setConfig.notes.trim() !== "" && (
                                          <div className="bg-blue-950/20 border border-blue-500/20 p-2 rounded-lg flex gap-2 items-start mb-3">
                                            <Info
                                              className="text-blue-400 shrink-0 mt-0.5"
                                              size={14}
                                            />
                                            <div className="w-full">
                                              <span className="text-[8px] font-black uppercase text-blue-400 tracking-wider block opacity-70">
                                                Tua Nota Tecnica
                                              </span>
                                              <p className="text-[11px] text-blue-100/80 whitespace-pre-wrap leading-tight">
                                                {setConfig.notes}
                                              </p>
                                            </div>
                                          </div>
                                        )}

                                      <div className="grid grid-cols-3 gap-3">
                                        <ValueBox
                                          value={displayWork}
                                          label={
                                            setConfig.type === "timer"
                                              ? "Tempo"
                                              : "Reps"
                                          }
                                          subLabel={`/ ${setConfig.reps}`}
                                        />
                                        <ValueBox
                                          value={displayKg}
                                          label="Kg"
                                          subLabel={`/ ${setConfig.kg || 0}`}
                                        />
                                        <ValueBox
                                          value={setConfig.rest}
                                          label="Rec"
                                          isRest
                                        />
                                      </div>
                                      {log.notes && (
                                        <p className="mt-3 text-[10px] italic text-slate-400 bg-black/20 p-2 rounded">
                                          Log Atleta: "{log.notes}"
                                        </p>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      /* --- VISTA STANDARD --- */
                      <div className="space-y-4">
                        {workout.exercises.map((ex) => {
                          const isOpenEx = expandedExercises.has(ex.id);
                          const isSuperSet = ex.exercise_type === "superset";

                          return (
                            <div
                              key={ex.id}
                              className="rounded-2xl border border-slate-700 bg-slate-900/40 overflow-hidden shadow-inner"
                            >
                              <div
                                onClick={() => toggleExercise(ex.id)}
                                className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-700/20 transition-all"
                              >
                                {/* Titolo Esercizio Standard Responsive */}
                                <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2 flex-1 whitespace-normal break-words leading-tight pr-2">
                                  {isSuperSet ? (
                                    <Link
                                      size={18}
                                      className="text-emerald-500 shrink-0"
                                    />
                                  ) : (
                                    <ChevronRight
                                      size={18}
                                      className="text-orange-500 shrink-0"
                                    />
                                  )}
                                  <span>
                                    {ex.name}
                                    {ex.second_name && (
                                      <span className="text-emerald-400 block sm:inline sm:ml-1">
                                        + {ex.second_name}
                                      </span>
                                    )}
                                  </span>
                                </h4>
                                {isOpenEx ? (
                                  <ChevronUp
                                    size={22}
                                    className="text-slate-500 shrink-0"
                                  />
                                ) : (
                                  <ChevronDown
                                    size={22}
                                    className="text-slate-500 shrink-0"
                                  />
                                )}
                              </div>

                              {isOpenEx && (
                                <div className="p-2 sm:p-4 space-y-4 border-t border-slate-700/50 bg-black/5">
                                  {/* Nota Globale */}
                                  {ex.notes && ex.notes.trim() !== "" && (
                                    <div className="bg-blue-950/20 border border-blue-500/20 p-3 rounded-xl flex gap-3 items-start mb-2 mx-1">
                                      <Info
                                        className="text-blue-400 shrink-0 mt-0.5"
                                        size={16}
                                      />
                                      <div className="w-full">
                                        <span className="text-[9px] font-black uppercase text-blue-400 tracking-wider block opacity-70">
                                          Istruzioni fornite
                                        </span>
                                        <p className="text-xs text-blue-100/90 whitespace-pre-wrap leading-relaxed font-medium">
                                          {ex.notes}
                                        </p>
                                      </div>
                                    </div>
                                  )}

                                  {ex.config.map((set, i) => {
                                    const log = getLogEntry(
                                      wLogs,
                                      ex.id,
                                      currentWeek,
                                      i
                                    );
                                    const isCompleted =
                                      log.reps_done || log.kg_done;
                                    const style = isSuperSet
                                      ? TYPE_STYLES.superset
                                      : TYPE_STYLES[set.type] ||
                                        TYPE_STYLES.normal;

                                    const subRepsTarget = splitSubString(
                                      set.reps || "0"
                                    );
                                    const subKgsTarget = splitSubString(
                                      set.kg || "0"
                                    );
                                    const subRestTarget = splitSubString(
                                      set.rest || "0"
                                    );
                                    const subRepsLog = splitSubString(
                                      log.reps_done || ""
                                    );
                                    const subKgsLog = splitSubString(
                                      log.kg_done || ""
                                    );
                                    const subRepsGhost = splitSubString(
                                      getLogOrGhost(
                                        wLogs,
                                        ex.id,
                                        currentWeek,
                                        i,
                                        "reps"
                                      ) || ""
                                    );
                                    const subKgsGhost = splitSubString(
                                      getLogOrGhost(
                                        wLogs,
                                        ex.id,
                                        currentWeek,
                                        i,
                                        "kg"
                                      ) || ""
                                    );

                                    return (
                                      <div
                                        key={i}
                                        className={`p-4 rounded-xl border-2 transition-all ${
                                          isCompleted
                                            ? "bg-emerald-900/5 border-emerald-500/20"
                                            : "bg-slate-900/60 border-slate-700"
                                        }`}
                                      >
                                        <div className="flex items-center gap-3 border-b border-slate-800 pb-2 mb-3">
                                          <span
                                            className={`w-6 h-6 flex items-center justify-center rounded-full border text-[10px] font-black ${
                                              isCompleted
                                                ? "bg-emerald-600 text-white border-emerald-400"
                                                : "bg-slate-800 text-slate-500 border-slate-700"
                                            }`}
                                          >
                                            {i + 1}
                                          </span>
                                          <span
                                            className={`text-[9px] font-black uppercase tracking-widest border px-2 py-0.5 rounded text-${style.color}-400 border-${style.color}-900/50 bg-${style.color}-900/20`}
                                          >
                                            {style.label}
                                          </span>
                                        </div>

                                        {/* NOTA SPECIFICA DEL SET */}
                                        {set.note && set.note.trim() !== "" && (
                                          <div className="bg-blue-950/20 border border-blue-500/20 p-2 rounded-lg flex gap-2 items-start mb-3">
                                            <Info
                                              className="text-blue-400 shrink-0 mt-0.5"
                                              size={14}
                                            />
                                            <div className="w-full">
                                              <span className="text-[8px] font-black uppercase text-blue-400 tracking-wider block opacity-70">
                                                Istruzioni (Set {i + 1})
                                              </span>
                                              <p className="text-[11px] text-blue-100/80 whitespace-pre-wrap leading-tight">
                                                {set.note}
                                              </p>
                                            </div>
                                          </div>
                                        )}

                                        <div className="space-y-4">
                                          {subRepsTarget.map(
                                            (target, subIdx) => (
                                              <div
                                                key={subIdx}
                                                className={`${
                                                  subIdx > 0
                                                    ? "pt-3 border-t border-slate-800/40"
                                                    : ""
                                                }`}
                                              >
                                                {subRepsTarget.length > 1 && (
                                                  <p
                                                    className={`text-[8px] font-black uppercase mb-2 ${
                                                      style.color === "emerald"
                                                        ? "text-emerald-500/70"
                                                        : "text-slate-500"
                                                    }`}
                                                  >
                                                    {isSuperSet
                                                      ? `ESERCIZIO ${
                                                          subIdx === 0
                                                            ? "A"
                                                            : "B"
                                                        }`
                                                      : `FASE ${subIdx + 1}`}
                                                  </p>
                                                )}
                                                <div className="grid grid-cols-3 gap-3">
                                                  <ValueBox
                                                    value={
                                                      subRepsLog[subIdx] ||
                                                      subRepsGhost[subIdx] ||
                                                      target
                                                    }
                                                    label={
                                                      set.type === "timer"
                                                        ? "Tempo"
                                                        : "Reps"
                                                    }
                                                    subLabel={`/ ${target}${
                                                      set.type === "timer"
                                                        ? '"'
                                                        : ""
                                                    }`}
                                                  />
                                                  <ValueBox
                                                    value={
                                                      subKgsLog[subIdx] ||
                                                      subKgsGhost[subIdx] ||
                                                      subKgsTarget[subIdx] ||
                                                      "0"
                                                    }
                                                    label="Kg"
                                                    subLabel={`/ ${
                                                      subKgsTarget[subIdx] || 0
                                                    }`}
                                                  />
                                                  <ValueBox
                                                    value={
                                                      subRestTarget[subIdx] ||
                                                      subRestTarget[0]
                                                    }
                                                    label="Rec"
                                                    isRest
                                                  />
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                        {log.notes && (
                                          <p className="mt-3 p-2 bg-emerald-500/5 rounded border-l-2 border-emerald-500/30 text-[10px] italic text-emerald-400/80">
                                            Atleta: "{log.notes}"
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
</file>

<file path="src/components/TrainerDashboard/TrainerDashboard.jsx">
// ! frontend/src/components/TrainerDashboard/TrainerDashboard.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PenTool, Eye } from "lucide-react";
import WorkoutCreator from "./WorkoutBuilder/WorkoutCreator";
import ClientMonitor from "./ClientMonitor";
import CircuitBuilder from "./WorkoutBuilder/CircuitBuilder";
import ClientHeader from "../shared/ClientHeader";

export default function TrainerDashboard({ trainerId, client }) {
  const location = useLocation();
  const [tab, setTab] = useState("create");
  const [workoutToEdit, setWorkoutToEdit] = useState(null);
  const [isCircuitMode, setIsCircuitMode] = useState(false);

  const clientId = client.id;

  useEffect(() => {
    if (location.state?.openWorkoutId) {
      setTab("create");
    }
  }, [location.state]);

  const handleEditRequest = (workout) => {
    setWorkoutToEdit(workout);
    setIsCircuitMode(workout.workout_type === "circuit");
    setTab("create");
  };

  const handleActionComplete = () => {
    setWorkoutToEdit(null);
    setIsCircuitMode(false);
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
    if (newTab === "create") setWorkoutToEdit(null);
  };

  return (
    <div className="space-y-6">
      {/* HEADER CLIENTE PULITO (Senza tasto archiviazione) */}
      <ClientHeader
        name={client.name}
        level={client.level || 1}
        role="trainer_view"
      />

      {/* MENU TAB NAVBAR */}
      <div className="bg-slate-800 p-1.5 rounded-xl shadow-lg border border-slate-700 flex gap-2">
        <TabButton
          active={tab === "create"}
          onClick={() => handleTabChange("create")}
          icon={<PenTool size={20} />}
          label={workoutToEdit ? "Modifica Scheda" : "Gestione Schede"}
        />
        <TabButton
          active={tab === "monitor"}
          onClick={() => handleTabChange("monitor")}
          icon={<Eye size={20} />}
          label="Diario di Bordo"
        />
      </div>

      <div className="animate-in fade-in duration-300">
        {tab === "create" ? (
          isCircuitMode ? (
            <CircuitBuilder
              trainerId={trainerId}
              clientId={clientId}
              initialData={workoutToEdit}
              onCancel={handleActionComplete}
              onSuccess={handleActionComplete}
            />
          ) : (
            <WorkoutCreator
              trainerId={trainerId}
              clientId={clientId}
              workoutToEdit={workoutToEdit}
              onClearEdit={handleActionComplete}
              onSwitchToCircuit={() => setIsCircuitMode(true)}
              onSwitchToStandard={() => setIsCircuitMode(false)}
            />
          )
        ) : (
          <ClientMonitor clientId={clientId} onEdit={handleEditRequest} />
        )}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
        active
          ? "bg-orange-500 text-white shadow-md shadow-orange-900/20"
          : "text-slate-400 hover:text-white hover:bg-slate-700"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
</file>

<file path="src/components/TrainerDashboard/TrainerLayout.jsx">
// ! frontend/src/components/TrainerDashboard/TrainerLayout.jsx
// --- PAGINA TRAINER (Gestione) ---
function TrainerPage({ selectedClient, onSelectClient }) {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  const location = useLocation();

  // Stato per gestire l'apertura/chiusura della Sidebar (Lista Clienti)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const targetId = location.state?.targetClientId;
    if (targetId && selectedClient?.id !== targetId) {
      onSelectClient({ id: targetId, name: "Cliente Selezionato" });
    }
  }, [location.state, selectedClient, onSelectClient]);

  if (!user || user.role !== "trainer") {
    return <Navigate to="/client-area" replace />;
  }

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 flex flex-col md:flex-row gap-4 md:gap-6 w-full">
      {/* COLONNA SINISTRA: SELETTORE CLIENTI (COLLASSABILE) */}
      <div
        className={`
        relative transition-all duration-300 ease-in-out flex flex-col gap-4
        ${isSidebarOpen ? "w-full md:w-1/3 lg:w-1/4" : "w-full md:w-16"}
      `}
      >
        {/* Tasto Toggle: Su mobile mostra Su/Giù, su Desktop mostra Destra/Sinistra */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-4 z-20 bg-slate-700 text-slate-300 border border-slate-600 rounded-full p-1 shadow-md hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
          title={
            isSidebarOpen ? "Riduci lista clienti" : "Espandi lista clienti"
          }
        >
          {/* Logica icone responsiva */}
          <span className="hidden md:block">
            {isSidebarOpen ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
          <span className="md:hidden">
            {isSidebarOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </span>
        </button>

        {isSidebarOpen ? (
          // --- VISTA ESPANSA (APERTA) ---
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            <button
              onClick={() => onSelectClient(user)}
              className={`w-full py-4 px-4 rounded-xl border-2 font-bold shadow-sm transition-all flex items-center justify-center gap-2 ${
                selectedClient?.id === user.id
                  ? "bg-slate-800 border-orange-500 text-orange-500 shadow-orange-900/10"
                  : "bg-slate-800 border-slate-700 text-white hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              <span>📝</span> Gestisci le Mie Schede
            </button>
            <ClientSelector
              selectedClient={selectedClient}
              onSelect={onSelectClient}
            />
          </div>
        ) : (
          // --- VISTA MINIMIZZATA (CHIUSA) ---
          <div
            onClick={() => setIsSidebarOpen(true)}
            className="flex md:flex-col items-center justify-center gap-4 md:gap-8 py-3 md:py-8 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-orange-500 group transition-all"
            title="Clicca per aprire la lista clienti"
          >
            <Users
              size={24}
              className="text-slate-500 group-hover:text-orange-500"
            />
            {/* Scritta Verticale solo su Desktop */}
            <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-orange-500 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
              Lista Clienti
            </span>
            {/* Testo Orizzontale solo su Mobile */}
            <span className="md:hidden text-xs font-bold text-slate-500 group-hover:text-orange-500 uppercase tracking-widest">
              Mostra Lista Clienti
            </span>
          </div>
        )}
      </div>

      {/* COLONNA DESTRA (DASHBOARD) */}
      <div className="flex-1 transition-all duration-300">
        {selectedClient ? (
          <TrainerDashboard client={selectedClient} trainerId={user.id} />
        ) : (
          <div className="text-slate-400 p-10 text-center bg-slate-800 rounded-xl border border-slate-700 shadow-sm flex flex-col items-center justify-center h-64">
            <Users size={48} className="mb-4 opacity-20" />
            <p className="font-bold text-lg text-slate-400">
              Nessun profilo selezionato.
            </p>
            <p className="text-sm">
              Seleziona un cliente dalla lista a sinistra o tocca "Gestisci le
              Mie Schede".
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

// --- PAGINA AREA PERSONALE ---
function PersonalAreaPage() {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  if (!user) return <Navigate to="/login" replace />;
  const clientToShow = { id: user.id, name: user.name };
  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="bg-slate-800/50 border-l-4 border-slate-500 text-slate-300 p-4 mb-6 rounded-r shadow-sm border-y border-r border-slate-700 max-w-2xl mx-auto">
        <p className="font-bold text-sm text-white">👤 Area Personale</p>
        <p className="text-xs opacity-70">
          Queste sono le tue schede di allenamento personali.
        </p>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <ClientArea client={clientToShow} />
      </div>
    </main>
  );
}

// --- PAGINA CALENDARIO ---
function ClientSchedulerPage() {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  if (!user) return <Navigate to="/login" replace />;
  const clientToShow = { id: user.id, name: user.name };
  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="w-full max-w-3xl mx-auto">
        <ClientScheduler client={clientToShow} />
      </div>
    </main>
  );
}

// --- APP PRINCIPALE ---
export default function App() {
  const [selectedClientForTrainer, setSelectedClientForTrainer] =
    useState(null);

  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<LoginLayout />}>
              <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route element={<AppLayout />}>
              <Route element={<RequireAuth />}>
                <Route path="/client-area" element={<PersonalAreaPage />} />
                <Route
                  path="/client-scheduler"
                  element={<ClientSchedulerPage />}
                />
                <Route
                  path="/trainer-dashboard"
                  element={
                    <TrainerPage
                      selectedClient={selectedClientForTrainer}
                      onSelectClient={setSelectedClientForTrainer}
                    />
                  }
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
}
</file>

<file path="src/components/TrainerDashboard/TrainerSidebar.jsx">
// ! frontend/src/components/TrainerDashboard/TrainerSidebar.jsx
import React, { useState } from "react";
import {
  Users,
  Wallet,
  Archive,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import ClientSelector from "../ClientSelector/ClientSelector";

export default function TrainerSidebar({
  isOpen,
  setIsOpen,
  isPaymentMode,
  onOpenPayments,
  selectedClient,
  onSelectClient,
}) {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div
      className={`flex flex-col gap-2 transition-all duration-300 ease-in-out ${isOpen ? "w-full md:w-1/3 lg:w-1/4" : "w-full md:w-14"}`}
    >
      {/* TOGGLE SIDEBAR */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl p-3 cursor-pointer hover:border-slate-500 hover:bg-slate-700/50 transition-colors group shadow-sm"
      >
        {isOpen ? (
          <>
            <div className="flex items-center gap-2 text-slate-400 group-hover:text-white">
              <Users size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Clienti
              </span>
            </div>
            <div className="text-slate-500 group-hover:text-orange-500">
              <span className="hidden md:block">
                <ChevronLeft size={18} />
              </span>
              <span className="md:hidden">
                <ChevronUp size={18} />
              </span>
            </div>
          </>
        ) : (
          <div className="text-slate-500 group-hover:text-orange-500 mx-auto">
            <span className="hidden md:block">
              <ChevronRight size={20} />
            </span>
            <span className="md:hidden">
              <ChevronDown size={20} />
            </span>
          </div>
        )}
      </div>

      {/* SWITCH ATTIVI / ARCHIVIATI */}
      {isOpen && (
        <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700 mx-1">
          <button
            onClick={() => setShowArchived(false)}
            className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-md transition-all ${!showArchived ? "bg-orange-600 text-white" : "text-slate-500 hover:text-white"}`}
          >
            Attivi
          </button>
          <button
            onClick={() => setShowArchived(true)}
            className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-md transition-all ${showArchived ? "bg-slate-700 text-white" : "text-slate-500 hover:text-white"}`}
          >
            Archivio
          </button>
        </div>
      )}

      {/* BOTTONE PAGAMENTI */}
      <button
        onClick={onOpenPayments}
        className={`flex items-center gap-3 p-3 rounded-xl font-bold transition-all border ${isPaymentMode ? "bg-orange-500 text-white border-orange-400 shadow-orange-900/20" : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white hover:border-slate-500"} ${isOpen ? "" : "justify-center"}`}
      >
        <Wallet size={20} />
        {isOpen && <span className="text-sm">Pagamenti</span>}
      </button>

      {/* LISTA CLIENTI (Passiamo lo stato showArchived) */}
      {isOpen ? (
        <div className="flex-1 overflow-y-auto min-h-0 animate-in fade-in slide-in-from-top-2 duration-300">
          <ClientSelector
            selectedClient={selectedClient}
            onSelect={onSelectClient}
            showArchived={showArchived} // FILTRO
          />
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="hidden md:flex flex-col items-center gap-6 py-6 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-orange-500 group transition-all h-full"
        >
          {showArchived ? (
            <Archive size={20} className="text-slate-500" />
          ) : (
            <Users size={20} className="text-slate-500" />
          )}
          <div className="w-px h-10 bg-slate-700"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 [writing-mode:vertical-rl] rotate-180">
            {showArchived ? "Archivio" : "Lista Clienti"}
          </span>
        </div>
      )}
    </div>
  );
}
</file>

<file path="src/components/LoginForm.jsx">
import React, { useState } from "react";
import { Dumbbell, Lock, User, AlertCircle } from "lucide-react";
import { loginUser } from "../api/auth";
import { useAnimatedNavigation } from "./TransitionGate";
import { useAuth } from "../context/AuthContext"; // <-- AGGIUNTO: Importiamo il context

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Recuperiamo la funzione login dal nostro Context
  const { login } = useAuth();
  const { navigateWithTransition, isTransitioning } = useAnimatedNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Chiamata API al backend
      const data = await loginUser(username, password);

      // 2. AGGIORNAMENTO REATTIVO: Invece di scrivere solo nel sessionStorage,
      // usiamo la funzione login() del context che aggiorna tutto il sistema.
      login(data);

      // 3. Navigazione animata
      if (data.role === "trainer") {
        navigateWithTransition("/trainer-dashboard");
      } else {
        navigateWithTransition("/client-area");
      }
    } catch (err) {
      // Gestione errore migliorata
      setError(err.message || "Credenziali non valide.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative bg-slate-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-orange-500 p-3 rounded-xl mb-3 shadow-lg shadow-orange-500/20">
            <Dumbbell size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            MyTrainUp
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Accedi al tuo spazio di allenamento
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">
              Username
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-3 text-slate-500"
                size={18}
              />
              <input
                type="text"
                placeholder="es. lorenzo"
                className="w-full bg-slate-900 border border-slate-600 text-white pl-10 p-2.5 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-slate-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-slate-500"
                size={18}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-600 text-white pl-10 p-2.5 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-slate-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || isTransitioning}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-xl shadow-lg transform transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {loading
              ? "Verifica in corso..."
              : isTransitioning
              ? "Connessione..."
              : "ENTRA"}
          </button>
        </form>

        <p className="text-center text-slate-500 text-xs mt-6">
          Password dimenticata? Contatta il tuo Trainer.
        </p>
      </div>
    </div>
  );
}
</file>

<file path="src/components/Navbar.jsx">
// frontend/src/components/Navbar.jsx
// MyTrainUp Frontend: Componente Barra di Navigazione Principale (Navbar.jsx)

import React, { useState, useEffect, useRef } from 'react';
import { LogOut, Dumbbell, LayoutDashboard, User, Bell, Calendar } from 'lucide-react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import NotificationDropdown from './NotificationDropdown'; 
import { fetchUnreadCount } from '../api/notifications'; 

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation(); 
  const dropdownRef = useRef(null); 

  const [unreadCount, setUnreadCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const token = sessionStorage.getItem('fit_token'); 
  const isTrainer = user?.role === 'trainer';

  const getCount = async () => {
    if (token && user) {
      try {
        const count = await fetchUnreadCount(token);
        setUnreadCount(count);
      } catch (error) {
        setUnreadCount(0); 
      }
    } else {
      setUnreadCount(0);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  
  useEffect(() => {
    getCount(); 
    const intervalId = setInterval(getCount, 30000); 
    return () => clearInterval(intervalId);
  }, [token, user]); 

  const handleLogout = () => {
    sessionStorage.removeItem('fit_token');
    sessionStorage.removeItem('fit_user');
    if (setUser) setUser(null);
    setUnreadCount(0); 
    navigate('/login');
  };

  // --- NUOVA FUNZIONE: GESTIONE CLICK LOGO ---
  const handleLogoClick = () => {
    if (!user) return;
    if (isTrainer) {
        navigate('/trainer-dashboard');
    } else {
        navigate('/client-area');
    }
  };

  return (
    <nav className="bg-slate-900 text-white p-2 sm:p-4 shadow-md border-b border-slate-800 flex justify-between items-center sticky top-0 z-50">
      
      {/* SINISTRA: LOGO (ORA CLICCABILE) */}
      <div 
        onClick={handleLogoClick}
        className="flex items-center gap-2 select-none cursor-pointer hover:opacity-80 transition-opacity"
        title="Torna alla Home"
      >
        <div className="bg-orange-600 p-1.5 rounded-lg flex-shrink-0">
            <Dumbbell size={24} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight hidden sm:block">
          My<span className="text-orange-500">TrainUp</span>
        </h1>
      </div>

      {/* DESTRA */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* --- 📅 ICONA CALENDARIO --- */}
        <button 
            onClick={() => navigate('/client-scheduler')}
            className={`p-2 rounded-full transition-all border border-slate-700 flex-shrink-0 ${
                location.pathname.includes('/client-scheduler') 
                    ? 'bg-blue-600/20 text-blue-400 border-blue-700' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-400'
            }`}
            title="Il mio Calendario"
        >
            <Calendar size={20} />
        </button>
        
        {/* --- 🔔 ICONA NOTIFICHE --- */}
        {user && (
            <div className="relative flex-shrink-0" ref={dropdownRef}>
                <button 
                    onClick={() => {
                        setIsDropdownOpen(prev => !prev);
                        if (!isDropdownOpen) getCount(); 
                    }}
                    className={`p-2 rounded-full transition-all flex items-center justify-center ${
                        isDropdownOpen || unreadCount > 0 
                            ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' 
                            : 'bg-slate-800 hover:bg-slate-700'
                    } border border-slate-700`}
                >
                    <Bell size={20} />
                    {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full ring-2 ring-slate-900">
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </span>
                    )}
                </button>
                {isDropdownOpen && (
                    <NotificationDropdown token={token} unreadCount={unreadCount} onClose={() => setIsDropdownOpen(false)} onMarkAllReadCompleted={getCount} />
                )}
            </div>
        )}
        
        {isTrainer ? (
          /* --- VISTA TRAINER COMPATTA --- */
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
            
            <button 
              onClick={() => navigate('/trainer-dashboard')}
              className={`px-2 sm:px-3 py-1.5 rounded-md text-xs font-bold uppercase flex items-center gap-2 transition-all ${
                location.pathname.includes('trainer-dashboard') 
                ? 'bg-orange-500 text-white shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
              title="Gestione"
            >
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Gestione</span>
            </button>

            <button 
              onClick={() => navigate('/client-area')}
              className={`px-2 sm:px-3 py-1.5 rounded-md text-xs font-bold uppercase flex items-center gap-2 transition-all ${
                location.pathname.includes('client-area') 
                ? 'bg-orange-500 text-white shadow-sm' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
              title="I miei allenamenti"
            >
              <User size={18} />
              <span className="hidden sm:inline">Training</span>
            </button>
          </div>
        ) : (
          /* --- VISTA CLIENTE --- */
          user && (
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white">{user.name}</p>
              <p className="text-xs text-slate-400 uppercase">{user.role}</p>
            </div>
          )
        )}
        
        <button onClick={handleLogout} className="bg-slate-800 hover:bg-red-600/20 hover:text-red-500 p-2 rounded-full transition-all border border-slate-700 flex-shrink-0" title="Esci">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
}
</file>

<file path="src/components/NotificationDropdown.jsx">
/**
 * TITOLO: Notification Dropdown (Clean Edition)
 * DESCRIZIONE: Gestione notifiche con funzioni di lettura singola/totale ed eliminazione singola/totale.
 * FIX: Aggiunto tasto "Elimina tutto" e ottimizzazione layout footer.
 */

import React, { useState, useEffect } from "react";
import { BellOff, MailCheck, X, Trash2, Trash } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  fetchNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  deleteAllNotifications, // <--- Assicurati che sia implementata nel file API
} from "../api/notifications";

export default function NotificationDropdown({
  token,
  unreadCount,
  onClose,
  onMarkAllReadCompleted,
}) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  const userRole = user?.role;
  const userId = user?.id;

  useEffect(() => {
    const loadNotifications = async () => {
      if (!token) return;
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNotifications(token);
        setNotifications(
          data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        );
      } catch (err) {
        setError("Errore nel caricamento delle notifiche.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [token]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // --- AZIONI ---
  const handleMarkSingleRead = async (notificationId) => {
    try {
      await markNotificationAsRead(token, notificationId);
      setNotifications((prev) =>
        prev.map((n) => (n.id === notificationId ? { ...n, is_read: true } : n))
      );
      if (onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error(`Impossibile marcare come letta:`, err);
    }
  };

  const handleDelete = async (notificationId, e) => {
    e.stopPropagation(); 
    const oldList = [...notifications];
    setNotifications((prev) => prev.filter((n) => n.id !== notificationId));

    try {
      await deleteNotification(token, notificationId);
      const wasUnread = oldList.find((n) => n.id === notificationId)?.is_read === 0;
      if (wasUnread && onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error("Impossibile eliminare:", err);
      setNotifications(oldList);
      alert("Errore durante l'eliminazione.");
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsAsRead(token);
      setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
      if (onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error("Impossibile marcare tutte come lette:", err);
    }
  };

  /**
   * Elimina tutte le notifiche dell'utente
   */
  const handleDeleteAll = async () => {
    if (!window.confirm("Vuoi eliminare definitivamente tutte le notifiche?")) return;

    const oldNotifications = [...notifications];
    setNotifications([]); // UI Optimistic Update

    try {
      await deleteAllNotifications(token);
      if (onMarkAllReadCompleted) onMarkAllReadCompleted();
    } catch (err) {
      console.error("Errore eliminazione totale:", err);
      setNotifications(oldNotifications); // Ripristino in caso di errore
      alert("Errore durante l'eliminazione totale.");
    }
  };

  // --- NAVIGAZIONE ---
  const handleNotificationClick = (notification) => {
    if (!notification.is_read) {
      handleMarkSingleRead(notification.id);
    }

    onClose();

    const navigationState = {
      openWorkoutId: notification.resource_id,
      targetClientId: notification.sender_id,
      timestamp: Date.now(),
    };

    if (userRole === "trainer") {
      if (notification.sender_id === userId) {
        navigate("/client-area", {
          state: navigationState,
          replace: location.pathname === "/client-area",
        });
      } else {
        navigate("/trainer-dashboard", { state: navigationState });
      }
    } else {
      navigate("/client-area", {
        state: navigationState,
        replace: location.pathname === "/client-area",
      });
    }
  };

  return (
    <div
      className="
            z-50 bg-slate-800 rounded-xl shadow-2xl border border-slate-700
            max-h-[60vh] sm:max-h-[400px] overflow-y-auto
            fixed top-16 left-2 right-2 w-auto
            sm:absolute sm:top-full sm:mt-2 sm:right-0 sm:left-auto sm:w-80
         animate-in fade-in slide-in-from-top-2 duration-200"
    >
      <div className="sticky top-0 bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center z-10">
        <h3 className="text-lg font-bold text-white">
          Notifiche
          {unreadCount > 0 && (
            <span className="text-orange-500 ml-2 text-sm">
              ({unreadCount})
            </span>
          )}
        </h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X size={20} />
        </button>
      </div>

      {loading && (
        <div className="p-6 text-center text-slate-400 text-sm">
          Caricamento...
        </div>
      )}
      {error && (
        <div className="p-4 text-red-400 text-center text-sm">{error}</div>
      )}

      {!loading && !error && notifications.length === 0 && (
        <div className="p-8 flex flex-col items-center justify-center text-slate-500">
          <BellOff size={32} />
          <p className="mt-3 text-sm font-medium">Nessuna notifica.</p>
        </div>
      )}

      {!loading && !error && notifications.length > 0 && (
        <>
          <ul className="divide-y divide-slate-700">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                className={`p-4 transition-colors relative group cursor-pointer hover:bg-slate-700/50 ${
                  notification.is_read ? "bg-slate-800/50" : "bg-slate-700/20"
                }`}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 pr-14">
                    <div className="flex items-center gap-2 mb-1">
                      {!notification.is_read && (
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                      )}
                      <p
                        className={`text-sm font-bold leading-tight ${
                          notification.is_read ? "text-slate-400" : "text-white"
                        }`}
                      >
                        {notification.title}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">
                      {notification.message}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-2 font-mono">
                      {formatDate(notification.created_at)}
                    </p>
                  </div>

                  <div className="absolute top-4 right-3 flex flex-col gap-2">
                    {!notification.is_read && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkSingleRead(notification.id);
                        }}
                        className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                        title="Segna come letta"
                      >
                        <MailCheck size={16} />
                      </button>
                    )}
                    <button
                      onClick={(e) => handleDelete(notification.id, e)}
                      className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                      title="Elimina per sempre"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* FOOTER AZIONI: Visibile se ci sono notifiche */}
          <div className="sticky bottom-0 bg-slate-800/95 backdrop-blur-sm p-3 border-t border-slate-700 flex gap-2">
            <button
              onClick={handleMarkAllRead}
              disabled={unreadCount === 0}
              className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors border
                ${unreadCount > 0 
                  ? "text-blue-400 border-blue-500/30 hover:bg-blue-500/10" 
                  : "text-slate-600 border-slate-700 cursor-not-allowed opacity-50"
                }`}
            >
              Lette
            </button>
            <button
              onClick={handleDeleteAll}
              className="flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-colors"
            >
              Elimina Tutto
            </button>
          </div>
        </>
      )}
    </div>
  );
}
</file>

<file path="src/components/ProtectedRoute.jsx">
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // <-- AGGIUNTO: Importiamo il context reattivo

// --- GUARDIA 1: SOLO UTENTI LOGGATI ---
export const RequireAuth = () => {
  // Usiamo lo stato reattivo del Context invece di leggere manualmente dal storage
  const { isAuthenticated, token } = useAuth();

  // Se non c'è il token o non è autenticato, reindirizza al login
  if (!isAuthenticated || !token) {
    return <Navigate to="/login" replace />;
  }

  // Se è loggato, mostra il contenuto della rotta (Outlet)
  return <Outlet />;
};

// --- GUARDIA 2: SOLO TRAINER ---
export const RequireTrainer = () => {
  const { user, role, isAuthenticated } = useAuth();

  // 1. Se non è loggato affatto, torna al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Se è loggato ma non è un trainer, lo spediamo alla sua area clienti
  if (role !== "trainer") {
    return <Navigate to="/client-area" replace />;
  }

  // 3. È un trainer autorizzato? Prego, entri.
  return <Outlet />;
};
</file>

<file path="src/components/SleepingCat.jsx">
// frontend/src/components/SleepingCat.jsx
// CORREZIONE: Imposta il posizionamento in alto a destra (top/right) e mantiene la specchiatura e Z-index.

import React from 'react';

const SleepingCat = () => {
  return (
    // Posizionamento: z-50 per stare sopra a tutto. Usiamo 'right-0' o 'right-4' per agganciarlo a destra.
    <div
      className="absolute z-50 w-full flex justify-end pointer-events-none"
      // Usiamo 'right' per posizionarlo a destra del container. top: -60px lo fa poggiare.
      // Modifiche: Rimuovo 'w-full flex justify-center' e metto 'right-4' e 'justify-end'
      style={{ top: '-97px', right: '0px' }}
    >
      <img
        src="/Sleeping-Kitty.svg"
        alt="Sleeping cat"
        // Aggiungiamo la trasformazione Tailwind per specchiare il gatto (testa a destra)
        // 1. MODIFICA GRANDEZZA: cambiata da w-40 a w-28 (circa il 25% più piccolo)
        className="w-32 max-w-xs transform scale-x-[-1] animate-breathe"
      />

      <style>
        {`
          @keyframes breathe {
            0%, 100% {
              transform: translateY(0) scaleX(-1);
            }
            50% {
              /* 2. MODIFICA MOVIMENTO: cambiato da -5px a -2px (più sottile) */
              transform: translateY(-2px) scaleX(-1);
            }
          }

          .animate-breathe {
            animation: breathe 4s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default SleepingCat;
</file>

<file path="src/components/TransitionGate.jsx">
// MyTrainUp Frontend: Componente Cancello di Transizione e Context di Navigazione

// Questo file (TransitionGate.jsx) implementa un effetto visivo di "cancelli" (split screen) che si chiudono e si aprono per mascherare il caricamento del contenuto tra le rotte dell'applicazione, migliorando l'esperienza utente. Include anche il Context e l'Hook necessari per attivare questa animazione da qualsiasi punto dell'applicazione.

// Funzioni chiave:
// 1. TransitionGate Component:
// - Visualizza due pannelli neri (`bg-slate-900`) che si muovono orizzontalmente.
// - La prop `isClosing` controlla se i pannelli si stanno chiudendo (`w-1/2`) o aprendo (`w-0`).
// - Utilizza `transition-delay` per garantire che l'apertura sia ritardata.
// - Al centro, quando i cancelli sono chiusi, mostra il logo e il titolo "MyTrainUp" con un'animazione di opacità.
// 2. NavigationContext / useAnimatedNavigation:
// - Definisce un Context per distribuire lo stato di transizione e la funzione di navigazione
// - a tutti i componenti discendenti.
// 3. NavigationProvider:
// - Funzione wrapper che incapsula la logica di timing.
// - navigateWithTransition(to): La funzione centrale che gestisce l'animazione:
//   a. Imposta `isTransitioning` a true (chiude i cancelli).
//   b. Dopo 1500ms (durata chiusura + sosta), esegue la navigazione (`Maps(to)`).
//   c. Subito dopo la navigazione, reimposta `isTransitioning` a false (apre i cancelli).
// - Questo meccanismo assicura che il cambio di contenuto (che è sincrono) avvenga sempre
// - mentre i cancelli sono chiusi (ovvero `isTransitioning` è true), nascondendo lo scatto.

// frontend/src/components/TransitionGate.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Classi responsive per testo e logo
const LOGO_CLASSES = "w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain";
const TEXT_CLASSES = "text-4xl sm:text-5xl md:text-6xl font-extrabold";

/**
 * Componente che visualizza l'animazione dei "cancelli" che si chiudono o si aprono.
 * @param {boolean} isClosing - Se true, i cancelli si chiudono; se false, si aprono o rimangono aperti.
 */
export default function TransitionGate({ isClosing = false }) {

  return (
    // CONTENITORE PRINCIPALE: 
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 
                     ${isClosing ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Pannello SINISTRO */}
      <div 
        className={`absolute inset-y-0 left-0 
                   bg-slate-900 
                   transform transition-all duration-1000 ease-in-out
                   ${isClosing ? 'w-1/2' : 'w-0'}`} // Chiuso -> w-1/2; Aperto -> w-0
        style={{ transitionDelay: isClosing ? '0ms' : '500ms' }} // Ritardo nell'apertura
      >
        {/* ❌ CONTENUTO RIMOSSO: Lasciamo il pannello vuoto */}
      </div>
      
      {/* Pannello DESTRO */}
      <div 
        className={`absolute inset-y-0 right-0 
                   bg-slate-900 
                   transform transition-all duration-1000 ease-in-out
                   ${isClosing ? 'w-1/2' : 'w-0'}`} // Chiuso -> w-1/2; Aperto -> w-0
        style={{ transitionDelay: isClosing ? '0ms' : '500ms' }} // Ritardo nell'apertura
      >
        {/* ❌ CONTENUTO RIMOSSO: Lasciamo il pannello vuoto */}
      </div>
      
      {/* TESTO CENTRALE (Visibile solo a cancelli chiusi, ora include il logo) */}
      <div 
        // L'opacità e il ritardo controllano quando il logo e il testo appaiono al centro
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isClosing ? 'opacity-100 delay-500' : 'opacity-0'
        }`}
      >
        <div className="flex items-center space-x-4">
             {/* ⬅️ NUOVO: Logo a sinistra del testo */}
             <img 
                src="/logo1.png" 
                alt="Logo MyTrainUp" 
                className={LOGO_CLASSES}
              />
              {/* ⬅️ Testo centrale */}
             <h1 className={`${TEXT_CLASSES} font-bold text-white whitespace-nowrap`}>MyTrainUp</h1>
        </div>
      </div>

    </div>
  );
}

// --------------------------------------------------------------------------
// Context e Hook per gestire la navigazione animata
// --------------------------------------------------------------------------

const NavigationContext = React.createContext({
    navigateWithTransition: () => {},
    isTransitioning: false,
});

export const useAnimatedNavigation = () => React.useContext(NavigationContext);

export function NavigationProvider({ children }) {
    // useNavigate è qui importato correttamente
    const navigate = useNavigate(); 
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Funzione che attiva la chiusura dei cancelli e poi naviga
    const navigateWithTransition = (to) => {
        if (isTransitioning) return; 
        
        setIsTransitioning(true); // 1. Attiva la chiusura dei cancelli
        
        // Ritardo di 1000ms (durata transizione) + 500ms (sosta) = 1500ms
        setTimeout(() => {
            navigate(to, { replace: true }); // 2. Naviga alla nuova pagina (il contenuto cambia)
            
            // Ritardo aggiuntivo di 100ms per assicurare il mount della nuova pagina
            setTimeout(() => {
                setIsTransitioning(false); // 3. Apre i cancelli, rivelando la nuova pagina
            }, 100); 
        }, 1500); 
    };

    const value = {
        navigateWithTransition,
        isTransitioning,
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}
</file>

<file path="src/components/VersionChecker.jsx">
// ! frontend/src/components/VersionChecker.jsx
import { useEffect, useState } from "react";

export default function VersionChecker() {
  const [currentHtml, setCurrentHtml] = useState(null);

  useEffect(() => {
    // 1. Appena l'app si avvia, memorizziamo il codice esatto di index.html
    fetch("/")
      .then((res) => res.text())
      .then((text) => setCurrentHtml(text))
      .catch(console.error);

    // 2. Funzione che scatta ogni volta che l'utente torna sull'app (Focus)
    const handleFocus = async () => {
      if (!currentHtml) return;

      try {
        // Aggiungiamo un timestamp per essere sicuri al 1000% che il browser non usi una sua cache interna
        const res = await fetch("/?cachebuster=" + Date.now());
        const newHtml = await res.text();

        // Se l'HTML del server è diverso da quello che abbiamo in memoria (es. è stata fatta una nuova build)
        if (newHtml !== currentHtml) {
          console.log(
            "🔄 Nuova versione rilevata! Aggiornamento automatico...",
          );
          // Ricarica la pagina forzatamente dal server
          window.location.reload(true);
        }
      } catch (err) {
        // Ignoriamo gli errori (es. se l'utente è in aereo/offline)
      }
    };

    // Ascoltiamo l'evento "focus" (quando l'utente riapre la scheda o sblocca il telefono)
    window.addEventListener("focus", handleFocus);

    return () => window.removeEventListener("focus", handleFocus);
  }, [currentHtml]);

  return null; // È un componente invisibile, non renderizza nulla!
}
</file>

<file path="src/context/AuthContext.jsx">
import React from "react";

// Estraiamo esplicitamente le funzioni da React per evitare ReferenceError
const { createContext, useContext, useState, useEffect } = React;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("fit_user");
    try {
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return sessionStorage.getItem("fit_token") || null;
  });

  const login = (userData) => {
    const userToken = userData.token;
    sessionStorage.setItem("fit_token", userToken);
    sessionStorage.setItem("fit_user", JSON.stringify(userData));
    setToken(userToken);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem("fit_token");
    sessionStorage.removeItem("fit_user");
    setToken(null);
    setUser(null);
  };

  // Sincronizzazione stato se cambiano i dati
  useEffect(() => {
    if (user && !token && user.token) {
      setToken(user.token);
    }
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token && !!user,
        role: user?.role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve essere usato all'interno di un AuthProvider");
  }
  return context;
};
</file>

<file path="src/hooks/useFolders.js">
/**
 * TITOLO: useFolders Hook
 * DESCRIZIONE: Hook personalizzato per la gestione delle cartelle dei clienti.
 * RESPONSABILITÀ: Centralizzare fetching, creazione e cancellazione delle cartelle.
 */

import { useState, useCallback } from "react";
import {
  fetchFolders as apiFetchFolders,
  createFolder as apiCreateFolder,
  deleteFolder as apiDeleteFolder,
} from "../api/folders";

export function useFolders(clientId) {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadFolders = useCallback(
    async (autoSelectId = null) => {
      if (!clientId) return;
      setLoading(true);
      try {
        const data = await apiFetchFolders(clientId);
        setFolders(data);
        return data;
      } catch (err) {
        setError("Errore nel caricamento delle cartelle");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [clientId]
  );

  const addFolder = async (name) => {
    if (!name || !clientId) return null;
    try {
      const newFolder = await apiCreateFolder(clientId, name);
      await loadFolders();
      return newFolder;
    } catch (err) {
      setError("Errore nella creazione della cartella");
      return null;
    }
  };

  const removeFolder = async (folderId) => {
    if (!folderId) return false;
    if (
      !window.confirm(
        "Sei sicuro di voler eliminare questa cartella? Tutte le schede al suo interno verranno eliminate."
      )
    )
      return false;

    try {
      await apiDeleteFolder(folderId);
      await loadFolders();
      return true;
    } catch (err) {
      setError("Errore nell'eliminazione della cartella");
      return false;
    }
  };

  return {
    folders,
    loading,
    error,
    loadFolders,
    addFolder,
    removeFolder,
  };
}
</file>

<file path="src/hooks/useGamification.js">
/**
 * TITOLO: useGamification Hook
 * DESCRIZIONE: Gestisce lo stato della gamification (XP, Livelli, Quest e Loot).
 * RESPONSABILITÀ: Centralizzare l'aggiornamento dei progressi e il riscatto dei premi.
 */

import { useState } from "react";
import { claimWeeklyLoot as apiClaimWeeklyLoot } from "../api/gamification";

export function useGamification(token) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [chestProgress, setChestProgress] = useState(0);

  /**
   * Aggiorna i valori dello stato locale.
   * Viene chiamato sia internamente che esternamente (es. da DailyQuests).
   */
  const updateGamification = (newXp, newLevel, newChestProgress) => {
    if (newXp !== undefined) setXp(newXp);
    if (newLevel !== undefined) setLevel(newLevel);
    if (newChestProgress !== undefined) setChestProgress(newChestProgress);
  };

  /**
   * Gestisce la chiamata API per riscattare il forziere del weekend.
   */
  const claimLoot = async () => {
    try {
      const result = await apiClaimWeeklyLoot(token);

      if (result && result.new_xp !== undefined) {
        updateGamification(
          result.new_xp,
          result.new_level,
          result.weekly_progress
        );

        if (result.leveled_up) {
          alert("🔥 CLAMOROSO! SEI SALITA DI LIVELLO COL BOTTINO!");
        }
        return result;
      }
    } catch (error) {
      console.error("Errore nel riscatto del bottino:", error);
      alert("Impossibile riscattare: " + error.message);
      throw error;
    }
  };

  return {
    xp,
    level,
    chestProgress,
    updateGamification,
    claimLoot,
  };
}
</file>

<file path="src/hooks/useWorkoutStore.js">
/**
 * TITOLO: Workout Global Store (Final Stable Version)
 * DESCRIZIONE: Gestione centralizzata di workout, log e settimane attive.
 * FIX: Aggiunto filtro rigido lato client per folder_id.
 */

import { create } from "zustand";
import { fetchFolders as apiFetchFolders } from "../api/folders";
import { fetchWorkoutsByFolder } from "../api/workouts";
import {
  saveLog,
  deleteLog,
  fetchWorkoutLogs,
  saveCompletion,
  fetchCompletions,
} from "../api/logs";
import { calculateSmartWeek, getLogOrGhost } from "../utils/logUtils";

const useWorkoutStore = create((set, get) => ({
  // --- STATE ---
  folders: [],
  selectedFolder: null,
  workouts: [],
  logs: {},
  completions: {},
  activeWeeks: {},
  loading: false,

  // --- ACTIONS ---

  // Gestisce lo stato delle settimane selezionate dal cliente
  setActiveWeeks: (newWeeks) => set({ activeWeeks: newWeeks }),

  loadFolders: async (clientId) => {
    if (!clientId) return;
    try {
      const data = await apiFetchFolders(clientId, "client");
      set({ folders: data });
      if (data?.length > 0) set({ selectedFolder: data[0].id });
      return data;
    } catch (error) {
      console.error("Errore folders store:", error);
    }
  },

  setSelectedFolder: (folderId) => set({ selectedFolder: folderId }),

  loadWorkouts: async (folderId, token) => {
    if (!folderId) return;
    set({ loading: true });
    try {
      const data = await fetchWorkoutsByFolder(folderId, "client");

      // FIX PROBLEMA 1: Filtro rigido lato client.
      // Assicura che vengano mostrate SOLO le schede appartenenti alla cartella selezionata,
      // anche se il backend restituisce una lista più ampia.
      const filteredData = data.filter(
        (w) => Number(w.folder_id) === Number(folderId)
      );

      set({ workouts: filteredData });

      for (const w of filteredData) {
        const [workoutLogs, comps] = await Promise.all([
          fetchWorkoutLogs(w.id),
          fetchCompletions(w.id, token),
        ]);

        const compMap = {};
        comps.forEach((c) => (compMap[c.week_number] = c.duration));

        set((state) => ({
          logs: { ...state.logs, [w.id]: workoutLogs },
          completions: { ...state.completions, [w.id]: compMap },
          activeWeeks: {
            ...state.activeWeeks,
            [w.id]: calculateSmartWeek(w, workoutLogs),
          },
        }));
      }
    } catch (error) {
      console.error("Errore loadWorkouts store:", error);
    } finally {
      set({ loading: false });
    }
  },

  updateLog: async (
    workoutId,
    exerciseId,
    setIdx,
    field,
    value,
    token,
    clientId
  ) => {
    const { activeWeeks, logs } = get();
    const week = activeWeeks[workoutId] || 1;
    const currentLogs = logs[workoutId] || [];

    const existingLog = currentLogs.find(
      (l) =>
        l.exercise_id == exerciseId &&
        l.week_number == week &&
        l.set_index == setIdx
    );

    try {
      if (field === "manual_complete") {
        if (value && existingLog?.id) {
          await deleteLog(existingLog.id, token);
        } else {
          const payload = {
            exercise_id: exerciseId,
            week_number: parseInt(week),
            set_index: parseInt(setIdx),
            reps: existingLog?.reps_done || "",
            kg: existingLog?.kg_done || "",
            notes: existingLog?.notes || "",
            is_completed: 1,
          };
          await saveLog(payload, token, clientId);
        }
      } else {
        const payload = {
          exercise_id: exerciseId,
          week_number: parseInt(week),
          set_index: parseInt(setIdx),
          reps: field === "reps" ? value : existingLog?.reps_done || "",
          kg: field === "kg" ? value : existingLog?.kg_done || "",
          notes: field === "notes" ? value : existingLog?.notes || "",
          is_completed: existingLog?.is_completed || 0,
        };
        await saveLog(payload, token, clientId);
      }

      const updated = await fetchWorkoutLogs(workoutId);
      set((state) => ({ logs: { ...state.logs, [workoutId]: updated } }));
    } catch (error) {
      console.error("Errore updateLog store:", error);
    }
  },

  finishWorkout: async (workoutId, durationString, token, clientId) => {
    const { activeWeeks, workouts, logs } = get();
    const currentWeek = activeWeeks[workoutId] || 1;
    const workout = workouts.find((w) => w.id === workoutId);
    if (!workout) return;

    try {
      await saveCompletion(workoutId, currentWeek, durationString, token);
      const currentLogs = logs[workoutId] || [];
      const savePromises = [];

      workout.exercises.forEach((ex) => {
        const setsCount = ex.config?.length || 0;
        for (let i = 0; i < setsCount; i++) {
          const log = currentLogs.find(
            (l) =>
              l.exercise_id == ex.id &&
              l.week_number == currentWeek &&
              l.set_index == i
          );

          if (!log || log.is_completed === 0) {
            const autoReps =
              log?.reps_done ||
              getLogOrGhost(currentLogs, ex.id, currentWeek, i, "reps") ||
              ex.config[i].reps;
            const autoKg =
              log?.kg_done ||
              getLogOrGhost(currentLogs, ex.id, currentWeek, i, "kg") ||
              ex.config[i].kg;

            const payload = {
              exercise_id: ex.id,
              week_number: parseInt(currentWeek),
              set_index: i,
              reps: autoReps,
              kg: autoKg,
              notes: log?.notes || "Autocompletato",
              is_completed: 1,
            };
            savePromises.push(saveLog(payload, token, clientId));
          }
        }
      });

      if (savePromises.length > 0) await Promise.all(savePromises);
      const updatedLogs = await fetchWorkoutLogs(workoutId);

      set((state) => ({
        logs: { ...state.logs, [workoutId]: updatedLogs },
        completions: {
          ...state.completions,
          [workoutId]: {
            ...(state.completions[workoutId] || {}),
            [currentWeek]: durationString,
          },
        },
        activeWeeks: {
          ...state.activeWeeks,
          [workoutId]: calculateSmartWeek(workout, updatedLogs),
        },
      }));

      alert("🏁 Sessione terminata con successo!");
      return true;
    } catch (error) {
      console.error("Errore finishWorkout store:", error);
      return false;
    }
  },
}));

export default useWorkoutStore;
</file>

<file path="src/pages/ClientSchedulerPage.jsx">
/**
 * TITOLO: Client Scheduler Page
 * DESCRIZIONE: Pagina del calendario/programmazione per l'utente.
 * RESPONSABILITÀ: Visualizzare il calendario degli allenamenti.
 */

import React from "react";
import { Navigate } from "react-router-dom";
import ClientScheduler from "../components/ClientArea/ClientScheduler";

export default function ClientSchedulerPage() {
  const user = JSON.parse(sessionStorage.getItem("fit_user"));

  if (!user) return <Navigate to="/login" replace />;

  const clientToShow = { id: user.id, name: user.name };

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="w-full max-w-3xl mx-auto animate-in fade-in duration-500">
        <ClientScheduler client={clientToShow} />
      </div>
    </main>
  );
}
</file>

<file path="src/pages/PersonalAreaPage.jsx">
import React from "react";
import { Navigate } from "react-router-dom";
import ClientArea from "../components/ClientArea/ClientArea";
import { useAuth } from "../context/AuthContext";

export default function PersonalAreaPage() {
  const { user, isAuthenticated } = useAuth();

  // 1. Se non è autenticato, torna al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Se l'utente è in fase di caricamento (sicurezza extra)
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 w-full">
      <div className="bg-slate-800/50 border-l-4 border-slate-500 text-slate-300 p-4 mb-6 rounded-r shadow-sm border-y border-r border-slate-700 max-w-2xl mx-auto">
        <p className="font-bold text-sm text-white">👤 Area Personale</p>
        <p className="text-xs opacity-70">
          {/* L'uso di user?.name impedisce il crash se user è temporaneamente null */}
          Benvenuto {user?.name || "Atleta"}, queste sono le tue schede.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <ClientArea />
      </div>
    </main>
  );
}
</file>

<file path="src/pages/TrainerPage.jsx">
/**
 * TITOLO: Trainer Page (Zustand & Context Refactored)
 * DESCRIZIONE: Punto di ingresso principale per il trainer.
 * MODIFICHE: Utilizzo di useAuth per eliminare i conflitti di sessione e i reindirizzamenti errati.
 */

import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Users } from "lucide-react";

// Context & Store
import { useAuth } from "../context/AuthContext";

// Macro Moduli
import TrainerDashboard from "../components/TrainerDashboard/TrainerDashboard";
import TrainerSidebar from "../components/TrainerDashboard/TrainerSidebar";
import PaymentManager from "../components/TrainerDashboard/Payments/PaymentManager";

export default function TrainerPage({ selectedClient, onSelectClient }) {
  // 1. RECUPERO DATI DAL CONTEXT (Invece di sessionStorage)
  const { user, role, isAuthenticated } = useAuth();
  const location = useLocation();

  // Stati Locali della Pagina
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPaymentMode, setIsPaymentMode] = useState(false);

  // 2. EFFETTO: Sincronizzazione con notifiche/link esterni
  useEffect(() => {
    const targetId = location.state?.targetClientId;
    if (targetId && selectedClient?.id !== targetId) {
      onSelectClient({ id: targetId, name: "Cliente Selezionato" });
      setIsPaymentMode(false);
    }
  }, [location.state, selectedClient, onSelectClient]);

  // 3. GUARDIA DI SICUREZZA (Utilizza lo stato reattivo del Context)
  if (!isAuthenticated || role !== "trainer") {
    // Se l'autenticazione non è ancora pronta, aspettiamo un istante invece di reindirizzare
    if (!user && sessionStorage.getItem("fit_user")) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      );
    }
    return <Navigate to="/login" replace />;
  }

  // Handlers
  const handleSelectClient = (client) => {
    setIsPaymentMode(false);
    onSelectClient(client);
  };

  const handleOpenPayments = () => {
    setIsPaymentMode(true);
  };

  return (
    <main className="max-w-7xl mx-auto p-2 sm:p-4 mt-4 sm:mt-6 mb-12 flex flex-col md:flex-row gap-4 md:gap-6 w-full">
      {/* 1. SIDEBAR */}
      <TrainerSidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isPaymentMode={isPaymentMode}
        onOpenPayments={handleOpenPayments}
        selectedClient={selectedClient}
        onSelectClient={handleSelectClient}
      />

      {/* 2. AREA CONTENUTO DINAMICO */}
      <div className="flex-1 transition-all duration-300">
        {isPaymentMode ? (
          <PaymentManager
            trainerId={user.id}
            onClose={() => setIsPaymentMode(false)}
          />
        ) : selectedClient ? (
          /* DASHBOARD CLIENTE: Passiamo user.id dal context */
          <TrainerDashboard client={selectedClient} trainerId={user.id} />
        ) : (
          /* STATO EMPTY */
          <div className="text-slate-400 p-10 text-center bg-slate-800 rounded-xl border border-slate-700 shadow-sm flex flex-col items-center justify-center h-64 select-none animate-in fade-in duration-500">
            <Users size={48} className="mb-4 opacity-20" />
            <p className="font-bold text-lg text-slate-400">
              Nessun profilo selezionato.
            </p>
            <p className="text-sm">
              Seleziona un cliente dalla lista o apri la Gestione Pagamenti.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
</file>

<file path="src/utils/circuitMapper.js">
/**
 * TITOLO: Circuit Mapper (JSON Enterprise Edition)
 * DESCRIZIONE: Gestisce la trasformazione dei circuiti tra UI e Database.
 * MODIFICHE: Gestione nativa JSON e sincronizzazione note trainer/cliente.
 */

import { splitMainString } from "./exerciseParser";

/**
 * Trasforma un esercizio dal DB al formato semplificato del Circuit Builder.
 */
export const mapCircuitExerciseToUI = (ex) => {
  if (!ex) return null;

  // Valori di default
  let baseData = {
    reps: "10",
    kg: "",
    rest: "0",
    type: "reps",
  };

  // 1. PRIORITÀ: Dati JSON (config)
  if (ex.config && Array.isArray(ex.config) && ex.config.length > 0) {
    const firstSet = ex.config[0];
    baseData = {
      reps: firstSet.reps || "0",
      kg: firstSet.kg || "",
      rest: firstSet.rest || "0",
      type: firstSet.type || "reps",
    };
  }
  // 2. FALLBACK: Vecchi dati stringa (Retrocompatibilità)
  else if (ex.sets_reps) {
    const getFirst = (str) => splitMainString(str)[0] || "";
    baseData = {
      reps: getFirst(ex.sets_reps),
      kg: getFirst(ex.kg_target),
      rest: getFirst(ex.recovery),
      type: ex.exercise_type === "timer" ? "timer" : "reps",
    };
  }

  const mode =
    baseData.type === "timer" || baseData.type === "time" ? "timer" : "reps";

  return {
    id: ex.id,
    tempId: ex.id || `temp-${Date.now()}-${Math.random()}`,
    name: ex.name,
    mode: mode,
    // Distribuiamo i dati sui campi specifici della UI del Builder
    reps: mode === "reps" ? baseData.reps : "10",
    workTime: mode === "timer" ? baseData.reps : "40",
    rest: mode === "reps" ? baseData.rest : "0",
    restTime: mode === "timer" ? baseData.rest : "20",
    kg: baseData.kg === "-" ? "" : baseData.kg,
    trainer_notes: ex.trainer_notes || "",
    client_notes: ex.client_notes || "",
    // Manteniamo note come alias se usato in componenti UI legacy
    notes: ex.trainer_notes || "",
  };
};

/**
 * Trasforma l'esercizio UI nel formato DB (JSON).
 * Crea una configurazione identica per ogni round del circuito.
 */
export const mapUIToCircuitExercise = (ex, numRounds, index) => {
  const isReps = ex.mode === "reps";
  const valReps = isReps ? ex.reps || "0" : ex.workTime || "30";
  const valRest = isReps ? ex.rest || "0" : ex.restTime || "10";

  // CREAZIONE ARRAY JSON: Generiamo un set per ogni round
  // Questo permette in futuro di cambiare i chili o le reps round per round
  const config = Array.from({ length: numRounds }).map(() => ({
    reps: valReps,
    kg: ex.kg || "0",
    rest: valRest,
    type: ex.mode, // 'reps' o 'timer'
  }));

  return {
    name: ex.name,
    exercise_type: "circuit",
    exercise_order: index,
    trainer_notes: ex.trainer_notes || ex.notes || "",
    client_notes: ex.client_notes || "",
    config: config,
  };
};
</file>

<file path="src/utils/exerciseMapper.js">
// ! frontend/src/utils/exerciseMapper.js
/**
 * TITOLO: Exercise Mapper (Source of Truth - JSON Enterprise)
 * DESCRIZIONE: Gestisce la trasformazione dei dati tra Database e UI.
 * MODIFICHE: Integrazione supporto nativo per link YouTube.
 */
import { splitMainString } from "./exerciseParser";

/**
 * Normalizza un esercizio dal DB alla UI.
 * Garantisce che esista sempre un array 'config' con oggetti strutturati.
 */
export const mapExerciseToUI = (ex) => {
  if (!ex) return null;

  let finalSets = [];

  // 1. PRIORITÀ: Formato JSON (Dati già pronti dal Backend)
  if (ex.config && Array.isArray(ex.config)) {
    finalSets = ex.config.map((s) => ({
      reps: s.reps || "",
      kg: s.kg || "",
      rest: s.rest || "",
      // Recuperiamo la nota tecnica (trainer_notes) o quella di set (note)
      notes: s.notes || s.trainer_notes || "",
      note: s.note || "", // Nota specifica del set
      type: s.type || "normal",
      // Campi specifici per modalità timer nei circuiti
      mode: s.mode || "reps",
      workTime: s.workTime || "",
      restTime: s.restTime || "",
      name: s.name || "", // Nome dell'esercizio dentro il circuito
    }));
  }
  // 2. FALLBACK: Formato Stringa (Legacy)
  else if (ex.sets_reps) {
    const reps = splitMainString(ex.sets_reps || "");
    const kgs = splitMainString(ex.kg_target || "");
    const rests = splitMainString(ex.recovery || "");
    const types = splitMainString(ex.set_types || "");

    const max = Math.max(reps.length, kgs.length, 1);
    finalSets = Array.from({ length: max }).map((_, i) => ({
      reps: reps[i] || "",
      kg: kgs[i] || "",
      rest: rests[i] || "",
      note: "",
      notes: "",
      type: types[i] || "normal",
    }));
  }

  // Costruiamo l'oggetto normalizzato per i componenti React
  return {
    ...ex, // Mantieni eventuali altri campi (id, tempId, etc.)
    id: ex.id,
    name: ex.name,
    second_name: ex.second_name || "",
    exercise_type: ex.exercise_type || "normal",
    exercise_order: ex.exercise_order || 0,
    config: finalSets,
    sets: finalSets, // Alias per compatibilità

    // Note globali (per esercizi standard)
    trainer_notes: ex.trainer_notes || "",
    client_notes: ex.client_notes || "",
    // Campo 'notes' usato dalla UI come standard unico
    notes: ex.trainer_notes || "",

    // Integrazione Link YouTube (a livello di intero esercizio)
    youtube_link: ex.youtube_link || "",
  };
};

/**
 * Organizza i dati del workout per la visualizzazione.
 */
export const prepareWorkoutData = (workout) => {
  if (!workout) return null;

  const mappedExercises = workout.exercises.map(mapExerciseToUI);

  if (workout.workout_type === "circuit") {
    return {
      ...workout,
      isCircuit: true,
      rounds: parseInt(workout.circuit_rounds) || 1,
      restBetweenRounds: workout.circuit_rest || "0",
      exercises: mappedExercises,
    };
  }

  return {
    ...workout,
    isCircuit: false,
    exercises: mappedExercises,
  };
};

/**
 * Trasforma l'esercizio dallo stato della UI nel formato richiesto dal Backend.
 */
export const mapUIToExercise = (uiEx, orderIndex) => {
  return {
    name: uiEx.name,
    second_name: uiEx.second_name || "",
    exercise_type: uiEx.exercise_type || "normal",
    exercise_order: orderIndex,

    // Integrazione Link YouTube per il salvataggio nel DB
    youtube_link: uiEx.youtube_link || "",

    // Includiamo 'notes' nella configurazione JSON dei set/esercizi circuiti
    config: uiEx.sets.map((s) => ({
      name: s.name || "",
      reps: s.reps,
      kg: s.kg,
      rest: s.rest,
      type: s.type || "normal",
      mode: s.mode || "reps",
      workTime: s.workTime || "",
      restTime: s.restTime || "",
      note: s.note || "", // Nota di set
      notes: s.notes || "", // NOTA TECNICA
    })),
    trainer_notes: uiEx.trainer_notes || uiEx.notes || "",
    client_notes: uiEx.client_notes || "",
  };
};
</file>

<file path="src/utils/exerciseParser.js">
/**
 * TITOLO: Exercise Parser Utility (DEFINITIVO)
 * DESCRIZIONE: Unico punto di accesso per la trasformazione dei dati serializzati.
 */

const MAIN_DELIMITER = " / ";
const SUB_DELIMITER = "+";

/**
 * Parsing dei set (es. "10 / 12 / 8")
 */
export const splitMainString = (str) => {
  if (!str) return [];
  const s = String(str).trim();
  if (s === "" || s === "-") return [];
  return s.split(MAIN_DELIMITER).map((item) => item.trim());
};

export const joinMainArray = (arr) => {
  if (!arr || !Array.isArray(arr)) return "";
  return arr
    .map((val) => {
      const trimmed = String(val ?? "").trim();
      return trimmed === "" || trimmed === "-" ? "-" : trimmed;
    })
    .join(MAIN_DELIMITER);
};

/**
 * Parsing delle scomposizioni interne (es. "10+5")
 */
export const splitSubString = (str) => {
  if (!str) return [""];
  const s = String(str).trim();
  if (s === "" || s === "-") return ["-"];
  return s.split(SUB_DELIMITER).map((item) => item.trim());
};

/**
 * Unisce valori in formato split (es. ["10", "5"] -> "10+5")
 */
export const joinSubArray = (arr) => {
  if (!arr || !Array.isArray(arr)) return "";
  return arr
    .map((val) => {
      const trimmed = String(val ?? "").trim();
      return trimmed === "" ? "-" : trimmed;
    })
    .join(SUB_DELIMITER);
};

/**
 * API STABILE: Aggiorna un valore specifico all'interno di una stringa split
 * Sostituisce la logica manuale precedentemente presente in ClientArea.jsx
 */
export const updateSplitValueInString = (currentVal, newValue, subIdx) => {
  const parts = splitSubString(currentVal);
  // Assicura che l'array sia lungo abbastanza
  while (parts.length <= subIdx) parts.push("");
  parts[subIdx] = newValue;
  return joinSubArray(parts);
};
</file>

<file path="src/utils/logUtils.js">
/**
 * TITOLO: Log Utilities (Master Automation v2)
 * DESCRIZIONE: Gestisce la logica di spunta basata su flag is_completed e Score Forwarding.
 * RESPONSABILITÀ: Definire lo stato del set e la propagazione dei carichi.
 */

import { splitSubString, updateSplitValueInString, splitMainString } from "./exerciseParser";

/**
 * Trova una specifica voce di log in un array.
 */
export const getLogEntry = (logs, exerciseId, week, setIdx) => {
  if (!logs || !Array.isArray(logs)) return {};
  return logs.find(
    (l) =>
      Number(l.exercise_id) === Number(exerciseId) &&
      Number(l.week_number) === Number(week) &&
      Number(l.set_index) === Number(setIdx)
  ) || {};
};

/**
 * SEMANTICA: Verifica se un set è completato.
 * FIX: Ora controlla ESCLUSIVAMENTE la flag is_completed. 
 * Scrivere nelle caselle non colorerà più l'esercizio di verde.
 */
export const isSetCompleted = (log) => {
  if (!log) return false;
  // Un set è verde solo se la flag is_completed è 1 (da manual toggle o fine timer)
  return log.is_completed === 1;
};

/**
 * SEMANTICA: Ritorna lo stato visuale (completed/pending)
 */
export const getSetCompletionState = (log) => {
  return isSetCompleted(log) ? 'completed' : 'pending';
};

/**
 * LOGICA DI AGGIORNAMENTO: Merge di valori split (es. reps in superset)
 */
export const mergeSplitValue = (currentLog, field, newValue, subIdx) => {
  const currentVal = (field === "reps" ? currentLog?.reps_done : currentLog?.kg_done) || "";
  return updateSplitValueInString(currentVal, newValue, subIdx);
};

/**
 * LOGICA GHOST (SCORE FORWARDING): Cerca a ritroso il valore più recente.
 */
export const getLogOrGhost = (logs, exerciseId, week, setIdx, field) => {
  for (let w = week; w >= 1; w--) {
    const entry = getLogEntry(logs, exerciseId, w, setIdx);
    const val = field === "reps" ? entry.reps_done : entry.kg_done;
    if (val !== undefined && val !== null && val !== "" && val !== "-") return val;
  }
  return "";
};

/**
 * SMART WEEK (AUTO-JUMP): Calcola la settimana suggerita.
 * FIX: Conta solo i set che hanno is_completed === 1.
 */
export const calculateSmartWeek = (workout, workoutLogs) => {
  if (!workoutLogs || workoutLogs.length === 0) return 1;
  const duration = parseInt(workout.duration_weeks) || 1;

  let totalSetsConfigured = 0;
  workout.exercises?.forEach((ex) => {
    const parts = splitMainString(ex.sets_reps);
    totalSetsConfigured += parts.length || 1;
  });

  if (totalSetsConfigured === 0) return 1;

  for (let w = 1; w <= duration; w++) {
    const logsForWeek = workoutLogs.filter((l) => Number(l.week_number) === w);
    
    // Contiamo quanti set sono stati effettivamente spuntati (verdi)
    const completedSets = logsForWeek.filter(l => l.is_completed === 1).length;

    // Se mancano spunte verdi rispetto ai set configurati, l'utente resta in questa settimana
    if (completedSets < totalSetsConfigured) return w;
    
    if (w === duration) return duration;
  }
  return 1;
};

/**
 * PREV TARGET: Recupera lo score più recente nel passato.
 * Permette al valore della Settimana 1 di diventare il target per la 2.
 */
export const getPrevTarget = (logs, exerciseId, week, setIdx, field, defaultTarget) => {
  let latestVal = null;
  for (let w = week - 1; w >= 1; w--) {
    const entry = getLogEntry(logs, exerciseId, w, setIdx);
    const val = field === "reps" ? entry.reps_done : entry.kg_done;
    if (val !== undefined && val !== null && val !== "" && val !== "-") {
      latestVal = val;
      break; 
    }
  }
  return latestVal !== null ? latestVal : defaultTarget;
};

/**
 * SPLIT LOG VAL: Estrae un valore specifico da una stringa splittata.
 */
export const getSplitLogVal = (logs, exerciseId, week, setIdx, field, subIndex) => {
  const val = getLogOrGhost(logs, exerciseId, week, setIdx, field);
  if (val === "") return "";
  return splitSubString(val)[subIndex] || "";
};

/**
 * SPLIT PREV TARGET: Recupera il target splittato della settimana precedente.
 */
export const getSplitPrevTarget = (logs, exerciseId, week, setIdx, field, subIndex, defaultTarget) => {
  let latestVal = null;
  for (let w = week - 1; w >= 1; w--) {
    const entry = getLogEntry(logs, exerciseId, w, setIdx);
    const fullVal = (field === "reps" ? entry.reps_done : entry.kg_done) || "";
    const parts = splitSubString(fullVal);
    if (parts[subIndex] && parts[subIndex] !== "" && parts[subIndex] !== "-") {
      latestVal = parts[subIndex];
      break;
    }
  }
  return latestVal !== null ? latestVal : defaultTarget;
};
</file>

<file path="src/App.jsx">
// ! frontend/src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// Layout & Provider
import Navbar from "./components/Navbar";
import { RequireAuth } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext"; // <-- AGGIUNTO
import TransitionGate, {
  NavigationProvider,
  useAnimatedNavigation,
} from "./components/TransitionGate";

// Pagine
import LoginForm from "./components/LoginForm";
import TrainerPage from "./pages/TrainerPage";
import PersonalAreaPage from "./pages/PersonalAreaPage";
import ClientSchedulerPage from "./pages/ClientSchedulerPage";

import VersionChecker from "./components/VersionChecker";

function LoginLayout() {
  return (
    <div className="flex items-center justify-center flex-grow">
      <Outlet />
    </div>
  );
}

function RootLayout() {
  // Ora possiamo usare i dati in modo pulito (ma manteniamo il tuo stile per ora)
  const user = JSON.parse(sessionStorage.getItem("fit_user"));
  const { isTransitioning } = useAnimatedNavigation();

  return (
    <div
      className="relative z-0 min-h-screen font-sans text-slate-100"
      style={{
        backgroundImage: "url('/foto_sfondo_pesi.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#0f172a",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/80 fixed"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {user && !isTransitioning && <Navbar user={user} />}
        <Outlet />
      </div>
      <TransitionGate isClosing={isTransitioning} />
    </div>
  );
}

export default function App() {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <AuthProvider>
      {" "}
      {/* <-- AVVOLGE TUTTO */}
      <BrowserRouter>
        <VersionChecker />
        <NavigationProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route element={<LoginLayout />}>
                <Route path="/login" element={<LoginForm />} />
              </Route>
              <Route element={<RequireAuth />}>
                <Route path="/client-area" element={<PersonalAreaPage />} />
                <Route
                  path="/client-scheduler"
                  element={<ClientSchedulerPage />}
                />
                <Route
                  path="/trainer-dashboard"
                  element={
                    <TrainerPage
                      selectedClient={selectedClient}
                      onSelectClient={setSelectedClient}
                    />
                  }
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
              </Route>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
</file>

<file path="src/index.css">
/* MyTrainUp Frontend: Fogli di Stile Principali (Tailwind CSS) */

/* Questo file (index.css) è il foglio di stile principale che importa le direttive base
- di Tailwind CSS, costituendo il punto di iniezione di tutti gli stili del progetto. */

/* Funzioni chiave:
- @tailwind base: Inietta gli stili di base (reset CSS, preflight) forniti da Tailwind.
- @tailwind components: Inietta gli stili per i componenti di utilità predefiniti e custom (se usati).
- @tailwind utilities: Inietta tutte le classi di utilità di Tailwind (es. `flex`, `p-4`, `bg-red-500`)
- che vengono poi compilate e ottimizzate dal processo di build. */

/* Questo approccio garantisce che solo il CSS necessario venga incluso nel bundle finale. */

@tailwind base;
@tailwind components;
@tailwind utilities;
</file>

<file path="src/main.jsx">
// MyTrainUp Frontend: Punto di Ingresso Principale (Root) di React

// Questo file (main.jsx) è il punto di partenza dell'applicazione React e stabilisce la struttura di rendering principale.

// Funzioni chiave:
// 1. Importazione: Importa i componenti base di React (StrictMode) e il componente principale <App />.
// 2. createRoot: Utilizza l'API moderna di React 18 per creare la radice dell'applicazione (root) all'interno
// - dell'elemento HTML con ID 'root' (definito in index.html).
// 3. render: Esegue il rendering del componente principale <App /> all'interno del <StrictMode>.
// - StrictMode è un tool di sviluppo che aiuta a identificare potenziali problemi nell'applicazione
// - (come pratiche deprecate o effetti collaterali indesiderati) ma non ha impatto sulla produzione.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
</file>

<file path="eslint.config.js">
// Qui configuri ESLint in modalità “flat config”, il nuovo formato introdotto da ESLint 8+, usando plugin per React, React Hooks e Vite Refresh.


// Importa le configurazioni base di ESLint per JavaScript
import js from '@eslint/js'

// Importa una raccolta di variabili globali predefinite (come window, document)
import globals from 'globals'

// Plugin ufficiale per applicare le regole corrette dei React Hooks
import reactHooks from 'eslint-plugin-react-hooks'

// Plugin per controllare gli errori relativi al Vite React Refresh
import reactRefresh from 'eslint-plugin-react-refresh'

// Funzioni per definire una configurazione ESLint in formato "flat config"
import { defineConfig, globalIgnores } from 'eslint/config'

// Esporta la configurazione finale di ESLint
export default defineConfig([
  
  // Ignora completamente la cartella dist dai controlli di linting
  globalIgnores(['dist']),

  {
    // Applica queste regole a tutti i file js e jsx del progetto
    files: ['**/*.{js,jsx}'],

    // Importa configurazioni preimpostate
    extends: [
      js.configs.recommended,                 // Regole base consigliate da ESLint
      reactHooks.configs.flat.recommended,    // Regole ufficiali dei React Hooks
      reactRefresh.configs.vite,              // Regole per Vite React Fast Refresh
    ],

    // Impostazioni del linguaggio usato
    languageOptions: {
      ecmaVersion: 2020,          // Versione ECMAScript supportata
      globals: globals.browser,   // Abilita variabili globali tipiche del browser

      parserOptions: {
        ecmaVersion: 'latest',    // Supporta la sintassi JS più recente
        ecmaFeatures: { jsx: true }, // Abilita la sintassi JSX
        sourceType: 'module',     // Usa i moduli ES
      },
    },

    // Regole personalizzate ESLint
    rules: {
      // Impedisce variabili inutilizzate, ma ignora quelle scritte in MAIUSCOLO (spesso costanti)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
</file>

<file path="index.html">
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/logo1.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MyTrainUp</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
</file>

<file path="package.json">
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "jspdf": "^4.2.0",
    "jspdf-autotable": "^5.0.7",
    "jwt-decode": "^4.0.0",
    "lucide-react": "^0.554.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.9.6",
    "zustand": "^5.0.9"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.22",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "vite": "^7.2.4"
  }
}
</file>

<file path="postcss.config.js">
// Questo file definisce i plugin che PostCSS deve utilizzare durante la fase di build del CSS.
// In pratica dice al sistema: "Quando compili il CSS, passalo attraverso questi strumenti."
// Serve soprattutto quando usi Tailwind.


export default {
  plugins: {
    tailwindcss: {},     // Attiva il plugin di TailwindCSS, che genera le classi utility
    autoprefixer: {},    // Aggiunge automaticamente i prefissi CSS per compatibilità cross-browser
  },
}
</file>

<file path="tailwind.config.js">
// MyTrainUp Frontend: Configurazione di Tailwind CSS

// Questo file (tailwind.config.js) configura l'utility-first CSS framework Tailwind CSS per il frontend.

// Funzioni chiave:
// 1. content: Specifica i percorsi dei file (HTML, JSX/TSX) in cui Tailwind deve cercare le classi CSS utilizzate.
// - Questo processo (chiamato Purging o Tree-shaking) garantisce che solo il CSS effettivamente utilizzato venga incluso nel bundle di produzione, ottimizzando le dimensioni del file.
// 2. theme: Estende o personalizza il tema di default di Tailwind (attualmente non ci sono estensioni custom).
// 3. safelist: (CRITICO) Definisce un elenco di pattern regex per le classi CSS dinamiche che vengono generate a runtime (es. basate su colori variabili).
// - Questo assicura che Tailwind non rimuova accidentalmente classi che sembrano inutilizzate ma che sono necessarie, in particolare per i colori dinamici delle notifiche e dei timer (orange, emerald, red, blue).
// 4. plugins: Lista dei plugin di Tailwind utilizzati (attualmente vuota).

// Configurazione principale di TailwindCSS.
/** @type {import('tailwindcss').Config} */
export default {
  // 📌 Indica dove Tailwind deve cercare classi CSS per generare lo stylesheet.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },

  // =========================================================
  // ⚠️ NUOVA SEZIONE: SAFELIST PER CLASSI DINAMICHE
  // Vengono forzate le classi per i colori dinamici (orange, emerald, red, blue)
  // usati in RecoveryTimer.jsx
  // =========================================================
  safelist: [
    {
      pattern:
        /(bg|border|text)-(orange|emerald|red|blue)-(400|500|600|900)(\/[0-9]{2})?/,
    },
    {
      pattern: /hover:text-(orange|emerald|red|blue)-(300|400)/,
    },
  ],
  // =========================================================

  plugins: [],
};
</file>

<file path="vite.config.js">
// MyTrainUp Frontend: Configurazione del Builder Vite

// Questo file (vite.config.js) configura l'ambiente di sviluppo e il processo di build per il frontend dell'applicazione, che utilizza React.

// Funzioni chiave:
// 1. defineConfig: Funzione standard di Vite per definire le opzioni di configurazione.
// 2. plugins: Array che include i plugin necessari, in questo caso `@vitejs/plugin-react`,
// - che abilita il supporto a JSX, React Fast Refresh (Hot Module Replacement) e ottimizza
// - il codice React per la produzione.
// - Nota: La configurazione è minimalista e si basa sui default robusti di Vite per la performance.

// Importa la funzione standard per creare la configurazione
import { defineConfig } from 'vite'

// Plugin ufficiale React: abilita JSX, Fast Refresh, ecc.
import react from '@vitejs/plugin-react'

// Configurazione principale di Vite
// Il commento indica dove trovare la documentazione
export default defineConfig({
  // Aggiunge il plugin React alla pipeline di build e sviluppo
  plugins: [react()],
})
</file>

<file path=".gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?


# Environment Variables
.env
.env.development
.env.production
.env.local
</file>

<file path="README.md">
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
</file>

</files>
