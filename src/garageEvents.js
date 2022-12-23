import { renderGarageCars } from "./renderGarageCars.js";
import { createNewCars } from "./createNewCars.js";

let addCarToPage = function (e) {
  e.preventDefault();
  let name = createCarForm.elements["carName"].value;
  let color = createCarForm.elements["carColor"].value;
  addCar(name, color);
  renderGarageCars();
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
  renderGarageCars();
};

let generateCars = function () {
  let newCars = createNewCars();
  newCars.forEach((el) => {
    addCar(...el);
  });
  renderGarageCars();
};

let createCarForm = document.querySelector(".garage-block-create-car");
createCarForm.addEventListener("submit", addCarToPage);
let updateCarForm = document.querySelector(".garage-block-update-car");
updateCarForm.addEventListener("submit", updateCar);
let generateButton = document.querySelector("#generate-button");
generateButton.addEventListener("click", generateCars);
