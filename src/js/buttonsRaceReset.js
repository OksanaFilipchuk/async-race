// import {
//   setButtonDisabledFalse,
//   setButtonDisabledTrue,
// } from "./buttonsDisabledChange";
import { goCar, stopCar } from "./buttonsGoStop";
import { renderWinnerCars } from "./renderWinnerCars";
import { createWinner, showWinner } from "./winnerCreate";

const controller = new AbortController();

async function startRace() {
  // setButtonDisabledTrue();
  const arr = [];
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    arr.push(goCar(el.parentNode.id));
  });

  await Promise.any(arr)
    .then(([id, time], reject) => {
      controller.signal.addEventListener("abort", () => {
        reject("stop");
      });
      const timeRounded = (time / 1000).toFixed(2);
      showWinner(timeRounded, id);
      return [id, timeRounded];
    })
    .then(createWinner)
    .then(() => {
      const page = document.querySelector(".winners-page-number").textContent;
      renderWinnerCars(page, 10);
    })
    .catch((err) => {
      throw err;
    });
  // .finally(() => {
  //   document.querySelector("#reset-button").disabled = false;
  // });
}

function resetRace() {
  const cars = [...document.querySelectorAll(".svgClass")];
  controller.abort();
  cars.forEach((el) => {
    stopCar(el.parentNode.id);
  });
  // setButtonDisabledFalse();
}

export { resetRace, startRace };
