/** @format */

//API broken down to be called as required in helper functions below
export const API_URL = "https://project-1-api.herokuapp.com/";
export const ACCESS_API_KEY = "?api_key=9b6a5a60-a04e-4c65-85dd-71b62986ca6e";

// Create P Tag
export function createP(className, text) {
  let pTag = document.createElement("p");
  pTag.classList.add(className);
  pTag.innerText = text;
  return pTag;
}

export function createLabel(comment, className) {
  let label = document.createElement("label");
  label.classList.add(className);
  label.innerText = comment;
  return label;
}

export function createLabelHead(text) {
  let label = document.createElement("label");
  label.classList.add("show__content");
  label.innerText = text;
  return label;
}

export function createInput(className, placeHolderType, placeHolderText) {
  let input = document.createElement("input");
  input.classList.add(className);
  input.setAttribute(placeHolderType, placeHolderText);
  return input;
}
