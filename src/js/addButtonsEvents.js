import { addCarToPage, updateCar, generateCars } from "./garageEvents";
import { startRace, resetRace } from "./buttonsRaceReset";
import { sort } from "./sortFunction";
import {
  goToNextPage,
  goToPrevPage,
  goToNextPageWin,
  goToPrevPageWin,
} from "./buttonsPaginationEvent";

export function addButtonsEvents() {
  const createCarButton = document.querySelector(".garage-block-create-car");
  const updateCarButton = document.querySelector(".garage-block-update-car");
  const generateButton = document.querySelector("#generate-button");
  const raceButton = document.querySelector("#race-button");
  const resetButton = document.querySelector("#reset-button");
  createCarButton.addEventListener("submit", addCarToPage);
  updateCarButton.addEventListener("submit", updateCar);
  generateButton.addEventListener("click", generateCars);
  raceButton.addEventListener("click", startRace);
  resetButton.addEventListener("click", resetRace);

  // sort
  const ascWinsSort = document.querySelector(".ascending-wins");
  const descWinsSort = document.querySelector(".descending-wins");
  const ascTimeSort = document.querySelector(".ascending-time");
  const descTimeSort = document.querySelector(".descending-time");
  [ascWinsSort, descWinsSort, ascTimeSort, descTimeSort].forEach((el) => {
    el.addEventListener("click", sort);
  });

  // pagination
  const prevButtonWin = document.querySelector("#prev-button-winners");
  const nextButtonWin = document.querySelector("#next-button-winners");
  const prevButtonGarage = document.querySelector("#prev-button-garage");
  const nextButtonGarage = document.querySelector("#next-button-garage");
  prevButtonWin.addEventListener("click", goToPrevPageWin);
  nextButtonWin.addEventListener("click", goToNextPageWin);
  prevButtonGarage.addEventListener("click", goToPrevPage);
  nextButtonGarage.addEventListener("click", goToNextPage);
}
