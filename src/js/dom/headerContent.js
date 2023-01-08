import { switchToGarage, switchToWinner } from "../headerButtonsEvents";

export const header = document.createElement("header");
const garageButton = document.createElement("button");
garageButton.addEventListener("click", switchToGarage);
garageButton.textContent = "To Garage";
const winnerButton = document.createElement("button");
winnerButton.textContent = "To Winner";
winnerButton.className = "to-winner";
winnerButton.addEventListener("click", switchToWinner);
const h1 = document.createElement("h1");
h1.textContent = "ASYNC RACE";
setInterval(() => {
  h1.classList.toggle("h1-highlight");
}, 2000);
const winnerPopUp = document.createElement("div");
winnerPopUp.className = "winner-pop-up";
winnerPopUp.innerHTML = `
    <div class = "winner-pop-up-content">
      <p class = "winner-name"></p>
      <p class = "winner-time">Time: </p>
    </div>`;
header.appendChild(garageButton);
header.appendChild(winnerButton);
header.appendChild(h1);
header.appendChild(winnerPopUp);
