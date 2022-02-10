/** @format */

import myArray from "../data/items.json" assert { type: "json" };

const section = document.querySelector(".show");

createSection(myArray);

function createSection(myArray) {
  const div = document.createElement("div");
  div.classList.add("show__container");
  section.appendChild(div);
  appendDiv(myArray);
}

function appendDiv(myArray) {
  const container = document.querySelector(".show__container");
  createTitle(container);
  unOrderedList(container);
  const unOL = document.querySelector(".show__list");
  createLabelLi(unOL);
  for (let i = 0; i < myArray.length; i++) {
    const element = createLi(myArray[i], unOL);
    container.appendChild(element);
  }
}

function createTitle(container) {
  let h2 = document.createElement("h2");
  h2.classList.add("show__title");
  h2.innerText = "Shows";
  container.appendChild(h2);
}

function unOrderedList(container) {
  let ul = document.createElement("ul");
  ul.classList.add("show__list");
  container.appendChild(ul);
}

function createLabelLi(unOL) {
  let li = document.createElement("li");
  li.classList.add("show__header");

  let labelDate = createLabelHead("Date");
  li.appendChild(labelDate);
  let labelVenue = createLabelHead("Venue");
  li.appendChild(labelVenue);
  let labelLocation = createLabelHead("Location");
  li.appendChild(labelLocation);

  let button = document.createElement("button");
  button.classList.add("show__btn");
  button.classList.add("show__btn--inactive");
  button.innerText = "Buy Tickets";
  preventBtnDefault(button);

  li.appendChild(button);
  unOL.appendChild(li);
}
function createLabelHead(text) {
  let label = document.createElement("label");
  label.classList.add("show__content");
  label.innerText = text;
  return label;
}

function createLi(content, unOL) {
  //Li Tags
  let li = document.createElement("li");
  li.classList.add("show__item");

  //Label - Date
  createContent("Date", content.date, li, "show__date");

  //Label - Venue
  createContent("Venue", content.venue, li, "show__venue");

  //Label - Location
  createContent("Location", content.location, li, "show__location");

  //Button
  let button = document.createElement("button");
  button.classList.add("show__btn");
  button.innerText = "Buy Tickets";
  preventBtnDefault(button);

  li.appendChild(button);

  unOL.appendChild(li);

  return unOL;
}

//function which triggers label and p tag creation

function createContent(labelName, content, li, classTag) {
  const label = createLabel(labelName);
  const text = createP(content, classTag);

  li.appendChild(label);
  li.appendChild(text);
}

//creates label tags inside the div.show
function createLabel(text) {
  let label = document.createElement("label");
  label.classList.add("show__label");
  label.innerText = text;
  return label;
}

//creates the P tags inside the div.show
function createP(text, className) {
  let pTag = document.createElement("p");
  pTag.classList.add(className);
  pTag.innerText = text;
  return pTag;
}

function preventBtnDefault(button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
