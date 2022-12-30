import { switchToGarage, switchToWinner } from "./headerButtonsEvents.js";

function renderPageElements() {
  let header = document.createElement("header");
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
  let garageBlock = document.createElement("div");
  garageBlock.className = "garage-block";
  garageBlock.innerHTML = `
    <div class = "garage-block-buttons">
      <form class = "garage-block-create-car">
        <input type="color" id = "carColor" name = "carColor">
        <input type="text" id = "carName" name = "carName">
        <input class = "createButton" type = "submit" value = "Create" >
      </form>
      <form class = "garage-block-update-car">
        <input type="color" id = "updateColor" name = "updateColor">
        <input type="text" id = "updateName" name = "updateName"required>
        <input class = "createButton" type = "submit" value = "Update" invalid>
      </form>      
    </div>
    <div class = "garage-block-buttons">
      <button class = "garage-block-button" id = "race-button">Race</button>
      <button class = "garage-block-button" id = "reset-button">Reset</button>
      <button class = "garage-block-button" id = "generate-button">Generate</button>
    </div>
    <p class = "garage-header">Garage</p>`;
  let carsWrapper = document.createElement("div");
  carsWrapper.className = "cars-wrapper";
  let winnersBlock = document.createElement("div");
  winnersBlock.className = "winners-block";
  winnersBlock.innerHTML = `<p class = "winners-count">Winners()</p>
  <table class = "winners-table">
    <thead>
      <tr>
        <th>№</th>
        <th>Car</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Best time(sec)</th>
      </tr>
    </thead>    
    <tbody class = ".tbody"></tbody>
  </table>`;
  let container = document.createElement("div");
  container.className = "container";
  document.body.prepend(container);
  container.appendChild(header);
  container.appendChild(garageBlock);
  container.appendChild(winnersBlock);
  garageBlock.appendChild(carsWrapper);
  let prevButton = document.createElement("button");
  prevButton.id = "prev-button";
  prevButton.textContent = "Prev";
  let nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.textContent = "Next";
  let pageNumber = document.createElement("span");
  pageNumber.className = "page-number";
  pageNumber.textContent = "1";
  garageBlock.appendChild(prevButton);
  garageBlock.appendChild(pageNumber);
  garageBlock.appendChild(nextButton);

  let prevButtonWinners = document.createElement("button");
  prevButtonWinners.id = "prev-button-winners";
  prevButtonWinners.textContent = "Prev";
  let nextButtonWinners = document.createElement("button");
  nextButtonWinners.id = "next-button-winners";
  nextButtonWinners.textContent = "Next";
  let winnersPageNumber = document.createElement("span");
  winnersPageNumber.className = "winners-page-number";
  winnersPageNumber.textContent = "1";
  winnersBlock.appendChild(prevButtonWinners);
  winnersBlock.appendChild(winnersPageNumber);
  winnersBlock.appendChild(nextButtonWinners);
}

renderPageElements();
