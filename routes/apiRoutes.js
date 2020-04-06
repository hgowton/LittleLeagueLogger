var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/games", function (req, res) {
    db.game.findAll({}).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  app.get("/api/scores", function (req, res) {
    db.user.findAll({}).then(function (dbScores) {
      res.json(dbScores);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      password: req.body.password,
      coach: req.body.coach,
      team: req.body.team

    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
