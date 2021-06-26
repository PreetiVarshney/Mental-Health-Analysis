var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");

var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");

function switchSignup() {
    right_form.classList.add("fade-in-element");
    left_cover.classList.add("fade-in-element");

    left_form.classList.add("form-hide");
    left_cover.classList.remove("cover-hide");
    right_form.classList.remove("form-hide");
    right_cover.classList.add("cover-hide");
}

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').style.fontSize = '12px';
      document.getElementById('message').style.textAlign = 'right';
      document.getElementById('message').innerHTML = 'Password Matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').style.fontSize = '12px';
      document.getElementById('message').style.textAlign = 'right';
      document.getElementById('message').innerHTML = 'Password Not Matching';
    }
  }