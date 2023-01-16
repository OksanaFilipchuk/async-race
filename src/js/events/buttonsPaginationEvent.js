import { renderGarageCars } from "../renderGarageCars";
import { renderWinnerCars } from "../renderWinnerCars";
import { limitGarage, limitWinners } from "../defaultValue";
import { carBlockEvents } from "./carBlockEvents";

export function addCarsBlockEvents() {
  const carsBlock = document.querySelectorAll(".car-block");
  carsBlock.forEach((el) => el.addEventListener("click", carBlockEvents));
}

async function goToPrevPage() {
  const page = +document.querySelector(".page-number").textContent;
  if (page !== 1) {
    await renderGarageCars(page - 1, limitGarage);
  }
  addCarsBlockEvents();
}

async function goToNextPage() {
  const page = +document.querySelector(".page-number").textContent;
  await renderGarageCars(page + 1, limitGarage);
  addCarsBlockEvents();
}

function goToPrevPageWin() {
  const page = +document.querySelector(".winners-page-number").textContent;
  if (page !== 1) {
    renderWinnerCars(page - 1, limitWinners);
  }
}

function goToNextPageWin() {
  const page = +document.querySelector(".winners-page-number").textContent;
  renderWinnerCars(page + 1, limitWinners);
}

export { goToNextPage, goToPrevPage, goToNextPageWin, goToPrevPageWin };
