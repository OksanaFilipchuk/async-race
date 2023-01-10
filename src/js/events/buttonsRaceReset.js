import { goCar, stopCar } from "./buttonsGoStop";
import { renderWinnerCars } from "../renderWinnerCars";
import { createWinner, showWinner } from "../winnerCreate";
import { limitWinners } from "../defaultValue";

function resetRace() {
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    stopCar(el.parentNode.id);
  });
}

async function startRace() {
  const arr = [];
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    arr.push(goCar(el.parentNode.id));
  });

  await Promise.any(arr)
    .then(([id, time]) => {
      const timeRounded = (time / 1000).toFixed(2);
      showWinner(timeRounded, id);
      return [id, timeRounded];
    })
    .then(createWinner)
    .finally(() => {
      const page = document.querySelector(".winners-page-number").textContent;
      resetRace();
      renderWinnerCars(page, limitWinners);
    })
    .catch((err) => {
      throw err;
    });
}

export { resetRace, startRace };
