const commentForms = [...document.getElementsByClassName('feed-com-form')];
const commentTimeArr = [...document.getElementsByClassName('feed-cont-time')];
const idUidArr = [...document.getElementsByClassName('feed-id-uid')];
const contUidArr = [...document.getElementsByClassName('feed-cont-uid')];
const feedImgArr = [...document.getElementsByClassName('img')];
const likeCountArr = [...document.getElementsByClassName('like-count')];
const commentContentArr = [...document.getElementsByClassName('feed-cont-com')];
const allCommentArr = [...document.getElementsByClassName('feed-all-comment')];
let datalist;
const writer = 'guest1';
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

const postComment = (e) => {
  let index = commentForms.indexOf(e.target.form);
  e.preventDefault();
  e.target.form[1].classList.remove('abled');
  writeComment(e.target.form[0].value, index);
  e.target.form[0].value = '';
};

const writeComment = (content, i) => {
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
  const commentTime = commentTimeArr[i];
  const commentContainer = commentTime.parentNode;
  commentContainer.insertBefore(newComContainer, commentTime);

  const commentHeart = [...document.getElementsByClassName('hearts')];
  const commentX = [...document.getElementsByClassName('x-icon')];
  commentHeart.forEach((heart) => {
    heart.addEventListener('click', heartChange);
  });
  commentX.forEach((xIcon) => {
    xIcon.addEventListener('click', removeComment);
  });
};

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

const removeComment = (e) => {
  if (confirm('정말 삭제하시겠습니까?')) {
    e.path[1].remove();
  }
};

commentForms.forEach((form) => {
  form.addEventListener('input', getComment);
  form[1].addEventListener('click', postComment);
});
