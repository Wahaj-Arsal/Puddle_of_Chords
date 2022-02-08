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
  console.log(section.className);
  appendDiv(myArray);
  // appendP(myArray);
}

function appendDiv(myArray) {
  const container = document.querySelector(".container");
  //   console.log(container);
  for (i = 0; i < myArray.length; i++) {
    element = createDiv(myArray[i]);
    container.appendChild(element);
    console.log("HERE");
  }
}

function createDiv(content) {
  //Main div
  let div = document.createElement("div");
  div.classList.add("show");

  //Label - Date
  let date = document.createElement("label");
  date.classList.add("show__label");
  date.innerText = "Date";
  let dateTitle = document.createElement("p");
  dateTitle.classList.add("show__title");
  dateTitle.innerText = content.date;

  //Label - Venue
  let venue = document.createElement("label");
  venue.classList.add("show__label");
  venue.innerText = "Venue";
  let venueTitle = document.createElement("p");
  venueTitle.classList.add("show__venue");
  venueTitle.innerText = content.venue;

  //Label - Location
  let location = document.createElement("label");
  location.classList.add("show__label");
  location.innerText = "Location";
  let locationTitle = document.createElement("p");
  locationTitle.classList.add("show__location");
  locationTitle.innerText = content.location;

  //Button
  let button = document.createElement("button");
  button.classList.add("show__btn");
  button.innerText = "Buy Tickets";

  div.appendChild(date);
  div.appendChild(dateTitle);

  div.appendChild(venue);
  div.appendChild(venueTitle);

  div.appendChild(location);
  div.appendChild(locationTitle);

  div.appendChild(button);

  return div;
}

// function appendP(myArray) {
//   const itemParent = document.querySelector(".show");
//   //   console.log(container);
//   for (i = 0; i < myArray.length; i++) {
//     element = createP(myArray[i]);
//     itemParent.appendChild(element);
//     // console.log("HERE");
//   }
// }

// function createP() {
//   let newElement = document.createElement("p");
//   newElement.className = "class";
//   newElement.innerHTML = "Print Item";
//   return newElement;
// }
// function appendItem() {
//   const item = document.querySelector(".show");
//   //   console.log(container);
//   for (i = 0; i < myArray.length; i++) {
//     newElement = createItem(myArray[i]);
//     item.appendChild(newElement);
//   }
// }

// function createItem() {
//   let p = document.createElement("p");
//   p.classList.add("class");
//   //   item.appendChild(p);
//   return p;
// }
