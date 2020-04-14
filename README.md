# Little League Logger

An MVP based application for a baseball team.  Keep all team members and their family members up-to-date on upcoming, current, and past games.

## Browser
 The Little League Logger Applicaiton is only currently compatible with Chrome.  Some of functionality may not be accessible in other browsers.

## Technology Used
  * Javascript
  * Node.js
     * Express
     * Express-Sessions
     * bcrypt
  * HTML and CSS with Bootstrap

## App Use
Developed for two users: Coach and Genearl User
  * General User is only able to view game information.
  * Coach is able to view games, plus create new and update game information.

* All users first need to create a log in account using the their g-mail address
  * Coaches will need to enter in a password when creating their coach account.
  * Anyone, family, friend, or player can create an account.
  * Passwords will be uniquely coded and stored as hashed.

* Once logged in, the users can see the interactive calendar with completed, in-progress, and upcoming games.
* Coaches can create or delete games from the calendar page.
* Click on any game to see the stats.
* All users can view the current scores.  
  * If a game is in progress, the user can see updates occur in real-time.
  * The comments ticker can be used to keep track of game highlights and send messages of encouragement to players.

* The coach has an update field to:
  * input runs per inning for each team
  * add an overtime field
    * will appear for general user as long as a score is put into one team's overtime field.
  * reschedule a game due to inclimate weather
  * change the game from in-progress to game over
    * Will display game over on the page along with the game winner.
    * Hides the coach update fields
    * Coach can use Fix Game button to re-access the update fields for a later date