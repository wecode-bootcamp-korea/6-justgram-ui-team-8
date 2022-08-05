const form = document.querySelector("input");
const loginBtn = document.querySelector(".btn_login");

loginBtn.disabled = true;

form.addEventListener("keydown", function (e) {
  loginBtn.disabled = false;
  //또는 loginBtn.disabled = !loginBtn.disabled;
});

//이메일 형식의 ID 비밀번호 글자수 검사
const loginId = document.querySelector(".id");
const loginPw = document.querySelector(".pw");

loginId.addEventListener("change", (e) => {
  emailIdCheck(e.target);
});
loginPw.addEventListener("change", (e) => {
  pwCheck(e.target);
});
function emailIdCheck(email) {
  if (validEmail(email) == false) {
    alert("이메일 형식으로 입력해 주세요.");
    email.value = "";
    email.focus();
    return false;
  }
}

function validEmail(email) {
  let emailPattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return email.value.match(emailPattern) != null;
}

loginPw.addEventListener("change", (e) => {
  pwCheck(e.target);
});

function pwCheck() {
  if (loginPw.value.length < 5 || loginPw.value.length > 10) {
    alert("비밀번호를 5자리 ~ 10자리 이내로 입력해 주세요.");
    loginPw.value = "";
    loginPw.focus();
    return false;
  }
  return true;
}
