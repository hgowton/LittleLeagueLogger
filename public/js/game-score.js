$(document).ready(function() {

    //grabs the game_id from the URL
    var parsedURL = new URL(window.location.href);
    var gamID = parseInt(parsedURL.searchParams.get("id")) - 1;

    console.log(gamID)

    //initialize game info array to populate date, teams, date, and location
    getInfo();
    scoreInfo();

    //this function grabs game info from llldb
    function scoreInfo() {
        $.ajax({url: "/api/scores/", method: "GET"})
        .then(function(tableData) {
            var gameData = tableData[gamID]
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

    function getInfo() {
        $.ajax({url: "/api/games/", method: "GET"})
        .then(function(tableData) {
            var gameData = tableData[gamID]
            $("#h_name").text("Home Team: " + gameData.home_team)
            $("#v_name").text("Visiting Team: " + gameData.away_team)
            $("#loc").text("Location: " + gameData.location)
        })
    }
});