var db = require("../models");

//Routes
module.exports = function (app) {
  //GET route for getting all of the scores from all of the game
  app.get("/api/scores", function (req, res) {
    db.Score.findAll({}).then(function (dbScores) {
      res.send(dbScores);
    });
  });

  app.post("/api/scores", function (req, res) {
    //Create a game log
    db.Score.create(req.body).then(function (dbScores) {
      res.json(dbScores);
    });
  });

  //PUT route for updating scores
  app.put("/api/scores", function (req, res) {
    db.Score.update(req.body, {
      where: {
        game_id: req.body.id,
      },
    }).then(function (dbScores) {
      res.json(dbScores);
    });
  });

  app.get("/api/scores/:id", function (req, res) {
    db.Score.findOne({
      where: {
        game_id: req.params.game_id,
      },
    }).then(function (dbScores) {
      res.json(dbScores);
    });
  });

  //Works with updateScore() to allow coach to update score
  app.put("/api/scores/:id", function (req, res) {
    db.Score.update(req.body, {
      where: {
        game_id: req.params.id,
      },
    }).then(function (dbScores) {
      res.end();
    });
  });

  app.delete("/api/scores/:id", function (req, res) {
    db.Score.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbScores) {
      res.json(dbScores);
    });
  });

  app.get("/api/games/:id", function (req, res) {
    db.Game.findOne({
      where: {
        game_id: req.params.id,
      },
    }).then(function (dbGame) {
      res.json(dbGame);
    });
  });

  //updates game to over instead of inprogress
  app.put("/api/games/:id", function (req, res) {
    db.Game.update(req.body, {
      where: {
        game_id: req.params.id,
      },
    }).then(function (dbGame) {
      res.end();
    });
  });
};
