import { renderGarageCars } from "./renderGarageCars";
import { generateNewCars } from "./carsGenerateNew";

async function addCar(name, color) {
  const doc = {
    name,
    color,
  };
  await fetch("http://localhost:3000/garage", {
    method: "Post",
    body: JSON.stringify(doc),
    headers: { "Content-type": "application/json" },
  });
}

async function addCarToPage(e) {
  e.preventDefault();
  const createCarForm = document.querySelector(".garage-block-create-car");
  const name = createCarForm.elements.carName.value;
  const color = createCarForm.elements.carColor.value;
  if (name) {
    await addCar(name, color);
  } else {
    await addCar(...generateNewCars(1)[0]);
  }
  const page = +document.querySelector(".page-number").textContent;
  await renderGarageCars(page, 7);
}

async function updateCar(e) {
  e.preventDefault();
  const updateCarForm = document.querySelector(".garage-block-update-car");
  const id = updateCarForm.getAttribute("data-id");
  const doc = {
    name: updateCarForm.elements.updateName.value,
    color: updateCarForm.elements.updateColor.value,
  };
  await fetch(`http://localhost:3000/garage/${id}`, {
    method: "Put",
    body: JSON.stringify(doc),
    headers: { "Content-type": "application/json" },
  });
  const page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page, 7);
}

async function generateCars() {
  const newCars = generateNewCars(100);
  newCars.forEach((el) => {
    addCar(...el);
  });
  const page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page, 7);
}
export { generateCars, updateCar, addCar, addCarToPage };
