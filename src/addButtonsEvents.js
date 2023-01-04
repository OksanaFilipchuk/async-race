import { addCarToPage, updateCar, generateCars } from "./garageEvents.js";
import { startRace, resetRace } from "./raceResetButtons.js";
import { goCar, stopCar } from "./goStopButtons.js";
import { sort } from "./sortFunction.js";

let createCarButton = document.querySelector(".garage-block-create-car");
let updateCarButton = document.querySelector(".garage-block-update-car");
let generateButton = document.querySelector("#generate-button");
let raceButton = document.querySelector("#race-button");
let resetButton = document.querySelector("#reset-button");

createCarButton.addEventListener("submit", addCarToPage);
updateCarButton.addEventListener("submit", updateCar);
generateButton.addEventListener("click", generateCars);
raceButton.addEventListener("click", startRace);
resetButton.addEventListener("click", resetRace);

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("go-button")) {
    let id = event.target.parentNode.id;
    goCar(id);
  }
  if (event.target.classList.contains("stop-button")) {
    let id = event.target.parentNode.id;
    stopCar(id);
  }
});
//sort
let ascWinsSort = document.querySelector(".ascending-wins");
let descWinsSort = document.querySelector(".descending-wins");
let ascTimeSort = document.querySelector(".ascending-time");
let descTimeSort = document.querySelector(".descending-time");
[ascWinsSort, descWinsSort, ascTimeSort, descTimeSort].forEach((el) => {
  el.addEventListener("click", sort);
});
