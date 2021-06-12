// Import stylesheets
import './style.css';

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM Loaded");
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// });



let btn = document.querySelector("#button");
let input = document.querySelector("#userInput");
let ul = document.querySelector(".ulList");

function inputLength() {
  return input.value.length;
}

function createLiElement() {
  let div = document.createElement("div");
  div.classList.add("itemWrapper");

  let li = document.createElement("li");
  li.classList.add("eachItem");
  li.appendChild(document.createTextNode(input.value));

  let delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-outline-danger", "btn-sm", "delItem");
  delBtn.innerHTML = "Delete";

  ul.appendChild(div);
  div.append(li, delBtn);
  input.value = "";
}

function addTaskOnCLick() {
  if (inputLength()) {
    createLiElement();
  }
}

function addTaskOnKeyPress(event) {
  if (input.value.length && event.keyCode === 13) {
    createLiElement();
  }
}

function itemDone(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("itemDone");
  }
}
function itemDelete(e) {
  // console.log(e.target.className);
  if (e.target.className.includes("delItem")) {
    e.target.parentElement.remove();
  }
}

function handleItemClick(e) {
  itemDone(e);
  itemDelete(e);
}

btn.addEventListener("click", addTaskOnCLick);
input.addEventListener("keypress", addTaskOnKeyPress);
ul.addEventListener("click", handleItemClick);
