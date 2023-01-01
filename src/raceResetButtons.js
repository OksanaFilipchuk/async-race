import {
  setButtonDisabledFalse,
  setButtonDisabledTrue,
} from "./changeButtonDisabled.js";
import { goCar, stopCar } from "./goStopButtons.js";

function startRace() {
  setButtonDisabledTrue();
  let timeStart = new Date();
  let arr = [];
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    arr.push(goCar(el.parentNode.id));
  });
  Promise.any(arr)
    .then((id) => {
      let timeEnd = new Date();
      showWinner(timeEnd - timeStart, id);
    })
    .then(() => {
      document.querySelector("#reset-button").disabled = false;
    });
}

function resetRace() {
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    stopCar(el.parentNode.id);
  });
  setButtonDisabledFalse();
}

function showWinner(time, id) {
  let popUp = document.querySelector(".winner-pop-up");
  popUp.classList.add("winner-pop-up-visible");
  let winnerName = document.getElementById(id).children[0].textContent;
  document.querySelector(
    ".winner-name"
  ).textContent = `The winner is ${winnerName}`;
  document.querySelector(".winner-time").textContent = `Time: ${
    time / 1000
  } sec`;
  setTimeout(() => {
    popUp.classList.remove("winner-pop-up-visible");
  }, 2000);
}
export { resetRace, startRace };
