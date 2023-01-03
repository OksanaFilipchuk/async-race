import { renderGarageCars } from "./renderGarageCars.js";
import { renderWinnerCars } from "./renderWinnerCars.js";

let prevButton = document.querySelector("#prev-button");
let nextButton = document.querySelector("#next-button");
prevButton.addEventListener("click", goToPrevPage);
nextButton.addEventListener("click", goToNextPage);

function goToPrevPage() {
  let page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page - 1, 7);
}

function goToNextPage() {
  let page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page + 1, 7);
}

let prevButtonWin = document.querySelector("#prev-button-winners");
let nextButtonWin = document.querySelector("#next-button-winners");
prevButtonWin.addEventListener("click", goToPrevPageWin);
nextButtonWin.addEventListener("click", goToNextPageWin);

function goToPrevPageWin() {
  let page = +document.querySelector(".winners-page-number").textContent;
  renderWinnerCars(page - 1, 10);
}

function goToNextPageWin() {
  let page = +document.querySelector(".winners-page-number").textContent;
  renderWinnerCars(page + 1, 10);
}

export function changePagination(page, totalCount, limit) {
  prevButton.disabled = page === 1 ? true : false;
  nextButton.disabled = totalCount - page * limit > 0 ? false : true;
}
export function changePaginationWin(page, totalCount, limit) {
  prevButtonWin.disabled = page === 1 ? true : false;
  nextButtonWin.disabled = totalCount - page * limit > 0 ? false : true;
}
