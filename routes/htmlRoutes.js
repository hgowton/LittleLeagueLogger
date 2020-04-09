"";
var path = require("path");

module.exports = function (app) {
  // Load login page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load calendar page
  app.get("/calendar", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });

  // Load game score page
  app.get("/game-score", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/game-score.html"));
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};