/** @format */

// import { createP } from "./build-shows-page";

const commentName = document.querySelector(".comment__name-input");
const commentText = document.querySelector(".comment__text-input");
const commentBtn = document.querySelector(".comment__btn");

const displayReviews = document.querySelector(".display__reviews");

const display = document.querySelector(".display");

let myArray = [
  {
    name: "Wahaj Arsal",
    comment: "This was amazing!",
  },
  {
    name: "John Doe",
    comment: "This was good!",
  },
  {
    name: "Doe John",
    comment: "Amazing!",
  },
];

loadArray(myArray);

commentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pushObject(commentName, commentText);
});

function pushObject(name, comment) {
  let myObj = {};
  myObj.name = name.value;
  myObj.comment = comment.value;
  myArray.push(myObj);
  loadArray(myArray);
  // createHTML(myObj);
}

function loadArray(myArray) {
  display.innerHTML = "";
  createTitle(display);
  createContent(display);
  for (let i = 0; i < myArray.length; i++) {
    const element = createHTML(myArray[i]);
    if (display.children.length > 0) {
      const displayComment = document.querySelector(".display__comment");
      display.insertBefore(element, displayComment);
    } else {
      display.appendChild(element);
    }
  }
}

function createTitle(display) {
  let h2 = document.createElement("h2");
  h2.classList.add("display__title");
  h2.innerText = "Join the Conversation";
  display.appendChild(h2);
}

function createContent(display) {
  let div = document.createElement("div");
  div.classList.add("display__content");
  display.appendChild(div);
  createSubSections(div);
}

function createSubSections(_div) {
  const displayContent = document.querySelector(".display__content");
  let picture = createPicture();
  displayContent.appendChild(picture);
}

function createPicture() {
  let img = document.createElement("div");
  img.classList.add("display__picture");
  return img;
}

function createHTML(comment) {
  const element = document.createElement("div");
  element.classList.add("display__comment");

  const title = createLabel(comment.name, "display__name");
  const text = createP(comment.comment, "display__text");

  element.appendChild(title);
  element.appendChild(text);

  return element;
}

function createLabel(comment, className) {
  let title = document.createElement("label");
  title.classList.add(className);
  title.innerText = comment;
  return title;
}
//creates the P tags inside the div.show
function createP(text, className) {
  let pTag = document.createElement("p");
  pTag.classList.add(className);
  pTag.innerText = text;
  return pTag;
}
