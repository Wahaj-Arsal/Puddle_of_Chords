/** @format */

const body = document.querySelector("body");
const parent = document.querySelector("section");

let myArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "SAN Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pie 3 East",
    location: "SAN Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "SAN Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "SAN Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "SAN Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "SAN Francisco, CA",
  },
];

createSection(myArray);

function createSection(myArray) {
  const section = document.createElement("form");
  section.classList.add("container");
  body.appendChild(section);
  // console.log(section.className);
  appendDiv(myArray);
}

function appendDiv(myArray) {
  const container = document.querySelector(".container");
  for (let i = 0; i < myArray.length; i++) {
    const element = createDiv(myArray[i]);
    container.appendChild(element);
    // console.log("HERE");
  }
}

function createDiv(content) {
  //Main div
  let div = document.createElement("div");
  div.classList.add("show");

  //Label - Date
  createContent("Date", content.date, div);

  //Label - Venue
  createContent("Venue", content.venue, div);

  //Label - Location
  createContent("Location", content.location, div);

  //Button
  let button = document.createElement("button");
  button.classList.add("show__btn");
  button.innerText = "Buy Tickets";

  div.appendChild(button);

  return div;
}

function createContent(labelName, content, div) {
  const label = createLabel(labelName);
  const text = createP(content, "show__location");

  div.appendChild(label);
  div.appendChild(text);
}

function createLabel(text) {
  let label = document.createElement("label");
  label.classList.add("show__label");
  label.innerText = text;
  return label;
}

export function createP(text, className) {
  let pTag = document.createElement("p");
  pTag.classList.add(className);
  pTag.innerText = text;
  return pTag;
}
