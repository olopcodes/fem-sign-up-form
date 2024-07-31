const img = document.querySelector("img");
const btnClose = document.querySelector(".btn-close");
const input = document.querySelector("input");
const form = document.querySelector("form");
const body = document.querySelector("body");
const inputField = document.querySelector(".sign-up__input-field");
const successTextSpanEl = document.querySelector(".success-text span");

window.addEventListener("resize", (event) => {
  if (window.innerWidth >= 700) {
    img.src = "./assets/images/illustration-sign-up-desktop.svg";
    return;
  } else {
    img.src = "./assets/images/illustration-sign-up-mobile.svg";
    return;
  }
});

btnClose.addEventListener("click", (e) => {
  body.classList.remove("valid");
  input.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const isEmail = validateEmail(data.email);

  if (isEmail) {
    body.classList.add("valid");
    successTextSpanEl.textContent = data.email;
  } else {
    handleInvalidInput();
  }
});

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function handleInvalidInput() {
  inputField.classList.add("invalid");
  setTimeout(() => {
    input.value = "";
    input.focus();
    inputField.classList.remove("invalid");
  }, 1500);
}
