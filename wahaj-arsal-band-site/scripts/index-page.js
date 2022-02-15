/** @format */

import { API_URL, ACCESS_API_KEY, createP } from "./helper-functions.js";

const display = document.querySelector(".display");
const commentText = document.querySelector(".comment");

let commentArray = [];

createContent(display);
getCommentData();

// ******** CREATE FORM START ********
function createContent(display) {
  createTitle(display);
  let div = document.createElement("div");
  div.classList.add("display__content");
  display.appendChild(div);
  createSubSections();
}

function createTitle(display) {
  let h2 = document.createElement("h2");
  h2.classList.add("display__title");
  h2.innerText = "Join the Conversation";
  display.appendChild(h2);
}

function createSubSections() {
  const displayContent = document.querySelector(".display__content");
  let picture = createPicture();
  let form = createForm();
  displayContent.appendChild(picture);
  displayContent.appendChild(form);
}

function createPicture() {
  let img = document.createElement("div");
  img.classList.add("display__picture");
  return img;
}

function createForm() {
  let form = document.createElement("form");
  form.classList.add("display__form");

  const nameTitle = createLabel("Name", "display__label");
  let nameInput = createInput(
    "display__name",
    "placeholder",
    "Enter your name"
  );
  form.appendChild(nameTitle);
  form.appendChild(nameInput);

  const commentTitle = createLabel("Comment", "display__label");
  let commentInput = createTextAreaInner(
    "display__comment",
    "placeholder",
    "Add a new comment"
  );
  form.appendChild(commentTitle);
  form.appendChild(commentInput);

  let commentBtn = document.createElement("button");
  commentBtn.classList.add("display__btn");
  commentBtn.setAttribute("type", "button");
  commentBtn.innerText = "Comment";
  form.appendChild(commentBtn);
  // preventBtnDefault(commentBtn);
  return form;
}

// ******** CREATE FORM END ********

// ******** RENDER COMMENTS START ********

function pushObject(name, comment) {
  let myObj = {};
  myObj.name = name.value;
  myObj.comment = comment.value;
  myObj.timestamp = new Date();
  commentArray.push(myObj);
  displayComment(commentArray);
}

function displayComment(myArray) {
  console.log(myArray.length);
  commentText.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
    const element = createHTML(myArray[i]);
    commentText.appendChild(element);
    if (display.children.length > 0) {
      commentText.prepend(element);
    } else {
      commentText.appendChild(element);
    }
  }
}

function createHTML(comment) {
  // console.log(comment);
  const element = document.createElement("div");
  element.classList.add("comment__tile");

  const image = document.createElement("div");
  image.classList.add("comment__picture");

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment__content");

  const commentHeader = createDiv("comment__header");
  const commentName = createP("comment__name", comment.name);

  // let anotherMoment = newMoment(comment.date);

  let date = getDate(comment.timestamp);

  const commentDate = createP("comment__date", date);
  const commentComment = createP("comment__text", comment.comment);

  element.appendChild(image);
  element.appendChild(commentContent);

  commentContent.appendChild(commentHeader);
  commentContent.appendChild(commentComment);

  commentHeader.appendChild(commentName);
  commentHeader.appendChild(commentDate);

  return element;
}

function createDiv(className) {
  let div = document.createElement("div");
  div.classList.add(className);
  return div;
}

function createTextAreaInner(className, placeHolderType, placeHolderText) {
  let textArea = document.createElement("textarea");
  textArea.classList.add(className);
  textArea.setAttribute(placeHolderType, placeHolderText);
  // textArea.innerText = content;
  return textArea;
}

//creates the P tags inside the div.show
// function createP(className, text) {
//   let pTag = document.createElement("p");
//   pTag.classList.add(className);
//   pTag.innerText = text;
//   return pTag;
// }

function createLabel(comment, className) {
  let title = document.createElement("label");
  title.classList.add(className);
  title.innerText = comment;
  return title;
}

function createInput(className, placeHolderType, placeHolderText) {
  let input = document.createElement("input");
  input.classList.add(className);
  input.setAttribute(placeHolderType, placeHolderText);
  return input;
}

const commentBtn = document.querySelector(".display__btn");
const commentInputName = document.querySelector(".display__name");
const commentInputText = document.querySelector(".display__comment");

commentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (commentInputName.value == "" || commentInputText.value == "") {
    if (commentInputName.value == "" && commentInputText.value == "") {
      commentInputName.classList.add("display__name--error");
      commentInputText.classList.add("display__comment--error");
    } else if (commentInputText.value == "") {
      commentInputText.classList.add("display__comment--error");
      commentInputName.classList.remove("display__name--error");
    } else {
      commentInputText.classList.remove("display__comment--error");
      commentInputName.classList.add("display__name--error");
    }
  } else {
    commentInputName.classList.remove("display__name--error");
    commentInputText.classList.remove("display__comment--error");
    pushObject(commentInputName, commentInputText);
    commentInputName.value = null;
    commentInputText.value = null;
  }
});

//date

function getDate(date) {
  // var currentDate = new moment();
  let currentDate = new Date(date);
  // console.log(currentDate);
  return currentDate;
}
// function newMoment(commentDate) {
//   let x = commentDate;
//   let y = new moment();

//   let duration = moment.duration(-y.diff(x)).humanize(true);
//   // var durationYears = duration.asYears();

//   return duration;
// }

// axios
//   .get(usersURL)
//   .then((response) => {
//     resPage.innerText = response.data.page;
//     resTotalPages.innerText = response.data.total_pages;
//     console.log(response);
//     myArray = reponse.data.page;
//     console.log(myArray);
//     console.log(response.data.page);
//     console.log(response.data.total_pages);

//     response.forEach((element) => {
//       console.log(element.data);
//     });
//   })
//   .catch((err) => console.log("MY API Error: ", err));

// getShows();

//function gets the comments data as an object and stores it in myArray. Then calls function displayComment to cycle through and render.
function getCommentData() {
  axios
    .get(API_URL + "comments" + ACCESS_API_KEY)
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        commentArray.push(response.data[i]);
      }
      displayComment(commentArray);
    })
    .catch((err) => console.log("My API Error: ", err));
}

// ******** RENDER COMMENTS END ********
