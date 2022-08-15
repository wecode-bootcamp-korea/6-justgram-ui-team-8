const idInput = document.getElementsByClassName("id")[0];
const pwInput = document.getElementsByClassName("pw")[0];
const loginButton = document.getElementsByClassName("loginBtn")[0];
/*
//로그인 기본값
loginButton.disabled = true;
let loginIdInput = false;
let loginPwInput = false;

const loginId = () => {
  const id = idInput.value;

  if (id.length > 1) {
    //아이디 활성화
    loginIdInput = true;
  } else {
    //아이디 비활성화
    loginIdInput = false;
  }
};

const loginPw = () => {
  const pw = pwInput.value;

  if (pw.length > 1) {
    //비밀번호 활성화
    loginPwInput = true;
  } else {
    //비밀번화 비활성화
    loginPwInput = false;
  }
};

idInput.addEventListener("input", loginId);
pwInput.addEventListener("input", loginPw);

const buttonActivation = () => {
  // 버튼 활성화 로직
  if (loginIdInput === true && loginPwInput === true) {
    loginButton.style.backgroundColor = "#0095f6";
    loginButton.style.cursor = "pointer";
    loginButton.disabled = false;
  } else {
    // 버튼 비활성화 로직
    loginButton.style.backgroundColor = "#B2DFFC";
    loginButton.style.cursor = "auto";
    loginButton.disabled = true;
  }
};

idInput.addEventListener("input", buttonActivation);
pwInput.addEventListener("input", buttonActivation);

const moveToMain = () => {
  if (buttonActivation === true) {
    return (location.href = "./main.html");
  }
};

loginButton.addEventListener("click", moveToMain);

*/
