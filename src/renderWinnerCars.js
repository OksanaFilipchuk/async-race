import { carSvg } from "./car-svg.js";
import { changePaginationWin } from "./pagination.js";

export let renderWinnerCars = async function (page, limit) {
  let response = await fetch(
    `http://localhost:3000/winners?_page=${page}&_limit=${limit}`
  );
  let json = await response.json();
  let totalCount = response.headers.get("x-total-count");
  document.querySelector(
    ".winners-count"
  ).textContent = `Winners (${totalCount})`;
  if (+totalCount === (page - 1) * limit && +totalCount != 0) {
    await renderWinnerCars(page - 1, 10);
    return;
  } else {
    changePaginationWin(page, totalCount, limit);
  }

  document.querySelector("tbody").innerHTML = "";
  json.forEach((el, index) => {
    addWinnerCar(el, index);
  });
};

async function addWinnerCar(element, index) {
  let winner = document.createElement("tr");
  winner.id = "win" + element.id;

  let resp = await fetch(`http://localhost:3000/garage/${element.id}`);
  let json = await resp.json();
  let name = json.name;
  let color = json.color;
  winner.innerHTML = `
    <td>${index + 1}</td>
    <td><svg class = "svgClass-small" viewBox="0 0 64 64">${carSvg(
      color
    )}</svg></td>
    <td>${name}</td>
    <td>${element.wins}</td>
    <td>${element.time}</td>`;
  document.querySelector("tbody").appendChild(winner);
}
renderWinnerCars(1, 10);
