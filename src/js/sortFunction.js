import { addWinnerCar } from "./renderWinnerCars";
import { localHost } from "./defaultValue";

export async function sort(e) {
  const page = document.querySelector(".winners-page-number").textContent;
  const limit = 10;
  let url;
  if (e.target.classList.contains("ascending-wins")) {
    url = `${localHost}/winners?_sort=wins&_page=${page}&_limit=${limit}`;
  } else if (e.target.classList.contains("descending-wins")) {
    url = `${localHost}/winners?_sort=wins&_order=desc&_page=${page}&_limit=${limit}`;
  } else if (e.target.classList.contains("ascending-time")) {
    url = `${localHost}/winners?_sort=time&_page=${page}&_limit=${limit}`;
  } else if (e.target.classList.contains("descending-time")) {
    url = `${localHost}/winners?_sort=time&_order=desc&_page=${page}&_limit=${limit}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  document.querySelector("tbody").innerHTML = "";
  json.forEach(async (el, index) => {
    await addWinnerCar(el, index, page, limit);
  });
}
