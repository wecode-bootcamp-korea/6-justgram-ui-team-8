const commentWrite = document.querySelectorAll(".write");
const commentBtn = document.querySelectorAll(".write-button");
const commentList = document.querySelectorAll(".comment");

const addComment = (index) => {
  //문제가 예상되는 전라인에 디버깅 걸어봐야함
  //이미 오류가 난 다음에 걸어봐짜 알 수 없음!! 전에 걸어봐야 알 수 있음
  // debugger;
  //커맨드를 누르고 커서 포인터로 바뀌면 클릭 -> 선언부로 바로 이동
  const wrapDiv = document.createElement("div");

  console.log("클릭 테스트");

  const commentText = commentWrite[index].value; // primitive value. String
  const dd = document.createElement("dd");
  const p = document.createElement("p");
  const likeButton = document.createElement("button");
  /*
    1. contentArticle 에 content(댓글. input value) 넣어주기.
    2. contentLikeBtn에, type="button"
     -> 왜냐면. <button></button> 으로만 생성되기 떄문에, 필요 속성은 개발자가 추가해줘야 함
    3. contentArticle & contentLikeBtn 2개의 요소를 contentElement 에 자식으로 넣어주기.
  */
  //f2를 누르면 변수명
  p.textContent = commentText;
  likeButton.setAttribute("type", "button");
  likeButton.textContent = "좋아요";

  /**
   * 1. contentArticle(p) 에 button 을 넣는다. (1개)
   * 2. contentElement(dd) 에 p 와 버튼을 append 한다 (여러개)
   */
  p.appendChild(likeButton);

  dd.appendChild(p);
  // 야호 ! 계층구조(nested) 완성. (요소에 따라필요한 attr 도 넣음)

  const userName = document.createElement("dt");
  // userName.className = "comment-name";
  userName.textContent = "i_am_rupee";

  // 유저ID(userName), 댓글 입력 값(content) 를 '자식'으로 추가한다.
  // append = 2개 이상의 DOM을 한번에 추가할 때 씀
  wrapDiv.append(userName, dd);

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

// Person (사람)
// ['김가빈', '김교은' '장재영', '장영수'].(forEach || map || filter ) = 매표소
//  1. forEach(매표소) -> forEach( (person (김가빈, 김교은....), 0) => {...} )
//  2. forEach(매표소) -> forEach( ('김교은', 1) => {...} )   ...

// ['코멘트인풋1', '코멘트인풋2', '코멘트인풋3'].forEach(( ) =>)
commentWrite.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    //그 이벤트.code가 엔터라면
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
