const commentForms = [...document.getElementsByClassName("comment-form")];
const user = "2021Bong";
const commentTimeArr = [...document.getElementsByClassName("post-act-time")];

const getComment = (e) => {
  let inputText = e.target.value;
  let btn = e.target.form[1];
  if (inputText) {
    btn.disabled = false;
    btn.classList.add("abled");
  } else {
    btn.disabled = true;
    btn.classList.remove("abled");
  }
};

const postComment = (e) => {
  let index = commentForms.indexOf(e.target.form);
  e.preventDefault();
  e.target.form[1].classList.remove("abled");
  writeComment(e.target.form[0].value, user, index);
  e.target.form[0].value = "";
};

const writeComment = (content, writer, i) => {
  const newComment = document.createElement("p");
  newComment.innerText = content;
  const userId = document.createElement("span");
  userId.innerText = writer;
  userId.classList.add("bold");
  userId.classList.add("mr5");
  newComment.prepend(userId);
  // console.log(newComment);
  const commentTime = commentTimeArr[i];
  const commentContainer = commentTime.parentNode;
  commentContainer.insertBefore(newComment, commentTime);
};

commentForms.forEach((form) => {
  form.addEventListener("input", getComment);
  form[1].addEventListener("click", postComment);
});
