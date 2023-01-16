export const garageBlock = document.createElement("div");
garageBlock.className = "garage-block";
garageBlock.innerHTML = `
  <div class = "garage-block-buttons">
    <form class = "garage-block-create-car">
      <input type="color" id = "carColor" name = "carColor">
      <input type="text" id = "carName" name = "carName">
      <button class = "create-button" type = "submit">Create</button>
    </form>
    <form class = "garage-block-update-car">
      <input type="color" id = "updateColor" name = "updateColor">
      <input type="text" id = "updateName" name = "updateName"required>
      <button class = "update-button" type = "submit" invalid>Update</button>
    </form>      
  </div>
  <div class = "garage-block-buttons">
    <button class = "garage-block-button" id = "race-button">Race</button>
    <button class = "garage-block-button" id = "reset-button">Reset</button>
    <button class = "garage-block-button" id = "generate-button">Generate</button>
  </div>
  <p class = "garage-count-header">Garage (<span class = "garage-count"></span>)</p>`;
const carsWrapper = document.createElement("div");
carsWrapper.className = "cars-wrapper";
garageBlock.appendChild(carsWrapper);
const prevButton = document.createElement("button");
prevButton.id = "prev-button-garage";
prevButton.textContent = "Prev";
const nextButton = document.createElement("button");
nextButton.id = "next-button-garage";
nextButton.textContent = "Next";
const pageNumber = document.createElement("span");
pageNumber.className = "page-number";
pageNumber.textContent = "1";
garageBlock.appendChild(prevButton);
garageBlock.appendChild(pageNumber);
garageBlock.appendChild(nextButton);
