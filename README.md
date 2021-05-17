# wow-comm
see when a member of your in-game wow community was last online



1. Download/clone repository to desired location
2. Run EasyRoster App in game to export your Community's roster
2. Paste the EasyRoster output into 'roster.txt' located into the repo folder
4. Fill in .env with your Blizzard Client ID & Client Secret as well as the path of the repository
5. From command line, run 'node wgemain.js >success.txt 2>errors.txt'
6. From command line, run 'node sortedWithFACTSandLOGIC.js >finalform.txt' (after hitting 'enter' you will also need to hit [1] for alphabetical or [2] for by-date and then press 'enter' again.
8. 'Finalform.txt' should have your formatted roster
