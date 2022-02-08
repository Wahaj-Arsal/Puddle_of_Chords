/** @format */

const commentName = document.querySelector(".comment__name-input");
const commentText = document.querySelector(".comment__text-input");
const commentBtn = document.querySelector(".comment__btn");

const displayReviews = document.querySelector(".display__reviews");
const displayName = document.querySelector(".display__name");
const displayText = document.querySelector(".display__text");

// console.log(commentBtn);

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
}

function loadArray(myArray) {
  displayReviews.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    element = createHTML(myArray[i]);
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
  element.innerHTML = `
        <h5 class="display__name">${comment.name}</h5>
        <p class="display__text">${comment.comment}</p>
      `;
  return element;
}

/** Whats Best?
 * Insert information onto the page as soon as it goes into the array?
 * Or push items into the array and then for.each the whole array... possible duplication?
 *     Maybe only for.each when the page is refreshed?? so all the information is displayed?
 */
// function displayComment(comment) {
//   const element = document.createElement("div");
//   element.classList.add("comment");
//   element.innerHTML = `
//     <h5 class="display__name">${comment.name}</h5>
//     <p class="display__comment">${comment.comment}</p>
//   `;
//   displayReviews.insertAdjacentElement(element, comment);
// }

// function displayComment(comment) {
//   const element = createHTML(comment);
//   if (displayReviews.children.length > 0) {
//     const displayComment = document.querySelector(".display__comment");
//     // console.log(displayComment);
//     displayReviews.insertBefore(element, displayComment);
//     // console.log("TRUE");
//   } else {
//     displayReviews.appendChild(element);
//     // console.log("FALSE");
//   }
// }

// function loadComments(myArray) {
//   let html = "";
//   myArray.forEach((element) => {
//     html += `
//         <div class = "display__comment">
//             <h5 class="display__name">${element.name}</h5>
//             <p class="display__text">${element.comment}</p>
//         </div>
//       `;
//   });
//   displayReviews.innerHTML = html;
// }

// function loadComments(myArray) {}
