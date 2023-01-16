import { createCarBlock } from "./dom/carBlockCreate";
import { localHost } from "./defaultValue";

export async function renderGarageCars(page, limit) {
  document.querySelector(".cars-wrapper").innerHTML = "";
  const response = await fetch(
    `${localHost}/garage?_page=${page}&_limit=${limit}`
  );
  const json = await response.json();

  const totalCount = response.headers.get("x-total-count");

  if (+totalCount === (page - 1) * limit && +totalCount !== 0) {
    await renderGarageCars(page - 1, limit);
    return;
  }
  document.querySelector("#prev-button-garage").disabled = page === 1;
  document.querySelector("#next-button-garage").disabled = !(
    totalCount - page * limit >
    0
  );

  document.querySelector(".page-number").innerHTML = page;
  json.forEach(async (elem) => {
    createCarBlock(elem);
  });

  document.querySelector(".garage-count").innerHTML = totalCount;
}
