import { addWinnerCar } from "./renderWinnerCars";

export async function sort(e) {
  const page = document.querySelector(".winners-page-number").textContent;
  const limit = 10;
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
  const response = await fetch(url);
  const json = await response.json();
  document.querySelector("tbody").innerHTML = "";
  json.forEach(async (el, index) => {
    await addWinnerCar(el, index, page, limit);
  });
}
