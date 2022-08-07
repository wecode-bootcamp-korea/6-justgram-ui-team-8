const inputID = document.getElementById("inputId");
const inputPW = document.getElementById("inputPw");
const loginBtn = document.getElementById("login-button");

function onInput() {
  const id = inputID.value;
  const pw = inputPW.value;

  if (id.length > 1 && pw.length > 1) {
    // 버튼활성화하는 로직

    loginBtn.style.backgroundColor = "#4ec5f4";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = true;
  } else {
    //버튼을 비활성화 하는 로직

    loginBtn.style.backgroundColor = "#cde9f4";
    loginBtn.style.cursor = "not allowed";
    loginBtn.disabled = false;
  }
}
inputID.addEventListener("input", onInput);

inputPW.addEventListener("input", onInput);

// ---------

// inputId.addEventListener('keyup', inputEvent)
// inputPw.addEventListener('keyup',inputEvent)

// loginBtn.addEventListener("", () => {});

// function onInput() {
//   const id = inputID.value;
//   const pw = inputPW.value;

//   // id 와 pw value값의 길이를 측정해 1보다 작거나 크면 트루를 반환한다.
//   if (id.length >= 1 && pw.length >= 1) {
//       // 버튼을 활성화 하는 로식
//       //* console.log("버튼 활성화");
//       loginBtn.disabled = false
//       loginBtn.style.opacity = "1";
//       loginBtn.style.cursor = 'pointer'
//   } else {
//       // 버튼을 비활성화 하는 로직
//       //* console.log("버튼 비활성화");
//       loginBtn.disabled = true;
//       loginBtn.style.opacity = "0.5";
//       loginBtn.style.cursor = 'default'
//   }
// }

// loginBtn.addEventListener('click', () => {
//   console.log('메인페이지로 이동합니다.');
// })

// // ID Event
// inputID.addEventListener('input', onInput)

// // PW Event
// inputPW.addEventListener('input', onInput)

//? 정상작동
// const inputId = document.getElementById('inputId');
// const inputPw = document.getElementById('inputPw');
// const loginBtn = document.getElementById('login-button');

// function inputEvent(idValue, pwValue){
//     const falseValue = !(inputId.value && inputPw.value)
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if(falseValue) {
//         if(re.test(String(inputId, inputPw).toLowerCase()))
//         loginBtn.disabled = true
//     }else{
//         loginBtn.disabled = false
//     }
// }

// ! 하나만 값을 받아도 활성화 되고 값을 지워도 활상화 되있다.
// function inputEvent(){
//         if((inputId.value === undefined  && inputPw.value === undefined) ){
//             loginBtn.disabled = true
//         }else{
//             loginBtn.disabled = false
//         }
//     }

// inputId.addEventListener('keyup', inputEvent)
// inputPw.addEventListener('keyup',inputEvent)

//? 잘 작동됨
// inputId.addEventListener('keyup', activeEvent)
// inputPw.addEventListener('keyup', activeEvent)

// function activeEvent () {
//     switch(!(inputId.value && inputPw.value)){
//         case true : loginBtn.disabled = true; break;
//         case false : loginBtn.disabled = false; break;
//     }
// }

//! 아래 코드는 작동은하나 id와 pw를 지워도 로그인 버튼은 활성화 되어있다.
// const input = document.querySelector('.input')
// const loginBtn = document.querySelector('#login__button')
// loginBtn.disabled = true;

// input.addEventListener("change", stateHandle);

// function stateHandle() {
//     if (input.value === "") {
//         loginBtn.disabled - true
//     } else {
//         loginBtn.disabled = false
//     }
// }
