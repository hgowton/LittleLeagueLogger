var db = require("../models");

module.exports = function (app) {
  // Get all examples
<<<<<<< HEAD
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
=======
  app.post("/api/user", function(req, res) {
    console.log("this is req.body" + req.body.name);
    //db.user needs to equal "user" in defining sequelize var
    //if it was "User" then it would be db.User
    db.User.findOne({ where: { name: req.body.name } }).then(function(dbUser) {
      res.json(dbUser);
      // console.log("this is from apiroutes.js " + dbUser);
    });
  });

  app.post("/api/newUser", function(req, res) {
    db.User.create(req.body);
    res.end();
  });

  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
>>>>>>> 729e165d2d913fee38b0358dcf5c8e600d920f08
    });
  });

  app.get("/api/games", function(req, res) {
    db.Game.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

<<<<<<< HEAD
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
=======
  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
>>>>>>> 729e165d2d913fee38b0358dcf5c8e600d920f08
};
