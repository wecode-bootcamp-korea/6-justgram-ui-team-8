const button = document.getElementsByClassName("buttonLogin")[0];
const inputId = document.getElementsByClassName("id")[0];
const inputPw = document.getElementsByClassName("password")[0];

inputId.addEventListener("keyup", validate);
inputPw.addEventListener("keyup", validate);

function validate() {
  if (
    !(
      inputId.value &&
      inputPw.value &&
      inputId.value.includes("@") &&
      inputPw.value.length >= 5
    )
  ) {
    button.disabled = true;
    button.classList.remove("buttonActivate");
  } else {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.classList.add("buttonActivate");
  }
}

// loginById.addEventListener("submit", (event) => {
//   event.preventDefault();
// });
