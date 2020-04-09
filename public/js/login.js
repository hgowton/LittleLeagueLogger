$(document).ready(function () {
  // Login submission
  $("form").on("submit", function (event) {
    event.preventDefault();
    $.post(
      "/api/user",
      {
        name: $("#email").val().trim(),
        // password: $("#password").val().trim()
      },
      function(data) {
        // if(correctPassword() == true)
        console.log(dbUser.correctPassword);
        // window.location.href = "/calendar";
      });
  });

  // Function that unchecks the coach checkbox
  function uncheck() {
    return (document.getElementById("checkBox").checked = false);
  }

  //Create Account button that pops up the model
  $("#create").on("click", function () {
    $("#myModal").modal("show");
    uncheck();
  });

  // The create button that submits the form data
  $("#createUserAccount").on("click", function (event) {
    event.preventDefault();

    console.log("create account button");

    let emailInput = $("#createEmail").val().trim();
    let passwordInput = $("#createPassword").val().trim();
    let coachVal = document.getElementById("checkBox").checked;
//
    var newUser = {
      name: emailInput,
      password: passwordInput,
      coach: coachVal,
      team: "Jaguars"
    };
    console.log(newUser);
    $.post("/api/newUser", newUser).then(function(){
      alert("New user account created!");
    });
  });




  // Coach checkbox validation
  $("#checkBox").on("click", function (event) {
    let password = "coach";
    let input = prompt("Enter Coach Password...");

    if (input === password && input != null) {
      return;
    } else {
      event.preventDefault();
      alert("Incorrect Coach Password");
    }
  });

  // $(document).on("click", ".submit", userLogin);
  // var $email = $("#email").val().trim();

  // function userLogin() {
  //   $.post(
  //     "/api/user",
  //     {
  //       email: $("#email").val().trim(),
  //       // password: $("#password").val().trim()
  //     },
  //     function(data) {
  //       console.log(data);
        // if (data !== null) {
        //   window.location.href = "/public/calendar.html";
        //   //look up javascript window
        // } else {
        //   alert("Email/password not found!");
        // }
    //   }
    // );
  // }
});