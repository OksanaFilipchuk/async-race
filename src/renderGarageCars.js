import { carSvg } from "./car-svg.js";
import { carHandler } from "./carBlockEvents.js";

export let renderGarageCars = async function () {
  document.querySelector(".cars-wrapper").innerHTML = "";
  let response = await fetch("http://localhost:3000/garage");
  let json = await response.json();
  json.forEach((el) => {
    showGarageCar(el);
  });
};

function showGarageCar(element) {
  let carBlock = document.createElement("div");
  carBlock.className = "car-block";
  carBlock.addEventListener("click", carHandler);
  carBlock.id = element.id;
  carBlock.color = element.color;
  carBlock.innerHTML = `
    <p class = "car-name">${element.name}</p>`;
  let selectButton = document.createElement("button");
  selectButton.textContent = "Select";
  selectButton.className = "select-button";
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-button";
  let goButton = document.createElement("button");
  goButton.textContent = "Go";
  goButton.className = "go-button";
  let stopButton = document.createElement("button");
  stopButton.textContent = "Stop";
  stopButton.className = "stop-button";
  carBlock.appendChild(selectButton);
  carBlock.appendChild(removeButton);
  carBlock.appendChild(goButton);
  carBlock.appendChild(stopButton);
  carBlock.innerHTML = carBlock.innerHTML + carSvg(element.color);
  document.querySelector(".cars-wrapper").appendChild(carBlock);
}
renderGarageCars();
