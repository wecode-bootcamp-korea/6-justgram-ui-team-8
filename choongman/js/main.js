const commentInput = document.getElementsByClassName("writeComment");
const postingInput = document.getElementsByClassName("posting");
const commentList = document.getElementsByClassName("comments-3");

console.log(Array.from(postingInput));

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
