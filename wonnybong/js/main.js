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
// 검색 토글을 위해 필요한 요소 불러오기
const search = document.getElementById('search');
const searchListContainer = document.getElementById('search-list-container');
const searchBtn = document.getElementById('searchBtn');

// 프로필 토글을 위해 필요한 요소 불러오기
const profileBtn = document.getElementById('profile-btn');
const profileMenu = document.getElementById('profile-menu');

const writer = 'guest1';
let feedData;
let userIdData;

// 데이터를 받아와서 피드의 컨텐츠 바꿔주기
fetch('data/feeds.json')
  .then((res) => res.json())
  .then((data) => {
    feedData = data;
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

/* 댓글 추가 기능 구현 */
// comment input에 입력이 들어오면 버튼 활성화 하기
const getComment = (e) => {
  let inputText = e.target.value;
  let btn = e.target.form[1];
  inputText ? (btn.disabled = false) : (btn.disabled = true);
};

// 게시 버튼을 누르면 댓글 작성 함수 실행 후 버튼 비활성화 & input 비우기
const postComment = (e) => {
  let index = commentForms.indexOf(e.target.form);
  e.preventDefault();
  e.target.form[1].disabled = true;
  writeComment(e.target.form[0].value, index);
  e.target.form[0].value = '';
};

// 댓글 작성 함수
const writeComment = (content, i) => {
  // 댓글 생성 및 추가
  const newComContainer = document.createElement('div');
  newComContainer.classList.add('new-com-container');
  newComContainer.innerHTML = `
  <p class="new-com">
    <span class="bold mr5">${writer}</span>
    ${content}
    <span class="icon-setting heart hearts"></span>    
    <span class="icon-setting x-icon"></span>    
  </p>`;
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

/* 검색 토글 기능 구현 */
// 데이터를 받아와서 검색 토글 리스트 구성
fetch('data/profiles.json')
  .then((res) => res.json())
  .then((data) => {
    userIdData = data;
    data.forEach((profile, i) => {
      if (i > 4) {
        return;
      }
      searchListContainer.innerHTML += `
      <li class="search-list vertical-center">
        <img class="search-user-profile mr15 curcle" src=${profile.profileImg} />
        <div>
          <p class="bold">${profile.userId}</p>
          <p class="feed-cont-more">${profile.desc}</p>
        </div>
        <span class="icon-setting x-icon mr15"></span>
      </li>`;
    });
  });

// 입력을 시작하면 검색 토글과 버튼 보이게 하기
const startSearch = (e) => {
  searchListContainer.style.visibility = 'visible';
  searchBtn.style.visibility = 'visible';
};

// 입력을 끝내면 검색 토글 사라지게 하기
const endSearch = () => {
  searchListContainer.style.visibility = 'hidden';
  // input의 value가 없으면 버튼도 사라지게 하기
  if (!search.value) {
    searchBtn.style.visibility = 'hidden';
  }
};

// search input이 들어오면 버튼 보이게 하기
const visibleBtn = () => {
  searchBtn.style.visibility = 'visible';
  const loadingDiv = document.createElement('div');
  // 로딩 출력
  loadingDiv.innerHTML = `
  <li class="search-list vertical-center">
  <img class=" mr15 curcle"/>
  <div>
  <p class="bold">잠시 기다려주세요 . . .</p>
  <p class="feed-cont-more">Now Loading . . .</p>
  </div>
  <span class="icon-setting mr15"></span>
  </li>`;
  searchListContainer.innerHTML = '';
  searchListContainer.appendChild(loadingDiv);
  // 검색 내용과 같은 userId만 출력
  let loading = setTimeout(() => {
    const searchData = userIdData.filter((data) => {
      if (!search.value) {
        return;
      }
      return data.userId.includes(search.value);
    });
    searchListContainer.innerHTML = '';
    searchData.forEach((profile) => {
      searchListContainer.innerHTML += `
      <li class="search-list vertical-center">
      <img class="search-user-profile mr15 curcle" src=${profile.profileImg} />
      <div>
      <p class="bold">${profile.userId}</p>
      <p class="feed-cont-more">${profile.desc}</p>
      </div>
      <span class="icon-setting x-icon mr15"></span>
      </li>`;
    });
    clearTimeout(loading);
    // 일치하는 검색 결과 없음 출력
    if (!searchData.length) {
      searchListContainer.innerHTML = `<li class="search-list vertical-center">
      <img class=" mr15 curcle"/>
        <div>
        <p class="bold">검색 결과 없음</p>
        <p class="feed-cont-more">No Result</p>
      </div>
      <span class="icon-setting mr15"></span>
    </li>`;
    }
  }, 500);

  // 버튼을 누르면 input을 비우고 버튼 사라지게 하기
  searchBtn.addEventListener('click', () => {
    search.value = '';
    searchBtn.style.visibility = 'hidden';
  });
};

// 검색 토글을 위한 이벤트 추가
search.addEventListener('focus', startSearch);
search.addEventListener('blur', endSearch);
search.addEventListener('input', visibleBtn);

/* 프로필 토글 기능 구현 */
// 프로필 토글의 left를 설정해주는 함수
const setLocation = () => {
  let getLocation = profileBtn.getBoundingClientRect();
  profileMenu.style.left = `${getLocation.left - 175}px`;
};

// 프로필 토글을 위한 이벤트 추가
profileBtn.addEventListener('click', () => {
  setLocation();
  // 클릭할 때마다 프로필 메뉴의 visibility 속성 변경
  profileMenu.style.visibility === 'hidden'
    ? (profileMenu.style.visibility = 'visible')
    : (profileMenu.style.visibility = 'hidden');
});

// 브라우저가 resize될 때마다 setLocation 함수 실행
window.addEventListener('resize', () => {
  setLocation();
});
