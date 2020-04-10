$(document).ready(function() {
  //grabs the game_id from the URL
  var parsedURL = new URL(window.location.href);
  var gamID = parseInt(parsedURL.searchParams.get("id")) - 1;

  console.log("gameID " + gamID);

  //initialize game info array to populate date, teams, date, and location
  getInfo();
  scoreInfo();
//   getComments();

  //this function grabs game info from llldb
  function scoreInfo() {
    $.ajax({ url: "/api/scores/", method: "GET" }).then(function(tableData) {
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
      // eslint-disable-next-line camelcase
      var h_runs =
        gameData.h1_score +
        gameData.h2_score +
        gameData.h3_score +
        gameData.h4_score +
        gameData.h5_score +
        gameData.h6_score +
        gameData.h_overtime;

      //calculates visting score
      // eslint-disable-next-line camelcase
      var v_runs =
        gameData.v1_score +
        gameData.v2_score +
        gameData.v3_score +
        gameData.v4_score +
        gameData.v5_score +
        gameData.v6_score +
        gameData.v_overtime;

      $("#h_runs").text(h_runs);
      $("#v_runs").text(v_runs);
    });
  }

  function getInfo() {
    $.ajax({ url: "/api/games/", method: "GET" }).then(function(tableData) {
      var gameData = tableData[gamID]
      $("#h_name").text("Home Team: " + gameData.home_team);
      $("#v_name").text("Visiting Team: " + gameData.away_team)
      $("#loc").text("Location: " + gameData.location);
    });
  }


  $.ajax({ url: "/api/comments/", method: "GET" }).then(function(commentData) {
    var results = commentData;
    $("#outer").empty();

    var lists = $("<div>");
    lists.addClass("tick");
    lists.attr("id", "tick");

    $.each(results, function(index) {
      var getDiv = $("#outer");

      var p = $("<span>").text(results[index].comment);
      var pp = $("<span>").text("  . . . from " + results[index].name);
      p.append(pp);
      p.addClass("comments");

      lists.append(p);

      getDiv.append(lists);
    });
  });

  $("#support").on("click", function(event) {
    event.preventDefault();
  });

    $('#tick2').html($('#tick').html());
    //alert($('#tick2').offset.left);

    var temp = 0, intervalId = 0;
    $('#tick li').each(function () {
        var offset = $(this).offset();
        var offsetLeft = offset.left;
        $(this).css({ 'left': offsetLeft + temp });
        temp = $(this).width() + temp + 10;
    });
    $('#tick').css({ 'width': temp + 40, 'margin-left': '20px' });
    temp = 1000;


    function abc(a, b) {

        var marginLefta = (parseInt($("#" + a).css('marginLeft')));
        var marginLeftb = (parseInt($("#" + b).css('marginLeft')));
        if ((-marginLefta <= $("#" + a).width()) && (-marginLefta <= $("#" + a).width())) {
            $("#" + a).css({ 'margin-left': (marginLefta - 1) + 'px' });
        } else {
            $("#" + a).css({ 'margin-left': temp });
        }
        if ((-marginLeftb <= $("#" + b).width())) {
            $("#" + b).css({ 'margin-left': (marginLeftb - 1) + 'px' });
        } else {
            $("#" + b).css({ 'margin-left': temp });
        }
    }

    function start() { intervalId = window.setInterval(function () { abc('tick', 'tick2'); }, 10) }

    $(function () {
        $('#outer').mouseenter(function () { window.clearInterval(intervalId); });
        $('#outer').mouseleave(function () { start(); })
        start();
    });


});
