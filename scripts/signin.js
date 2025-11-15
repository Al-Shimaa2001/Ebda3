const signUpBtn = document.querySelector(".signBtn");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const successSign = document.querySelector(".successSign");
const error = document.querySelector(".error");
const errorLength = document.querySelector(".errorLength");
export let Info = [{}];
signUpBtn.addEventListener("click", () => {
  if (
    !fullName.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    handelErrorSign();
    return;
  }
  if (password.value !== confirmPassword.value) {
    handelPasswordError();
    return;
  }
  if (password.value.length < 8) {
    handelPasswordLength();
    return;
  }

  handelSuccessSign();
});
function handelSuccessSign() {
  successSign.style.display = "inline-block";
  setTimeout(() => {
    successSign.style.display = "none";
  }, 6000);
  Info.push({
    fullName: fullName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
  saveInfo();
  signUpBtn.href = "./loginPage.html";
}

function handelErrorSign() {
  error.textContent = "please fill all fields ! ";
  error.style.display = "inline-block";
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
}

function handelPasswordError() {
  error.textContent = "confirm password should same as password ! ";
  error.style.display = "inline-block";
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
}
function handelPasswordLength() {
  errorLength.style.display = "inline-block";
  setTimeout(() => {
    errorLength.style.display = "none";
  }, 3000);
}
export function saveInfo() {
  localStorage.setItem("signInfo", JSON.stringify(Info));
}
