import { renderGarageCars } from "./renderGarageCars";
import { renderWinnerCars } from "./renderWinnerCars";

function goToPrevPage() {
  const page = +document.querySelector(".page-number").textContent;
  if (page !== 1) {
    renderGarageCars(page - 1, 7);
  }
}

function goToNextPage() {
  const page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page + 1, 7);
}

function goToPrevPageWin() {
  const page = +document.querySelector(".winners-page-number").textContent;
  if (page !== 1) {
    renderWinnerCars(page - 1, 10);
  }
}

function goToNextPageWin() {
  const page = +document.querySelector(".winners-page-number").textContent;
  renderWinnerCars(page + 1, 10);
}

export { goToNextPage, goToPrevPage, goToNextPageWin, goToPrevPageWin };
