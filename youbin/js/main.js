// --------------재준님 review 따라해보기
const inputComments = document.getElementsByClassName("comment-input"); //댓글 input
const commentBtn = document.getElementsByClassName("comment-btn"); //게시 버튼
const commentList = document.getElementsByClassName("comment-list"); //댓글 추가할 공간

// console.log(Array.from(commentBtn));
//가짜배열을 배열화해주는... //
Array.from(commentBtn).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = inputComments[index].value;
    // console.log(content);

    //[
    //1. 자식요소를 만들어서                      //허공에 div를
    const childComment = document.createElement("div");
    //                                     //허공에 span을
    const nameSpan = document.createElement("span");

    //2. 허공의 span에 닉넴 붙이고 class 선언 후 css도 붙여준다.
    nameSpan.className = "comment-name";
    nameSpan.textContent = "edenpark";
    //]

    //3. 아이디와 댓글을 붙여준다.
    childComment.append(nameSpan, content);
    //4. 허공에 만든 태그들을 main.html에 넣어주는 행동이다
    commentList[index].appendChild(childComment);
    //새로고침하면 리셋!
    inputComments.value = "";
  });
});

// //댓글 입력 됐을 때 게시 버튼 누르면 댓글 업로드 !
// commentBtn.addEventListener("click", () => {
//   // e.preventDefault();
//   const content = inputComments.value;
//   // console.log(content);

//   //1. 자식요소를 만들어서                      //허공에 div를
//   const childComment = document.createElement("div");
//   //                                     //허공에 span을
//   const nameSpan = document.createElement("span");

//   //2. 허공의 span에 닉넴 붙이고 class 선언 후 css도 붙여준다.
//   nameSpan.className = "comment-name";
//   nameSpan.textContent = "edenpark";

//   //3. 아이디와 댓글을 붙여준다.
//   childComment.append(nameSpan, content);
//   //4. 허공에 만든 태그들을 main.html에 넣어주는 행동이다
//   commentList.appendChild(childComment);

//   inputComments.value = "";
// });

// 진행 중
// const inputComments = document.getElementsByClassName("comment-input"); //댓글 input
// const commentBtn = document.getElementsByClassName("comment-btn"); //게시 버튼
//

// function addComment() {
//   //댓글 추가할 공간
//   const commentList = document.getElementsByClassName("comment-list");

//   const commentPrt = document.createElement("div");

//   const user = document.createElement("span");
//   const text = document.createElement("span");

//   commentPrt.append(user, text);
//   user.textContent = "유빈";

//   text.textContent = commentList;

// }

// commentBtn.addEventListener("click", () => {
//   addComment();
// });
