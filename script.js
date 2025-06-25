DOMContentLoaded();
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener(`submit`, function () {
    event.preventDefault();
  })

  const username = document.getElementById("username").Value.trim(" ");
  const email = document.getElementById("email").Value.trim(" ");
  const password = document.getElementById("password").Value.trim(" ");
