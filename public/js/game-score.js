$(document).ready(function() {
    
    var $dateContainer = $("#date");
    var $homeContainer = $("#h_name");
    var $visitContainer = $("#v_name");
    var $locationContainer = $("#loc");
    
    //grabs the game_id from the URL
    var parsedURL = new URL(window.location.href);
    var gamID = parseInt(parsedURL.searchParams.get("id")) - 1;

    console.log(gamID)




    //initialize game info array to populate date, teams, date, and location
    getInfo();


    //this function grabs game info from llldb
    function getInfo() {
        $.ajax({url: "/api/scores/", method: "GET"})
        .then(function(tableData) {
            console.log(tableData[gamID]);
            $("#date").text("Date: " + tableData[gamID].date)
        })
    }
});