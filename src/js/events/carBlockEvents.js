import { createCarBlock } from "../dom/carBlockCreate";
import { renderWinnerCars } from "../renderWinnerCars";
import { goCar, stopCar } from "./buttonsGoStop";
import {
  garageCarDelete,
  getWinners,
  winnerDelete,
} from "../requests/requests";
import { limitWinners, limitGarage } from "../defaultValue";

export async function carBlockEvents(event) {
  const parent = event.target.parentNode;
  event.preventDefault();
  const { id } = parent;

  if (event.target.classList.contains("go-button")) {
    goCar(id);
  }

  if (event.target.classList.contains("stop-button")) {
    stopCar(id);
  }

  if (event.target.classList.contains("remove-button")) {
    const page = +document.querySelector(".page-number").textContent;
    const winPage = +document.querySelector(".winners-page-number").textContent;
    event.target.parentNode.remove();
    const response = await fetch(
      `http://localhost:3000/garage?_page=${page + 1}&_limit=${limitGarage}`
    );
    const json = await response.json();
    if (json[0]) {
      createCarBlock(json[0]);
      document
        .querySelectorAll(".car-block")
        .forEach((el) => el.addEventListener("click", carBlockEvents));
    }
    document.querySelector(".garage-count").textContent -= 1;
    await garageCarDelete(id);
    const winners = await getWinners();
    const isWinner = winners.reduce((a, b) => a.id || b.id, false);

    if (isWinner) {
      await winnerDelete(id);
    }

    renderWinnerCars(winPage, limitWinners);
  }
  if (event.target.classList.contains("select-button")) {
    const updateName = document.querySelector("#updateName");
    const updateColor = document.querySelector("#updateColor");
    const updateCarForm = document.querySelector(".garage-block-update-car");
    updateName.value = event.target.previousSibling.textContent;
    updateColor.value = parent.color;
    updateCarForm.dataset.id = parent.id;
  }
}
