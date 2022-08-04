console.log("JavaScript가 동작중입니다.");

const inputId = document.getElementById("id");
const inputPassword = document.getElementById("pw");
const button = document.getElementById("btn");

function loginBtn() {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (idValue.includes("@") > 0 && passwordValue.length > 5) {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#1c7ed6";
  } else {
    button.disabled = true;
    button.style.cursor = "default";
    button.style.backgroundColor = "#bfdffd";
  }
}

inputId.addEventListener("keyup", loginBtn);
inputPassword.addEventListener("keyup", loginBtn);
