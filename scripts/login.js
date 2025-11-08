const loginBtn = document.querySelector(".loginBtn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMail = document.querySelector(".errorMail");
const passError = document.querySelector(".passError");

function login() {
  if (!email.value && !password.value) {
    errorMail.style.display = "inline-block";
    passError.style.display = "inline-block";
    setTimeout(() => {
      errorMail.style.display = "none";
      passError.style.display = "none";
    }, 5000);
  } else if (!password.value) {
    passError.style.display = "inline-block";
    setTimeout(() => {
      passError.style.display = "none";
    }, 5000);
  } else if (!email.value) {
    errorMail.style.display = "inline-block";
    setTimeout(() => {
      errorMail.style.display = "none";
    }, 5000);
  } else {
    console.log("login success");
  }
}
