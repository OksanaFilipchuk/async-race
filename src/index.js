import "./style.css";
import { renderPageElements } from "./js/dom/renderPageElements";
import { renderGarageCars } from "./js/renderGarageCars";
import { renderWinnerCars } from "./js/renderWinnerCars";
import { addButtonsEvents } from "./js/events/addButtonsEvents";
import { startPage, limitGarage, limitWinners } from "./js/defaultValue";

async function init() {
  renderPageElements();
  await renderGarageCars(startPage, limitGarage);
  await renderWinnerCars(startPage, limitWinners);
  addButtonsEvents();
}
init();
