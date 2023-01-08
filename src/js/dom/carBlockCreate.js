import { carSvg } from "../car-svg";
import { carBlockEvents } from "../carBlockEvents";

export function createCarBlock(element) {
  const carBlock = document.createElement("div");
  carBlock.className = "car-block";
  carBlock.addEventListener("click", carBlockEvents);
  carBlock.id = element.id;
  carBlock.color = element.color;
  const carName = document.createElement("p");
  carName.className = "car-name";
  carName.innerHTML = element.name;
  carBlock.appendChild(carName);
  const selectButton = document.createElement("button");
  selectButton.textContent = "Select";
  selectButton.className = "select-button";
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-button";
  const goButton = document.createElement("button");
  goButton.textContent = "Go";
  goButton.className = "go-button";
  const stopButton = document.createElement("button");
  stopButton.textContent = "Stop";
  stopButton.className = "stop-button";
  stopButton.disabled = true;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("svgClass");
  svg.innerHTML = carSvg(element.color);
  svg.setAttribute("viewBox", "0 0 64 64");
  carBlock.appendChild(selectButton);
  carBlock.appendChild(removeButton);
  carBlock.appendChild(goButton);
  carBlock.appendChild(stopButton);
  carBlock.appendChild(svg);
  document.querySelector(".cars-wrapper").appendChild(carBlock);
}
