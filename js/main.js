const commentInput = document.getElementsByClassName("writeComment");
const postingInput = document.getElementsByClassName("posting");
const commentList = document.getElementsByClassName("comments");

fetch("./comments.json")
  .then((res) => res.json())
  .then((data) => {
    let commentArray = data.comments;

    commentArray.forEach((comment) => {

      for (let i = 0; i < commentArray.length; i++) {
        const comments = document.createElement('div');
        const user = document.createElement('span');
        const content = comment.content;

        user.className = "nickname";
        user.textContent = comment.userName;

        comments.append(user, content);
        commentList[i].append(comments);
      }
    })
  })

Array.from(postingInput).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = commentInput[index].value;

    const childEl = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "userName";
    nameSpan.textContent = "eddie ";

    childEl.append(nameSpan, content);

    commentList[index].appendChild(childEl);
  });
});
