var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/user", function(req, res) {
    console.log("this is req.body" + req.body.name);
    //db.user needs to equal "user" in defining sequelize var
    //if it was "User" then it would be db.User
    db.User.findOne({ where: { name: req.body.name } }).then(function(dbUser) {
      res.json(dbUser);
      console.log("this is from apiroutes.js " + dbUser.name);
    });
  });

  app.post("/api/newUser", function(req, res) {
    db.user.create(req.body);
    res.end();
  });

  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
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

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
