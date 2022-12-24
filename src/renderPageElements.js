import { switchToGarage, switchToWinner } from "./headerButtonsEvents.js";

function renderPageElements() {
  let header = document.createElement("header");
  let garageButton = document.createElement("button");
  garageButton.addEventListener("click", switchToGarage);
  garageButton.textContent = "To Garage";
  let winnerButton = document.createElement("button");
  winnerButton.textContent = "To Winner";
  winnerButton.addEventListener("click", switchToWinner);
  header.appendChild(garageButton);
  header.appendChild(winnerButton);
  let garageBlock = document.createElement("div");
  garageBlock.className = "garage-block";
  garageBlock.innerHTML = `
    <div class = "garage-block-buttons">
      <form class = "garage-block-create-car">
        <input type="color" id = "carColor" name = "carColor">
        <input type="text" id = "carName" name = "carName" required>
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
  let winnerBlock = document.createElement("div");
  winnerBlock.className = "winners-block";
  winnerBlock.innerHTML = `<p class = "winners-count">Winners()</p>
  <table class = "winners-table">
    <tr>
      <th>№</th>
      <th>Car</th>
      <th>Name</th>
      <th>Wins</th>
      <th>Best time(sec)</th>
    </tr>
  </table>`;
  let container = document.createElement("div");
  container.className = "container";
  document.body.prepend(container);
  container.appendChild(header);
  container.appendChild(garageBlock);
  container.appendChild(winnerBlock);
  garageBlock.appendChild(carsWrapper);
  let prevButton = document.createElement("button");
  prevButton.id = "prev-button";
  prevButton.textContent = "Prev";
  let nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.textContent = "Next";
  let pageNumber = document.createElement("span");
  pageNumber.className = "page-number";
  pageNumber.textContent = 1;
  garageBlock.appendChild(prevButton);
  garageBlock.appendChild(pageNumber);
  garageBlock.appendChild(nextButton);
}

renderPageElements();
