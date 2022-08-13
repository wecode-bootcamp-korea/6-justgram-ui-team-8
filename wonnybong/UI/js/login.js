const uidInput = document.getElementById('uid');
const upwInput = document.getElementById('upw');
const loginBtn = document.getElementById('login-btn');

function ableLoginBtn() {
  let idValue = uidInput.value;
  let pwValue = upwInput.value;
  let isValid = idValue.includes('@') && idValue.length >= 5 && pwValue.length >= 5

  loginBtn.disabled = !isValid
}

uidInput.addEventListener('input', ableLoginBtn);
upwInput.addEventListener('input', ableLoginBtn);
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('./main.html', '_self');
});
