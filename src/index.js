/*

document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

*/

const form = document.querySelector("form")

const ul = document.querySelector("#list ul")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newList = document.createElement("li");
  newList.textContent = form["new-task-description"].value;
  ul.appendChild(newList);
  form.reset();
  const button = document.createElement("button");
  button.textContent = "x";
  newList.appendChild(button);
  button.addEventListener("click", (e) => {
    newList.remove();
  });
});


