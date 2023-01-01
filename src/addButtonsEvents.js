import { addCarToPage, updateCar, generateCars } from "./garageEvents.js";
import { startRace, resetRace } from "./raceResetButtons.js";
import { goCar, stopCar } from "./goStopButtons.js";

document
  .querySelector(".garage-block-create-car")
  .addEventListener("submit", addCarToPage);
document
  .querySelector(".garage-block-update-car")
  .addEventListener("submit", updateCar);
document
  .querySelector("#generate-button")
  .addEventListener("click", generateCars);

document.querySelector("#race-button").addEventListener("click", startRace);
document.querySelector("#reset-button").addEventListener("click", resetRace);

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("go-button")) {
    let id = event.target.parentNode.id;
    goCar(id);
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("stop-button")) {
    let id = event.target.parentNode.id;
    stopCar(id);
  }
});
