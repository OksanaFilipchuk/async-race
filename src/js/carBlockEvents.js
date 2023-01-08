import { renderGarageCars } from "./renderGarageCars";
import { renderWinnerCars } from "./renderWinnerCars";
import { goCar, stopCar } from "./buttonsGoStop";

export async function carBlockEvents(event) {
  event.preventDefault();
  const { id } = event.target.parentNode;

  if (event.target.classList.contains("go-button")) {
    goCar(id);
  }
  if (event.target.classList.contains("stop-button")) {
    stopCar(id);
  }
  if (event.target.classList.contains("remove-button")) {
    await fetch(`http://localhost:3000/garage/${id}`, {
      method: "Delete",
      headers: { "Content-type": "application/json" },
    });

    await fetch(`http://localhost:3000/winners/${id}`, {
      method: "Delete",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => {
        if (res.status === 404) {
          throw new Error();
        }
      })
      .catch((error) => {
        throw error;
      });

    const page = +document.querySelector(".page-number").textContent;
    const winPage = +document.querySelector(".winners-page-number").textContent;
    renderGarageCars(page, 7);
    renderWinnerCars(winPage, 10);
  } else if (event.target.classList.contains("select-button")) {
    document.querySelector("#updateName").value =
      event.target.previousSibling.textContent;
    document.querySelector("#updateColor").value =
      event.target.parentNode.color;
    document.querySelector(".garage-block-update-car").dataset.id =
      event.target.parentNode.id;
  }
}
