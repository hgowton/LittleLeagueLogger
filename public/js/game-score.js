$(document).ready(function() {

    //grabs the game_id from the URL
    var parsedURL = new URL(window.location.href);
    var gamID = parseInt(parsedURL.searchParams.get("id")) - 1;
    
    //creates game ID for use with database
    var gameID =  parseInt(parsedURL.searchParams.get("id"));


    //Event listeners for editing home and away scores
    $(document).on("focus", ".update-score", editScore);
    $(document).on("keyup", ".update-score", finishUpdate);
    $(document).on("blur", ".update-score", cancelUpdate);
    $(document).on("click", "#gameOver", gameOver);

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
            $("#h_overtime").text(gameData.h_overtime);
            $("#v_overtime").text(gameData.v_overtime);

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
            $("#h_name").text("Home Team: " + gameData.home_team)
            $(".home").text(gameData.home_team)
            $("#v_name").text("Visiting Team: " + gameData.away_team)
            $(".visit").text(gameData.away_team)
            $("#loc").text("Location: " + gameData.location)
            if (gameData.in_progress == true) {
                $("#gameOver").show();
            }
        })
    }

    function editScore() {
        var currentScore = $(this).val();
        console.log("editScore: " + currentScore)
    }

    //coach must press enter (event.which) to solidify update
    function finishUpdate(event) {
        if(event.which === 13) {
            var inning = $(this).attr("data-teamInning")
            var uScore = $(this).val().trim()
            var updatedScore = {
                [inning]: uScore
            }
            $(this).blur();
            updateScore(updatedScore);
            console.log("updatedscore " + inning + uScore)
        }
    }

    //updates the coach's score input to database
    function updateScore(newScore) {
        $.ajax({
            method: "PUT",
            url: `/api/scores/${gameID}`,
            data: newScore
        }).then(scoreInfo)
        console.log("newScore " + newScore)
        scoreInfo();
        location.reload(true)
    }


    //switches game from inprogress to over
    function gameOver() {
        var updatedGame = {
            "in_progress": 0,
            "completed": 1
        };
        console.log(updatedGame);
        $.ajax({
            method: "PUT",
            url: `/api/games/${gameID}`,
            data: updatedGame
        }).then(
            console.log("In progress and completed"),
            location.reload(true)
        )
    }

    //cancel update
    function cancelUpdate () {
        if (currentScore) {
            $(this).val(currentScore);
        }
    }

    $("#overtime").on("click", function(event) {
        //Allows user to press enter or click add button and prevents the form from trying to submit itself
        event.preventDefault();  
        $(".OT").show();
    })
});