import { renderGarageCars } from "./renderGarageCars.js";

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
export function changePagination(page, totalCount, limit) {
  prevButton.disabled = page === 1 ? true : false;
  nextButton.disabled = totalCount - page * limit > 0 ? false : true;
}
