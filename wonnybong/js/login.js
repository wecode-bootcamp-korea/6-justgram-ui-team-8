const uidInput = document.getElementById("uid");
const upwInput = document.getElementById("upw");
const loginBtn = document.getElementById("login-btn");

function ableLoginBtn() {
  let idValue = uidInput.value;
  let pwValue = upwInput.value;
  if (idValue && pwValue) {
    loginBtn.disabled = false;
    loginBtn.classList.add("abled");
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.remove("abled");
  }
}

uidInput.addEventListener("input", ableLoginBtn);
upwInput.addEventListener("input", ableLoginBtn);
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("./main.html", "_self");
});
