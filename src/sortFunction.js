import { addWinnerCar } from "./renderWinnerCars.js";

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
