/** @format */

const body = document.querySelector(".shows");

let myArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pie 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

createSection(myArray);

function createSection(myArray) {
  const section = document.createElement("form");
  section.classList.add("container");
  body.appendChild(section);
  appendDiv(myArray);
}

function appendDiv(myArray) {
  const container = document.querySelector(".container");

  for (let i = 0; i < myArray.length; i++) {
    const element = createDiv(myArray[i]);
    container.appendChild(element);
  }
}

function createTitle() {
  let div = document.createElement("div");
  div.classList.add("show");
}

function createDiv(content) {
  //Main div
  let div = document.createElement("div");
  div.classList.add("show");

  //Label - Date
  createContent("Date", content.date, div, "show__date");

  //Label - Venue
  createContent("Venue", content.venue, div, "show__venue");

  //Label - Location
  createContent("Location", content.location, div, "show__location");

  //Button
  let button = document.createElement("button");
  button.classList.add("show__btn");
  button.innerText = "Buy Tickets";
  preventBtnDefault(button);

  div.appendChild(button);

  return div;
}

//function which triggers label and p tag creation

function createContent(labelName, content, div, classTag) {
  const label = createLabel(labelName);
  const text = createP(content, classTag);

  div.appendChild(label);
  div.appendChild(text);
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
