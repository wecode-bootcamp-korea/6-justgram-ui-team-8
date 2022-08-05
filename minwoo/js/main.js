const commentForm = document.querySelector(".comments_form"); // 댓글창
const comments = document.querySelector("#comment_input"); // 댓글내용
const submitButton = document.querySelector(".btn span"); // 게시버튼

//  댓글 남기기 함수
function commentUpdate() {
  const ulbox = document.querySelector(".comments_info.comment_list_ul");
  const liBox = document.createElement("li"); // 댓글을 남길때마다 li가 하나씩 추가
  const pBox = document.createElement("div");
  const userBox = document.createElement("span"); // 아이디부분
  const commentCtnBox = document.createElement("span"); // 댓글입력내용부분
  let user = "김민우";

  userBox.setAttribute("class", "user_id");
  commentCtnBox.setAttribute("class", "comment_contents");
  pBox.setAttribute("class", "comments_tit");

  userBox.innerHTML = user;
  commentCtnBox.innerHTML = comments.value;

  pBox.appendChild(userBox);
  pBox.appendChild(commentCtnBox);
  liBox.appendChild(pBox);
  ulbox.appendChild(liBox);
}

// 게시버튼 클릭 시 댓글 등록
submitButton.addEventListener("click", commentUpdate);

// 엔터 입력시 댓글 등록
comments.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    commentUpdate();
  }
});

// 댓글 입력시 페이지 새로고침 되지 않게하기
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
