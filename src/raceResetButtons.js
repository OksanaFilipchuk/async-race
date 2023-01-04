import {
  setButtonDisabledFalse,
  setButtonDisabledTrue,
} from "./changeButtonDisabled.js";
import { goCar, stopCar } from "./goStopButtons.js";
import { renderWinnerCars } from "./renderWinnerCars.js";

async function createWinner([id, time]) {
  let responseGet = await fetch(`http://localhost:3000/winners/${id}`);
  let jsonGet = await responseGet.json();

  if (responseGet.status === 200) {
    let docPut = {
      wins: jsonGet.wins + 1,
      time: Math.min(time, jsonGet.time),
    };
    let responsePut = await fetch(`http://localhost:3000/winners/${id}`, {
      method: "Put",
      body: JSON.stringify(docPut),
      headers: { "Content-Type": "application/json" },
    });
    let jsonPut = await responsePut.json();
    return jsonPut;
  } else {
    let docPost = {
      id: id,
      wins: 1,
      time: time,
    };
    let responsePost = await fetch(`http://localhost:3000/winners`, {
      method: "Post",
      body: JSON.stringify(docPost),
      headers: { "Content-Type": "application/json" },
    });
    let jsonPost = await responsePost.json();
    return jsonPost;
  }
}

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

function showWinner(time, id) {
  let popUp = document.querySelector(".winner-pop-up");
  popUp.classList.add("winner-pop-up-visible");
  let winnerName = document.getElementById(id).children[0].textContent;
  document.querySelector(
    ".winner-name"
  ).textContent = `The winner is ${winnerName}`;
  document.querySelector(".winner-time").textContent = `Time: ${time} sec`;
  setTimeout(() => {
    popUp.classList.remove("winner-pop-up-visible");
  }, 1000);
}

export { resetRace, startRace };
