var db = require("../models");

//Routes
module.exports = function(app) {

    //GET route for getting all of the scores from all of the game
    app.get("/api/scores", function(req,res) {
        db.Scores.findAll({}).then(function(dbScores) {
            res.json(dbScores)
        });
    });

    app.get("/api/scores/:id", function(req, res) {
        db.Scores.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbScores) {
            res.json(dbScores)
        });
    });

    //may need to go on a different page?? -- think about how this ties in with the coach functionality when a game is created
    app.post("/api/scores", function (req, res) {
        //Create a game log
        console.log(req.body);
        db.Scores.create(req.body).then(function(dbScores) {
            res.json(dbScores);
        });
    });

    app.delete("/api/scores/:id", function(req, res) {
        db.Scores.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbScores) {
            res.json(dbScores);
        });
    });
};