import { changePagination } from "./pagination.js";
import { createCarBlock } from "./createCarBlock.js";

export let renderGarageCars = async function (page, limit) {
  document.querySelector(".cars-wrapper").innerHTML = "";
  let response = await fetch(
    `http://localhost:3000/garage?_page=${page}&_limit=${limit}`
  );
  let json = await response.json();
  let totalCount = response.headers.get("x-total-count");

  if (+totalCount === (page - 1) * limit && +totalCount != 0) {
    await renderGarageCars(page - 1, 7);
    return;
  } else {
    changePagination(page, totalCount, limit);
  }
  document.querySelector(".page-number").innerHTML = page;
  json.forEach(async (el) => {
    createCarBlock(el);
  });

  document.querySelector(".garage-header").innerHTML = `Garage(${totalCount})`;
};

renderGarageCars(1, 7);
