const loginBtn = document.querySelector(".loginBtn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMail = document.querySelector(".errorMail");
const passError = document.querySelector(".passError");

export const getInfo = JSON.parse(localStorage.getItem("signInfo")) || [];
if (getInfo) {
  getInfo.forEach((element) => {
    if (element) {
      email.value = element.email;
      password.value = element.password;
    }
  });
}
loginBtn.addEventListener("click", () => {
  if (email.value && password.value) {
    return (loginBtn.href = "../index.html");
  }
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
  }
});
