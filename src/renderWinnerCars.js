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
  document.querySelector(".winners-page-number").textContent = page;
  if (+totalCount === (page - 1) * limit && +totalCount != 0) {
    await renderWinnerCars(page - 1, limit);
    return;
  } else {
    changePaginationWin(page, totalCount, limit);
  }

  document.querySelector("tbody").innerHTML = "";
  json.forEach((el, index) => {
    addWinnerCar(el, index, page, limit);
  });
};

async function addWinnerCar(element, index, page, limit) {
  let winner = document.createElement("tr");
  winner.id = "win" + element.id;

  let resp = await fetch(`http://localhost:3000/garage/${element.id}`);
  let json = await resp.json();
  let name = json.name;
  let color = json.color;
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

// export async function ascendingSort() {
//   let page = document.querySelector(".winners-page-number").textContent;
//   let limit = 10;
//   let response = await fetch(
//     `http://localhost:3000/winners?_sort=wins&_page=${page}&_limit=${limit}`
//   );
//   let json = await response.json();
//   document.querySelector("tbody").innerHTML = "";
//   json.forEach((el, index) => {
//     addWinnerCar(el, index, page, limit);
//   });
// }
export async function sort(e) {
  let page = document.querySelector(".winners-page-number").textContent;
  let limit = 10;
  let url;
  if (e.target.classList.contains("ascending-wins")) {
    url = `http://localhost:3000/winners?_sort=wins&_page=${page}&_limit=${limit}`;
  } else if (e.target.classList.contains("descending-wins")) {
    url = `http://localhost:3000/winners?_sort=wins&_order=desc&_page=${page}&_limit=${limit}`;
  } else if (e.target.classList.contains("ascending-time")) {
    url = `http://localhost:3000/winners?_sort=time&_page=${page}&_limit=${limit}`;
  } else if (e.target.classList.contains("descending-time")) {
    url = `http://localhost:3000/winners?_sort=time&_order=desc&_page=${page}&_limit=${limit}`;
  }
  let response = await fetch(url);
  let json = await response.json();
  document.querySelector("tbody").innerHTML = "";
  json.forEach((el, index) => {
    addWinnerCar(el, index, page, limit);
  });
}

renderWinnerCars(1, 10);
