import {
  setButtonDisabledFalse,
  setButtonDisabledTrue,
} from "./changeButtonDisabled.js";
import { goCar, stopCar } from "./goStopButtons.js";
import { renderWinnerCars } from "./renderWinnerCars.js";
import { createWinner, showWinner } from "./createWinner.js";

function startRace() {
  setButtonDisabledTrue();
  let arr = [];
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    arr.push(goCar(el.parentNode.id));
  });
  Promise.any(arr)
    .then(([id, time]) => {
      time = (time / 1000).toFixed(2);
      showWinner(time, id);
      return [id, time];
    })
    .then(createWinner)
    .then(() => {
      let page = document.querySelector(".winners-page-number").textContent;
      renderWinnerCars(page, 10);
    })
    .catch((e) => console.log(e.message))
    .then(() => {
      document.querySelector("#reset-button").disabled = false;
    });
}

function resetRace() {
  let cars = [...document.querySelectorAll(".svgClass")];
  cars.forEach((el, index) => {
    stopCar(el.parentNode.id);
  });
  setButtonDisabledFalse();
}

export { resetRace, startRace };
