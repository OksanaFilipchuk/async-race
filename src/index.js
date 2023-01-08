// async function fff() {
//   for (let i = 1; i < 100; i++) {
//     await fetch("http://localhost:3000/winners" + "/" + i, {
//       method: "Delete",
//       headers: { "Content-type": "application/json" },
//     }).catch((e) => console.log(e.message));
//   }
// }
// fff();
import "./style.css";
import { renderPageElements } from "./js/renderPageElements";
import { renderGarageCars } from "./js/renderGarageCars";
import { renderWinnerCars } from "./js/renderWinnerCars";
import { addButtonsEvents } from "./js/addButtonsEvents";

async function init() {
  renderPageElements();
  await renderGarageCars(1, 7);
  await renderWinnerCars(1, 10);
  addButtonsEvents();
}
init();
