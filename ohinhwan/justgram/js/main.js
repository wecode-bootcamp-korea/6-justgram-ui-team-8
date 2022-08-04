const commentArr = document.getElementsByClassName("commentInput");
const buttonArr = document.getElementsByClassName("commentButton");
//const loginById = document.querySelector("loginId");

//임시로 0번 인덱스(1번피드 댓글부터 구현);
let commentInput;
let replyPlace;
document.addEventListener("keyup", validate);
document.addEventListener("click", postComment);

function validate() {
  for (let i = 0; i < commentArr.length; i++) {
    if (!commentArr[i].value) {
      buttonArr[i].disabled = true;
      buttonArr[i].classList.remove("buttonActivate");
    } else {
      buttonArr[i].disabled = false;
      buttonArr[i].style.cursor = "pointer";
      buttonArr[i].classList.add("buttonActivate");
      commentInput = commentArr[i].value;
      replyPlace = document.getElementsByClassName("reply-post")[i];
    }
  }
}

function postComment() {
  const br = document.createElement("br");
  const writerId = document.createElement("span"); //화면에 나타야할 순서대로 작성해준다.
  const writerComment = document.createElement("span");
  const button = document.createElement("button");
  writerId.innerText = "commenter";
  writerId.classList.add("bold");
  writerComment.innerText = commentInput;
  button.innerText = "x";
  replyPlace.appendChild(br);
  replyPlace.appendChild(writerId);
  replyPlace.appendChild(writerComment);
  replyPlace.appendChild(button);
  commentInput = "";
}
