const form = document.querySelector("input");
const loginBtn = document.querySelector(".btn_login");

loginBtn.disabled = true;

form.addEventListener("keydown", function (e) {
  loginBtn.disabled = false;
  //또는 loginBtn.disabled = !loginBtn.disabled;
});
