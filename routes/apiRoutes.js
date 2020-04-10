var db = require("../models");
var bcrypt = require("bcrypt");
var saltRounds = 10;

module.exports = function (app) {
  //db.user needs to equal "user" in defining sequelize var
  //if it was "User" then it would be db.User

  //login page: storing and comparing email and password,and redirecting to home page after login
  app.post("/api/user", function (req, res) {
    db.User.findOne({
      where: {
        name: req.body.name,
      },
    }).then(function (User) {
      if (!User) {
        res.send(false);
      } else {
        bcrypt.compare(req.body.password, User.password, function (
          err,
          result
        ) {
          if (result) {
            res.send(true);
            // res.redirect("/calendar");
          } else {
            console.log("incorrecct");
            res.send(false);
            // res.redirect("/");
          }
        });
      }
    });
  });
  // console.log("this is from apiroutes.js " + dbUser);
  // });
  // });

  app.post("/api/newUser", function (req, res) {
    // db.User.create(req.body);
    console.log("newUser: " + req.body.name);
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      db.User.create({
        name: req.body.name,
        password: hash,
        coach: req.body.coach,
        team: "Jaguars",
      }).then(function (data) {
        if (data) {
          res.redirect("/");
          // res.end();
        }
      });
    });
    // res.end();
  });

  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/games", function (req, res) {
    db.Game.findAll({}).then(function (data) {
      for (i = 0; i < data.length; i++) {
        console.log(data[i].date);
      }

      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
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
