/** @format */

// import { createP } from "./build-shows-page";

const commentName = document.querySelector(".comment__name-input");
const commentText = document.querySelector(".comment__text-input");
const commentBtn = document.querySelector(".comment__btn");

const displayReviews = document.querySelector(".display__reviews");

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
  displayReviews.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const element = createHTML(myArray[i]);
    if (displayReviews.children.length > 0) {
      const displayComment = document.querySelector(".display__comment");
      displayReviews.insertBefore(element, displayComment);
    } else {
      displayReviews.appendChild(element);
    }
  }
}

function createHTML(comment) {
  const element = document.createElement("div");
  element.classList.add("display__comment");

  const title = createTitle(comment.name, "display__name");
  const text = createP(comment.comment, "display__text");

  element.appendChild(title);
  element.appendChild(text);

  return element;
}

function createTitle(comment, className) {
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
