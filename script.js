document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
  })
  
  const username = document.getElementById("username").Value.trim();
  const email = document.getElementById("email").Value.trim();
  const password = document.getElementById("password").Value.trim();

  let isValid = true;
  let messages = [];

  if (username.length < 3) {
    isValid = false;
    masseges.push("your username's not valid");
  }
  else{
    masseges.push("")
  }

  if (email.include("@", ".")) {
    isValid = false;
    masseges.push("your email is not valid");
  }
  else{
    masseges.push("")
  }

  if (password.length < 8) {
    isValid = false;
    masseges.push("your password is not long enough");
  }
  else{
    masseges.push("")
  }

feedbackDiv.style.display = "block";

  if(isValid){
        feedbackDiv.textContent = "Registration successful";
        feedbackDiv.style.color = "#28a745";

    } else {
        feedbackDiv.innerHTML = messages.join("<br>")
        feedbackDiv.style.color = "#dc3545";
    }
})