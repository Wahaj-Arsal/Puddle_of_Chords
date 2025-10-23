/** @format */

// import {data} from "../data/items.json" assert { type: "json" };
import {
  API_URL,
  ACCESS_API_KEY,
  createP,
  createLabel,
  createLabelHead,
} from "./helper-functions.js";

let showsArray = [];
// let myArray = "";

const section = document.querySelector(".show");

getShows();

function getShows() {
  fetch("../data/items.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.forEach((i) => {
        showsArray.push(i);
      });
      console.log(showsArray);
      createSection(showsArray);
      const showItem = document.querySelectorAll(".show__item");
      clickListener(showItem);
      mouseOverListener(showItem);
    });
}

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
  myArray.forEach((i) => {
    const element = createLi(i, unOL);
    container.appendChild(element);
  });
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

function createLi(content, unOL) {
  //Li Tags
  let li = document.createElement("li");
  li.classList.add("show__item");

  //Create Date Format
  let options = {
    day: "2-digit",
    weekday: "short",
    month: "short",
    year: "numeric",
  };
  options.month.slice(4);
  let newDate = new Date(parseInt(content.date)).toLocaleDateString(
    "en-UK",
    options
  );
  let updatedDate = newDate.replace(",", "");

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
function createContent(insideText, content, li, classTag) {
  const label = createLabel(insideText, "show__label");
  const text = createP(classTag, content);

  li.appendChild(label);
  li.appendChild(text);
}

function preventBtnDefault(button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

function clickListener(showItem) {
  showItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("show__label") ||
        e.target.classList.contains("show__date") ||
        e.target.classList.contains("show__venue") ||
        e.target.classList.contains("show__location")
      ) {
        let parent = e.target.parentElement;
        parent.classList.toggle("show__item--active");
        parent.classList.remove("show__item--hover");
      } else {
        e.target.classList.toggle("show__item--active");
        e.target.classList.remove("show__item--hover");
      }
    });
  });
}

function mouseOverListener(showItem) {
  showItem.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (
        e.target.classList.contains("show__label") ||
        e.target.classList.contains("show__date") ||
        e.target.classList.contains("show__venue") ||
        e.target.classList.contains("show__location")
      ) {
        let parent = e.target.parentElement;
        if (!parent.classList.contains("show__item--active")) {
          parent.classList.add("show__item--hover");
        }
      } else {
        if (!e.target.classList.contains("show__item--active")) {
          e.target.classList.add("show__item--hover");
        }
      }
    });
    item.addEventListener("mouseleave", (e) => {
      if (
        e.target.classList.contains("show__label") ||
        e.target.classList.contains("show__date") ||
        e.target.classList.contains("show__venue") ||
        e.target.classList.contains("show__location")
      ) {
        let parent = e.target.parentElement;
        parent.classList.remove("show__item--hover");
      } else {
        e.target.classList.remove("show__item--hover");
      }
    });
  });
}
