$(document).ready(function() {

    //grabs the game_id from the URL
    var parsedURL = new URL(window.location.href);
    var gamID = parseInt(parsedURL.searchParams.get("id")) - 1;
    console.log(gamID)

    //Getting a reference for coach to update home and away scores
    var $updateHome = $(".updateHome");
    var $updateAway = $(".updateAway");

    //Event listeners for editing home and away scores
    $(document).on("click", ".update-score", editScore);
    $(document).on("keyup", ".update-score", finishUpdate);
    // $(document).on("blur", ".update-score", cancelUpdate)

    //Get information from games and scores tables
    getInfo();
    scoreInfo();

    //this function grabs score info from llldb
    function scoreInfo() {
        $.get("/api/scores/", function(data) {
            var gameData = data[gamID]
            $("#date").text("Date: " + gameData.date);
            $("#h1_score").text(gameData.h1_score);
            $("#v1_score").text(gameData.v1_score);
            $("#h2_score").text(gameData.h2_score);
            $("#v2_score").text(gameData.v2_score);
            $("#h3_score").text(gameData.h3_score);
            $("#v3_score").text(gameData.v3_score);
            $("#h4_score").text(gameData.h4_score);
            $("#v4_score").text(gameData.v4_score);
            $("#h5_score").text(gameData.h5_score);
            $("#v5_score").text(gameData.v5_score);
            $("#h6_score").text(gameData.h6_score);
            $("#v6_score").text(gameData.v6_score);
            
            //calculates home score
            var h_runs = gameData.h1_score + gameData.h2_score  + gameData.h3_score + gameData.h4_score + gameData.h5_score  + gameData.h6_score + gameData.h_overtime;

            //calculates visting score
            var v_runs = gameData.v1_score + gameData.v2_score  + gameData.v3_score + gameData.v4_score + gameData.v5_score  + gameData.v6_score + gameData.v_overtime;
            
            $("#h_runs").text(h_runs);
            $("#v_runs").text(v_runs);
        })
    }

    //this function grabs game info from llldb
    function getInfo() {
        $.get("/api/games/", function(data) {
            var gameData = data[gamID]
            console.log(data)
            $("#h_name").text("Home Team: " + gameData.home_team)
            $("#v_name").text("Visiting Team: " + gameData.away_team)
            $("#loc").text("Location: " + gameData.location)
        })
    }

    function editScore() {
        var currentScore = $(this).data("score");
        $(this).children().hide();
        $(this).children("input.edit").val(currentScore.text);
        $(this).children("span").show();
        // $(this).children("button").show();
    }

    //coach must press enter (event.which) to solidify update
    function finishUpdate(event) {
        var updatedScore = $(this).data("score");
        if(event.which === 13) {
            updatedScore.text = $(this).children("input").val().trim();
            $(this).blur();
            updateScore(updatedScore);
            console.log(updatedScore)
        }
    }

    //updates the coach's score input to database
    function updateScore(newScore) {
        $.ajax({
            method: "PUT",
            url: "/api/scores",
            data: newScore
        }).then(
            scoreInfo()
        )
    }
});