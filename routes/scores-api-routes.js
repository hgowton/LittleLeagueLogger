var db = require("../models");

//Routes
module.exports = function(app) {

    //GET route for getting all of the scores from all of the game
    app.get("/api/scores", function(req,res) {
        db.Score.findAll({}).then(function(dbScores) {
            res.json(dbScores)
        });
    });

    app.get("/api/scores/:id", function(req, res) {
        db.Score.findOne({
            where: {
                game_id: req.params.id
            }
        }).then(function(dbScores) {
            res.json(dbScores)
        });
    });

    //may need to go on a different page?? -- think about how this ties in with the coach functionality when a game is created
    app.post("/api/scores", function (req, res) {
        //Create a game log
        console.log(req.body);
        db.Score.create(req.body).then(function(dbScores) {
            res.json(dbScores);
        });
    });
 
    app.delete("/api/scores/:id", function(req, res) {
        db.Score.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbScores) {
            res.json(dbScores);
        });
    });

    //PUT route for updating scores
    app.put("/api/scores", function(req, res){
        db.Score.update(req.body,
            {
                where: {
                    game_id: req.body.id
                }
            }).then(function(dbScores) {
                res.json(dbScores);
            });
    });

    app.put("/api/scores/:id", function(req, res){
        db.Score.update(req.body,
            {
                where: {
                    game_id: req.params.id,
                }
            }).then(function(dbScores) {
                res.json(dbScores);
            });
    });
};