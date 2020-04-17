$(document).ready(function () {
  //grabs the game_id from the URL
  var parsedURL = new URL(window.location.href);
  var gamID = parseInt(parsedURL.searchParams.get("id")) - 1;

  //creates game ID for use with database
  var gameID = parseInt(parsedURL.searchParams.get("id"));

  //Event listeners for editing home and away scores
  $(document).on("keyup", ".update-score", finishUpdate);
  $(document).on("click", "#gameOver", gameOver);
  $(document).on("click", "#fixGame", fixGame);

  function scoreInfo() {
    $.get("/api/scores/", function (data) {
      var gameData = data[gamID];
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
      var h_runs =
        gameData.h1_score +
        gameData.h2_score +
        gameData.h3_score +
        gameData.h4_score +
        gameData.h5_score +
        gameData.h6_score +
        gameData.h_overtime;

      //calculates visting score
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

      var winner = "";
      if (h_runs > v_runs) {
        winner = "home";
      } else {
        winner = "visit";
      }

      //shows overtime fields if
      if (gameData.h_overtime >= 1 || gameData.o_overtime >= 1) {
        $(".OT").show();
      }
      getInfo(winner);
    });
  }

  scoreInfo();

  //this function grabs game info from llldb
  function getInfo(winner) {
    $.get("/api/games/", function (data) {
      var gameData = data[gamID];
      $("#h_name").text("Home Team: " + gameData.home_team);
      $(".home").text(gameData.home_team);
      $("#v_name").text("Visiting Team: " + gameData.away_team);
      $(".visit").text(gameData.away_team);
      $("#loc").text("Location: " + gameData.location);
      if (gameData.in_progress == true) {
        $("#coachInput").show();
        $("#fixGame").hide();
      } else {
        $("#endGame").show();
      }

      var wins = "";
      if (winner === "home") {
        wins = gameData.home_team;
      } else {
        wins = gameData.away_team;
      }

      $("#endGame").text("Final Score: Winner is " + wins + "!");
    });
  }

  //coach must press enter (event.which) to solidify update
  function finishUpdate(event) {
    if (event.which === 13) {
      var inning = $(this).attr("data-teamInning");
      var uScore = $(this).val().trim();
      var updatedScore = {
        [inning]: uScore,
      };
      $(this).blur();
      updateScore(updatedScore);
    }
  }

  //updates the coach's score input to database
  function updateScore(newScore) {
    $.ajax({
      method: "PUT",
      url: `/api/scores/${gameID}`,
      data: newScore,
    }).then(function (data) {
      scoreInfo();
    });
  }

  //switches game from inprogress to over
  function gameOver() {
    var updatedGame = {
      in_progress: 0,
      completed: 1,
    };
    $.ajax({
      method: "PUT",
      url: `/api/games/${gameID}`,
      data: updatedGame,
    }).then(function (data) {
      $("#coachInput").hide();
      $("#fixGame").show();
      scoreInfo();
    });
  }

  //switches game from inprogress to over
  function fixGame() {
    var updatedGame = {
      in_progress: 1,
      completed: 0,
    };
    $.ajax({
      method: "PUT",
      url: `/api/games/${gameID}`,
      data: updatedGame,
    }).then(function (data) {
      scoreInfo();
    });
  }

  //reschedule date of an existing game
  $("#changeDate").on("click", function (event) {
    //Allows user to press enter or click add button and prevents the form from trying to submit itself
    event.preventDefault();
    var dateInput = $("#newDate").val().trim();
    $("#alert").hide();
    $("#alert").text("");

    if (!dateInput) {
      $("#alert").text("Please Enter a valid date");
      $("#alert").show();
    } else {
      var updateDate = {
        date: dateInput,
      };

      $.ajax({
        method: "PUT",
        url: `/api/games/${gameID}`,
        data: updateDate,
      }).then(function (data) {
        console.log("date updated in scores table");
      });

      $.ajax({
        method: "PUT",
        url: `/api/scores/${gameID}`,
        data: updateDate,
      }).then(function (data) {
        console.log("date updated in scores table");
      });

      $("#alert").text("The game's date has been changed");
      $("#alert").show();
      $("#date").text(`Date: ${dateInput}`);
    }
  });

  $("#overtime").on("click", function (event) {
    //Allows user to press enter or click add button and prevents the form from trying to submit itself
    event.preventDefault();
    $(".OT").show();
  });

  $("#calendar").on("click", function (event) {
    event.preventDefault();
    location.assign("/calendar");
  });
});

/////////////////////////////////////////////////
///COMMENTS CODE/////////////////////////////////
/////////////////////////////////////////////////
function getComments() {
  $.ajax({ url: "/api/comments/", method: "GET" }).then(function (commentData) {
    var results = commentData;
    $("#outer").empty();

    var lists = $("<div>");
    lists.addClass("tick");
    lists.attr("id", "tick");

    $.each(results, function (index) {
      var getDiv = $("#outer");

      var p = $("<span>").text(results[index].comment);
      var pp = $("<span>").text("  . . . from " + results[index].name);
      var ppp = $("<span>").text(" . . . " + results[index].date);
      p.append(pp);
      p.append(ppp);
      p.addClass("comments");

      lists.append(p);

      getDiv.append(lists);
    });
  });
}
getComments();

$("#tick2").html($("#tick").html());

var temp = 0,
  intervalId = 0;
$("#tick li").each(function () {
  var offset = $(this).offset();
  var offsetLeft = offset.left;
  $(this).css({ left: offsetLeft + temp });
  temp = $(this).width() + temp + 10;
});
$("#tick").css({ width: temp + 40, "margin-left": "20px" });
temp = 1000;

function abc(a, b) {
  var marginLefta = parseInt($("#" + a).css("marginLeft"));
  var marginLeftb = parseInt($("#" + b).css("marginLeft"));
  if (
    -marginLefta <= $("#" + a).width() &&
    -marginLefta <= $("#" + a).width()
  ) {
    $("#" + a).css({ "margin-left": marginLefta - 1 + "px" });
  } else {
    $("#" + a).css({ "margin-left": temp });
  }
  if (-marginLeftb <= $("#" + b).width()) {
    $("#" + b).css({ "margin-left": marginLeftb - 1 + "px" });
  } else {
    $("#" + b).css({ "margin-left": temp });
  }
}

function start() {
  intervalId = window.setInterval(function () {
    abc("tick", "tick2");
  }, 10);
}

$(function () {
  $("#outer").mouseenter(function () {
    window.clearInterval(intervalId);
  });
  $("#outer").mouseleave(function () {
    start();
  });
  start();
});

$("#support").on("click", function (event) {
  event.preventDefault();
  var getName = $("#getName").val().trim();
  var newMessage = $("#message").val().trim();

  $.ajax({
    method: "GET",
    url: "/api/users/" + getName,
  }).then(function (match) {
    if (match) {
      var team = match.team;
      var emaill = match.name;
      console.log("team " + team);
      console.log("email " + emaill);

      function insertMessage() {
        var newEntry = {
          comment: newMessage,
          date: "2020-04-09",
          team: team,
          name: emaill,
        };
        console.log("newENtry " + newEntry);

        $.post("/api/newComment", newEntry).then(function () {
          alert("new comment was created!");
        });
      }
      insertMessage();

      console.log(match);
      console.log(team);
    } else {
      alert("You must be a registered user to add comments");
    }
  });
});
