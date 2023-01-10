import { renderGarageCars } from "../renderGarageCars";
import { generateNewCars } from "../carsGenerateNew";
import { postCar, putCar } from "../requests/requests";
import { limitGarage } from "../defaultValue";

async function addCarToPage(e) {
  e.preventDefault();
  const createCarForm = document.querySelector(".garage-block-create-car");
  const name = createCarForm.elements.carName.value;
  const color = createCarForm.elements.carColor.value;
  if (name) {
    await postCar(name, color);
  } else {
    await postCar(...generateNewCars(1)[0]);
  }
  const page = +document.querySelector(".page-number").textContent;
  await renderGarageCars(page, 7);
}

async function updateCar(e) {
  e.preventDefault();
  const updateCarForm = document.querySelector(".garage-block-update-car");
  const id = updateCarForm.getAttribute("data-id");
  const name = updateCarForm.elements.updateName.value;
  const color = updateCarForm.elements.updateColor.value;

  putCar(id, name, color);

  const page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page, limitGarage);
}

async function generateCars() {
  const newCars = generateNewCars(100);
  newCars.forEach((el) => {
    postCar(...el);
  });
  const page = +document.querySelector(".page-number").textContent;
  renderGarageCars(page, limitGarage);
}
export { generateCars, updateCar, addCarToPage };
