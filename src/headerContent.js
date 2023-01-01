import { switchToGarage, switchToWinner } from "./headerButtonsEvents.js";

export let header = document.createElement("header");
let garageButton = document.createElement("button");
garageButton.addEventListener("click", switchToGarage);
garageButton.textContent = "To Garage";
let winnerButton = document.createElement("button");
winnerButton.textContent = "To Winner";
winnerButton.className = "to-winner";
winnerButton.addEventListener("click", switchToWinner);
let winnerPopUp = document.createElement("div");
winnerPopUp.className = "winner-pop-up";
winnerPopUp.innerHTML = `
    <div class = "winner-pop-up-content">
      <img class = "winner-img"src ="./src/winner.png" alt="winner"/>
      <p class = "winner-name"></p>
      <p class = "winner-time">Time: </p>
    </div>`;
header.appendChild(garageButton);
header.appendChild(winnerButton);
header.appendChild(winnerPopUp);
