

function login() {
    if ($("#username").val() == "1" && $("#password").val() == "1") {
        window.location.href = '../../imgcopper/index.html'; //Will take you to Google.
    } else {
      alert("You are not a valid user");
    }
  }
  