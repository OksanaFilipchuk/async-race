import { renderGarageCars } from "./renderGarageCars.js";
import { generateNewCars } from "./generateNewCars.js";

let addCarToPage = function (e) {
  e.preventDefault();
  let name = createCarForm.elements["carName"].value;
  let color = createCarForm.elements["carColor"].value;
  if (name) {
    addCar(name, color);
  } else {
    addCar(...generateNewCars(1)[0]);
  }

  let page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page, 7);
};
let addCar = async function (name, color) {
  let doc = {
    name: name,
    color: color,
  };
  await fetch("http://localhost:3000/garage", {
    method: "Post",
    body: JSON.stringify(doc),
    headers: { "Content-type": "application/json" },
  });
};

let updateCar = async function (e) {
  e.preventDefault();
  let doc = {
    name: updateCarForm.elements["updateName"].value,
    color: updateCarForm.elements["updateColor"].value,
  };
  await fetch(`http://localhost:3000/garage/${updateCarForm.id}`, {
    method: "Put",
    body: JSON.stringify(doc),
    headers: { "Content-type": "application/json" },
  });
  let page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page, 7);
};

let generateCars = async function () {
  let newCars = generateNewCars(20);
  newCars.forEach((el) => {
    addCar(...el);
  });
  let page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page, 7);
};

let createCarForm = document.querySelector(".garage-block-create-car");
createCarForm.addEventListener("submit", addCarToPage);
let updateCarForm = document.querySelector(".garage-block-update-car");
updateCarForm.addEventListener("submit", updateCar);
let generateButton = document.querySelector("#generate-button");
generateButton.addEventListener("click", generateCars);
