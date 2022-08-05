// 댓글 추가를 위해 필요한 요소 불러오기
const commentForms = [...document.getElementsByClassName('feed-com-form')];
const commentTimeArr = [...document.getElementsByClassName('feed-cont-time')];
// fetch후 콘텐츠를 변경 할 요소 불러오기
const idUidArr = [...document.getElementsByClassName('feed-id-uid')];
const contUidArr = [...document.getElementsByClassName('feed-cont-uid')];
const feedImgArr = [...document.getElementsByClassName('img')];
const likeCountArr = [...document.getElementsByClassName('like-count')];
const commentContentArr = [...document.getElementsByClassName('feed-cont-com')];
const allCommentArr = [...document.getElementsByClassName('feed-all-comment')];
// 아이디 검색을 위해 필요한 요소 불러오기
const search = document.getElementById('search');
const searchListContainer = document.getElementsByClassName(
  'search-list-container'
)[0];
const searchBtn = document.getElementById('searchBtn');

// 프로필 토글을 위해 필요한 요소 불러오기
const profileBtn = document.getElementById('profile-btn');
const profileMenu = document.getElementById('profile-menu');

const writer = 'guest1';
let datalist;

// 데이터를 받아와서 피드의 컨텐츠 바꿔주기
fetch('data/feeds.json')
  .then((res) => res.json())
  .then((data) => {
    datalist = data;
    data.forEach((comment) => {
      let i = data.indexOf(comment);
      idUidArr[i].innerText = comment.userName;
      contUidArr[i].innerText = comment.userName;
      feedImgArr[i].src = comment.imageSrc;
      likeCountArr[i].innerText = `좋아요 ${comment.likeCount}개`;
      commentContentArr[i].innerText = comment.content;
      allCommentArr[i].innerText = `댓글 ${comment.allComment}개 모두 보기`;
      commentTimeArr[i].innerText = `${comment.createdTime}시간 전`;
    });
  });

// 데이터를 받아와서 검색 리스트 구성
fetch('data/profiles.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((profile) => {
      const searchList = document.createElement('li');
      searchList.classList.add('search-list', 'vertical-center');
      const userImg = document.createElement('img');
      userImg.classList.add('search-user-profile', 'mr15');
      userImg.src = profile.profileImg;
      const userIdContainer = document.createElement('div');
      const userId = document.createElement('p');
      userId.innerText = profile.userId;
      userId.classList.add('bold');
      const userDesc = document.createElement('p');
      userDesc.innerText = profile.desc;
      userDesc.classList.add('feed-cont-more');
      userIdContainer.append(userId, userDesc);
      const xIcon = document.createElement('span');
      xIcon.classList.add('icon-setting', 'x-icon', 'mr15');
      searchList.append(userImg, userIdContainer, xIcon);
      searchListContainer.append(searchList);
    });
  });

// input에 입력이 들어오면 버튼 활성화 하기
const getComment = (e) => {
  let inputText = e.target.value;
  let btn = e.target.form[1];
  if (inputText) {
    btn.disabled = false;
    btn.classList.add('abled');
  } else {
    btn.disabled = true;
    btn.classList.remove('abled');
  }
};

// 게시 버튼을 누르면 댓글 작성 함수 실행 후 버튼 비활성화 & input 비우기
const postComment = (e) => {
  let index = commentForms.indexOf(e.target.form);
  e.preventDefault();
  e.target.form[1].classList.remove('abled');
  writeComment(e.target.form[0].value, index);
  e.target.form[0].value = '';
};

// 댓글 작성 함수
const writeComment = (content, i) => {
  // 댓글 생성 및 추가
  const newComment = document.createElement('p');
  newComment.innerText = content;
  newComment.classList.add('new-com');
  const userId = document.createElement('span');
  userId.innerText = writer;
  userId.classList.add('bold');
  userId.classList.add('mr5');
  newComment.prepend(userId);
  const heart = document.createElement('span');
  heart.classList.add('icon-setting');
  heart.classList.add('heart');
  heart.classList.add('hearts');
  newComment.append(heart);
  const xIcon = document.createElement('span');
  xIcon.classList.add('icon-setting');
  xIcon.classList.add('x-icon');
  newComment.append(xIcon);
  const newComContainer = document.createElement('div');
  newComContainer.classList.add('new-com-container');
  newComContainer.append(newComment);
  // '몇 시간 전 앞'에 새 댓글 추가
  const commentTime = commentTimeArr[i];
  const commentContainer = commentTime.parentNode;
  commentContainer.insertBefore(newComContainer, commentTime);

  // 하트(좋아요 기능)와 X아이콘(삭제 기능)에 이벤트 추가
  const commentHeart = [...document.getElementsByClassName('hearts')];
  const commentX = [...document.getElementsByClassName('x-icon')];
  commentHeart.forEach((heart) => {
    heart.addEventListener('click', heartChange);
  });
  commentX.forEach((xIcon) => {
    xIcon.addEventListener('click', removeComment);
  });
};

// 하트 좋아요 기능
const heartChange = (e) => {
  let heart = e.target;
  if (heart.classList.contains('heart')) {
    heart.classList.remove('heart');
    heart.classList.add('like-heart');
  } else {
    heart.classList.remove('like-heart');
    heart.classList.add('heart');
  }
};

// 댓글 삭제 기능 & 삭제 전 comfirm
const removeComment = (e) => {
  if (confirm('정말 삭제하시겠습니까?')) {
    e.path[1].remove();
  }
};

// form(댓글 추가 기능)에 이벤트 등록
commentForms.forEach((form) => {
  form.addEventListener('input', getComment);
  form[1].addEventListener('click', postComment);
});

// 입력을 시작하면 검색창 보이게 하기
const startSearch = (e) => {
  const listContainer = e.path[1].childNodes[5];
  listContainer.style.visibility = 'visible';
  // 포커스 들어오면 버튼 보이게 하기
  searchBtn.style.visibility = 'visible';
  // 버튼을 누르면 input을 비우고 버튼 사라지게 하기
  searchBtn.addEventListener('click', () => {
    search.value = '';
    searchBtn.style.visibility = 'hidden';
  });
};

// 입력을 끝내면 검색창 사라지게 하기
const endSearch = (e) => {
  const listContainer = e.path[1].childNodes[5];
  listContainer.style.visibility = 'hidden';
};

// 검색을 위한 이벤트 추가
search.addEventListener('focus', startSearch);
search.addEventListener('blur', endSearch);

// 프로필 토글을 위한 이벤트 추가
profileBtn.addEventListener('click', () => {
  // 클릭할 때마다 프로필 메뉴의 visibility 속성 변경
  profileMenu.style.visibility === 'hidden'
    ? (profileMenu.style.visibility = 'visible')
    : (profileMenu.style.visibility = 'hidden');
});
