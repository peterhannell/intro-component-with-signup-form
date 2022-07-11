let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let firstName = id("firstName"),
  lastName = id("lastName"),
  email = id("emailField"),
  password = id("passwordField"),
  form = id("signupForm"),
  errorMsg = classes("error-message"),
  errorIcon = classes("error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(firstName, 0, "First Name cannot be empty");
  engine(lastName, 1, "Last Name cannot be empty");
  engine(email, 2, "Email cannot be empty");
  engine(password, 3, "Password cannot be empty");
  validateEmail();
  toggleBorder();
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    errorIcon[serial].classList.remove("hidden");
  } else {
    errorMsg[serial].innerHTML = "";
    errorIcon[serial].classList.add("hidden");
  }
};

function validateEmail() {
  const regex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const invalidFormat = document.querySelector(".email-invalid");
  if (email.value.match(regex)) {
    invalidFormat.innerHTML = null;
    email.style.border = null;
  } else if (email.value && !email.value.match(regex)) {
    errorIcon[2].classList.remove("hidden");
    email.style.border = "1px solid #ff7a7a";
    invalidFormat.innerHTML = "Looks like this is not an email";
  }
}

function toggleBorder() {
  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < 4; i++) {
    if (inputs[i].value == "") {
      inputs[i].classList.add("border-red");
    } else {
      inputs[i].classList.remove("border-red");
    }
  }
}
