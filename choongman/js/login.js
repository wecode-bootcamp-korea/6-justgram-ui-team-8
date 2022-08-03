const idInput = document.getElementsByClassName("id")[0];
const pwInput = document.getElementsByClassName("pw")[0];
const loginButton = document.getElementsByClassName("loginBtn")[0];

onInput = (event) => {
  const id = idInput.value;
  const pw = pwInput.value;

  if (id.length > 1 && pw.length > 1) {
    // 버튼 활성화 로직
    loginButton.style.backgroundColor = "#0095F6";
    loginButton.style.cursor = "pointer";
    loginButton.disabled = false;
  } else {
    // 버튼 비활성화 로직
    loginButton.style.backgroundColor = "B2DFFC";
    loginButton.style.cursor = "not-allowed";
    loginButton.disabled = true;
  }
};

idInput.addEventListener("input", onInput);

pwInput.addEventListener("input", onInput);
