import { renderGarageCars } from "../renderGarageCars";
import { generateNewCars } from "../carsGenerateNew";
import { postCar, putCar } from "../requests/requests";
import { limitGarage, numberOfGeneratedCars } from "../defaultValue";
import { addCarsBlockEvents } from "./buttonsPaginationEvent";

async function addCarToPage(e) {
  e.preventDefault();
  const createCarForm = document.querySelector(".garage-block-create-car");
  const name = createCarForm.elements.carName.value;
  const color = createCarForm.elements.carColor.value;
  const numbersOfCars = 1;
  if (name) {
    await postCar(name, color);
  } else {
    await postCar(...generateNewCars(numbersOfCars)[0]);
  }
  const page = +document.querySelector(".page-number").textContent;
  await renderGarageCars(page, limitGarage);
  addCarsBlockEvents();
}

async function updateCar(e) {
  e.preventDefault();
  const updateCarForm = document.querySelector(".garage-block-update-car");
  const id = updateCarForm.getAttribute("data-id");
  const name = updateCarForm.elements.updateName.value;
  const color = updateCarForm.elements.updateColor.value;

  putCar(id, name, color);

  const page = +document.querySelector(".page-number").textContent;
  await renderGarageCars(page, limitGarage);
  addCarsBlockEvents();
}

async function generateCars() {
  const newCars = generateNewCars(numberOfGeneratedCars);
  newCars.forEach((el) => {
    postCar(...el);
  });
  const page = +document.querySelector(".page-number").textContent;
  await renderGarageCars(page, limitGarage);
  addCarsBlockEvents();
}
export { generateCars, updateCar, addCarToPage };
