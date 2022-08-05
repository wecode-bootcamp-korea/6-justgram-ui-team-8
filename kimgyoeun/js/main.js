const commentWrite = document.querySelectorAll(".write");
const commentBtn = document.querySelectorAll(".write-button");
const commentList = document.querySelectorAll(".comment");

const comments = document.querySelectorAll(".comment");

fetch("./data/comments.json", {
  method: "GET", // 데이터를 '가져올 때' 사용되는 메서드 (GET | POST | PUT | DELETE)
})
  //response(=HTTP 응답 전체를 나타내는 객체) 객체를 받아서 json형대로 변경
  // then = '요청'이 '성공'했을 때
  // catch = '요청'이 '실패'했을 때
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // 빈 변수에 데이터를 할당
    let commentArray = data.comments;
    // console.log(comment_list);
    // commentArray.map((comment, index) => {
    commentArray.forEach((comment) => {
      for (let i = 0; i < commentArray.length; i++) {
        const wrapDiv = document.createElement("div");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        const p = document.createElement("p");
        const likeBtn = document.createElement("button");

        likeBtn.setAttribute("type", "button");
        likeBtn.textContent = "좋아요";
        p.innerText = comment.content;

        p.appendChild(likeBtn);
        dd.appendChild(p);
        dt.innerText = comment.userName;

        wrapDiv.append(dt, dd);
        comments[i].append(wrapDiv);
        // comments[index].appendChild(<div><dt /><dd>p,button</dd></div>);
      }
    });
  })
  .catch((e) => {
    console.error("요청에 실패했습니다", e);
  });

// 댓글 추가 기능
const addComment = (index) => {
  //문제가 예상되는 전라인에 디버깅 걸어봐야함
  // debugger;
  //커맨드를 누르고 커서 포인터로 바뀌면 클릭 -> 선언부로 바로 이동
  const wrapDiv = document.createElement("div");

  const commentText = commentWrite[index].value; // primitive value. String
  const contentElement = document.createElement("dd");
  const contentArticle = document.createElement("p");
  const likeButton = document.createElement("button");
  /*
    1. contentArticle 에 content(댓글. input value) 넣어주기.
    2. contentLikeBtn에, type="button"
     -> 왜냐면. <button></button> 으로만 생성되기 떄문에, 필요 속성은 개발자가 추가해줘야 함
    3. contentArticle & contentLikeBtn 2개의 요소를 contentElement 에 자식으로 넣어주기.
  */
  //f2를 누르면 변수명
  contentArticle.textContent = commentText;
  likeButton.setAttribute("type", "button");
  likeButton.textContent = "좋아요";

  /**
   * 1. contentArticle(p) 에 button 을 넣는다. (1개)
   * 2. contentElement(dd) 에 p 와 버튼을 append 한다 (여러개)
   */
  contentArticle.appendChild(likeButton);

  contentElement.appendChild(contentArticle);
  // 야호 ! 계층구조(nested) 완성. (요소에 따라필요한 attr 도 넣음)

  const userName = document.createElement("dt");
  userName.textContent = "i_am_rupee";

  // 유저ID(userName), 댓글 입력 값(content) 를 '자식'으로 추가한다.
  // append = 2개 이상의 DOM을 한번에 추가할 때 씀
  wrapDiv.append(userName, contentElement);

  commentList[index].appendChild(wrapDiv);
  // 인풋창 초기화
  commentWrite[index].value = "";
};

// ['좋아요버튼1', '좋아요버튼2' '좋아요버튼3'].forEach((원소: 좋아요버튼{n}) => {...})
commentBtn.forEach((button, index) => {
  // debugger;
  button.addEventListener("click", () => addComment(index));
});

// ['댓글input1', '댓글input2' '댓글input3'].forEach((원소: ?? ) => {...})
// ['코멘트인풋1', '코멘트인풋2', '코멘트인풋3'].forEach(( ) =>)
commentWrite.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      //댓글 게시 함수 호출
      addComment(index);
    }
  });
});

/**
 * 1. '좋아요' 버튼 클릭시 'active' 클래스가 없으면 추가되고, 있으면 빠지게 처리
 * 2. 댓글 본문 '더 보기' 누르면, ellipsis 처리하는 class 마찬가지로 toggle 처리
 * .. 기타 등등 인스타그램 원래 사이트에 있는 기능 하나하나 옮겨보기
 */
