/** @format */

import {
  API_URL,
  ACCESS_API_KEY,
  createP,
  createLabel,
  createInput,
  createDiv,
  createButton,
  createIcons,
  createTextAreaInner,
} from "./helper-functions.js";

const display = document.querySelector(".display");
const commentText = document.querySelector(".comment");

createContent(display);

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

//******** CREATE FORM COMMENT BUTTON EVENT LISTENER START ******** */

const commentBtn = document.querySelector(".display__btn");

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

//******** CREATE FORM COMMENT BUTTON EVENT LISTENER END ******** */

// ******** RENDER COMMENTS START ********

function pushObject(name, comment) {
  let myObj = {};
  myObj.name = name.value;
  myObj.comment = comment.value;
  // apiObj = myObj;
  // console.log("obj1", myObj);
  // console.log("myObj", apiObj);
  // myObj.timestamp = new Date();
  postCommentData(myObj);
  // commentArray.push(myObj);
  // displayComment(commentArray);
}

function clearHTML() {
  while (commentText.firstChild) {
    commentText.firstChild.remove();
  }
}

function displayComment(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    const element = createHTML(myArray[i]);
    commentText.appendChild(element);
  }
}

// function likeEvent() {
//   const commentLikeBtn = document.querySelector(".comment__like");
//   let likeTile;
// }

// function deleteEvent() {
//   const commentDeleteBtn = document.querySelector(".comment__delete");
//   let deleteTile;
// }

function deleteComment(e) {
  e.remove();
  axios
    .delete(API_URL + "comments" + "/" + e.id + ACCESS_API_KEY)
    .then((response) => {
      getCommentData();
    })
    .catch((err) => console.log("My POST API Error: ", err));
}

function likeComment(e) {
  // e.remove();
  let id = e.id;
  // console.log(id);
  axios
    .put(
      `https://project-1-api.herokuapp.com/comments/${id}/like/?api_key=9b6a5a60-a04e-4c65-85dd-71b62986ca6e`
    )
    .then((response) => {
      // console.log(response);
      getCommentData();
    })
    .catch((err) => console.log("My POST API Error: ", err));
}

function createHTML(comment) {
  // console.log(comment);
  const element = document.createElement("div");
  element.classList.add("comment__tile");
  element.setAttribute("id", comment.id);

  const image = document.createElement("div");
  image.classList.add("comment__picture");

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment__content");

  const commentHeader = createDiv("comment__header");
  const commentName = createP("comment__name", comment.name);
  const commentIcons = createDiv("comment__icons");

  const commentLike = createButton("comment__like", comment.likes);
  commentLike.addEventListener("click", (e) => {
    let likeTile =
      e.target.parentElement.parentElement.parentElement.parentElement;
    // console.log(likeTile);
    likeComment(likeTile);
    // console.log(likeTile);
  });

  const commentDelete = createButton("comment__delete", null);
  commentDelete.addEventListener("click", (e) => {
    let deleteTile =
      e.target.parentElement.parentElement.parentElement.parentElement;
    // console.log(deleteTile.id);
    deleteComment(deleteTile);
  });

  const commentLikeImg = createIcons("comment__img", "like", "like button");
  const commentDeleteImg = createIcons(
    "comment__img",
    "delete",
    "delete button"
  );

  let date = newMoment(comment.timestamp);

  const commentDate = createP("comment__date", date);
  const commentComment = createP("comment__text", comment.comment);

  element.appendChild(image);
  element.appendChild(commentContent);

  commentContent.appendChild(commentHeader);
  commentContent.appendChild(commentComment);
  commentContent.appendChild(commentIcons);

  commentHeader.appendChild(commentName);
  commentHeader.appendChild(commentDate);

  commentIcons.appendChild(commentLike);
  commentIcons.appendChild(commentDelete);

  commentLike.appendChild(commentLikeImg);
  commentDelete.appendChild(commentDeleteImg);

  return element;
}

const commentInputName = document.querySelector(".display__name");
const commentInputText = document.querySelector(".display__comment");

// ******** LIKE/DELETE BUTTONS START ********

// commentDeleteBtn.addEventListener("click", (e) => {
//   if (e.target.classList.contains("comment__img")) {
//     // let itemDelete = e.target.parentElement.parentElement.parentElement;
//     // itemDelete.remove();
//   }
// });

// ******** LIKE/DELETE BUTTONS END ********

function newMoment(commentDate) {
  let x = new moment(commentDate);
  // console.log("THIS IS X " + x);
  let momentDate = new moment();
  let y = momentDate;

  // console.log("THIS IS Y " + y);

  let duration = moment.duration(-y.diff(x)).humanize(true);

  // var durationYears = duration.asYears();

  return duration;
}

window.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM FULLY LOADED");
  getCommentData();
});

//function gets the comments data as an object and stores it in myArray. Then calls function displayComment to cycle through and render.
function getCommentData() {
  axios
    .get(API_URL + "comments" + ACCESS_API_KEY)
    .then((response) => {
      let commentArray = [];
      for (let i = 0; i < response.data.length; i++) {
        commentArray.push(response.data[i]);
      }
      commentArray.sort((first, last) => last.timestamp - first.timestamp);
      // console.log(commentArray);
      clearHTML();
      displayComment(commentArray);
    })
    .catch((err) => console.log("My GET API Error: ", err));
}

// ******** RENDER COMMENTS END ********

// ******** POST COMMENTS START ********
function postCommentData(myObj) {
  axios
    .post(API_URL + "comments" + ACCESS_API_KEY, myObj)
    .then((response) => {
      // console.log(response);
      getCommentData();
    })

    .catch((err) => console.log("My POST API Error: ", err));
}

// ******** POST COMMENTS END ********
