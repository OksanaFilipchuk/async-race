import { carSvg } from "./car-svg";

export async function addWinnerCar(element, index, page, limit) {
  const winner = document.createElement("tr");
  winner.id = `win${element.id}`;

  const resp = await fetch(`http://localhost:3000/garage/${element.id}`);
  const json = await resp.json();
  const { name } = await json;
  const { color } = await json;
  winner.innerHTML = `
    <td>${index + 1 + (page - 1) * limit}</td>
    <td><svg class = "svgClass-small" viewBox="0 0 64 64">${carSvg(
      color
    )}</svg></td>
    <td>${name}</td>
    <td>${element.wins}</td>
    <td>${element.time}</td>`;
  document.querySelector("tbody").appendChild(winner);
}

export async function renderWinnerCars(page, limit) {
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
  document.querySelector("#prev-button-winners").disabled = page === 1;
  document.querySelector("#next-button-winners").disabled = !(
    totalCount - page * limit >
    0
  );

  document.querySelector("tbody").innerHTML = "";
  json.forEach(async (el, index) => {
    await addWinnerCar(el, index, page, limit);
  });
}
