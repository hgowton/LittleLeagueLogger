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
            console.log(tableData[gamID]);
            $("#date").text("Date: " + tableData[gamID].date);
            $("#h1_score").text(tableData[gamID].h1_score);
            $("#v1_score").text(tableData[gamID].v1_score);
            $("#h2_score").text(tableData[gamID].h2_score);
            $("#v2_score").text(tableData[gamID].v2_score);
            $("#h3_score").text(tableData[gamID].h3_score);
            $("#v3_score").text(tableData[gamID].v3_score);
            $("#h4_score").text(tableData[gamID].h4_score);
            $("#v4_score").text(tableData[gamID].v4_score);
            $("#h5_score").text(tableData[gamID].h5_score);
            $("#v5_score").text(tableData[gamID].v5_score);
            $("#h6_score").text(tableData[gamID].h6_score);
            $("#v6_score").text(tableData[gamID].v6_score);
        })
    }

    function getInfo() {
        $.ajax({url: "/api/games/", method: "GET"})
        .then(function(tableData) {
            console.log(tableData[gamID]);
            $("#h_name").text("Home Team: " + tableData[gamID].home_team)
            $("#v_name").text("Visiting Team: " + tableData[gamID].away_team)
            $("#loc").text("Location: " + tableData[gamID].location)
        })
    }
});