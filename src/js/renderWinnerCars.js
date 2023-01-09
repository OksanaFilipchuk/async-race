import { winnerRowCreate } from "./dom/winnerRowCreate";
import { getGarageCar } from "./requests/requests";

async function addWinnerCar(element, index, page, limit) {
  const { name, color } = await getGarageCar(element.id);
  winnerRowCreate(element, index, page, limit, name, color);
}

async function renderWinnerCars(page, limit) {
  const response = await fetch(
    `http://localhost:3000/winners?_page=${page}&_limit=${limit}`
  );

  const json = await response.json();
  const totalCount = response.headers.get("x-total-count");

  const winnerCount = document.querySelector(".winners-count");
  winnerCount.textContent = `Winners (${totalCount})`;
  document.querySelector(".winners-page-number").textContent = page;

  if (+totalCount === (page - 1) * limit && +totalCount !== 0) {
    await renderWinnerCars(page - 1, limit);
    return;
  }

  const prevPage = document.querySelector("#prev-button-winners");
  const nextPage = document.querySelector("#next-button-winners");
  prevPage.disabled = page === 1;
  nextPage.disabled = !(totalCount - page * limit > 0);

  document.querySelector("tbody").innerHTML = "";
  json.forEach(async (el, index) => {
    await addWinnerCar(el, index, page, limit);
  });
}

export { renderWinnerCars, addWinnerCar };
