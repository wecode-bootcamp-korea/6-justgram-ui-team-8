const replyArr = document.getElementsByClassName("reply");
const commentArr = document.getElementsByClassName("commentInput");
const buttonArr = document.getElementsByClassName("commentButton");
const replyPlace = document.getElementsByClassName("reply-post");
//const loginById = document.querySelector("loginId");

//JSON fetch mission5
fetch("./data/comments.json")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.comments);
    let arr = res.comments;
    console.log(arr[0].userName);
    arr.forEach((element, index) => {
      const div = document.createElement("div");
      const writerId = document.createElement("span"); //화면에 나타야할 순서대로 작성해준다.
      const writerComment = document.createElement("span");
      const button = document.createElement("button");
      writerId.innerText = element.userName;
      writerId.classList.add("bold");
      writerComment.innerText = element.content;
      button.innerText = "x"; // 삭제 기능 구현
      replyPlace[index].appendChild(div);
      replyPlace[index].appendChild(writerId);
      replyPlace[index].appendChild(writerComment);
      replyPlace[index].appendChild(button);
    });
  });

//임시로 0번 인덱스(1번피드 댓글부터 구현);
document.addEventListener("keyup", validate);
//댓글 달기 구현
Array.from(replyArr).forEach((button, index) => {
  button.addEventListener("click", () => {
    if (buttonArr[index].disabled === false) {
      const content = commentArr[index].value;
      const div = document.createElement("div");
      const writerId = document.createElement("span"); //화면에 나타야할 순서대로 작성해준다.
      const writerComment = document.createElement("span");
      const button = document.createElement("button");
      writerId.innerText = "commenter";
      writerId.classList.add("bold");
      writerComment.innerText = content;
      button.innerText = "x"; // 삭제 기능 구현
      replyPlace[index].appendChild(div);
      replyPlace[index].appendChild(writerId);
      replyPlace[index].appendChild(writerComment);
      replyPlace[index].appendChild(button);
      commentInput = ""; //내용 초기화
      commentArr[index].value = ""; // 인풋상자 내용 초기화
    }
  });
});
//document.addEventListener("click", postComment);

function validate() {
  for (let i = 0; i < commentArr.length; i++) {
    if (!commentArr[i].value) {
      buttonArr[i].disabled = true;
      buttonArr[i].classList.remove("buttonActivate");
    } else {
      buttonArr[i].disabled = false;
      buttonArr[i].style.cursor = "pointer";
      buttonArr[i].classList.add("buttonActivate");
    }
  }
}
