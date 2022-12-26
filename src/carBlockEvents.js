import { renderGarageCars } from "./renderGarageCars.js";
import { renderWinnerCars } from "./renderWinnerCars.js";

export async function carHandler(e) {
  e.preventDefault();
  let id = e.currentTarget.id;

  if (e.target.classList.contains("remove-button")) {
    await fetch("http://localhost:3000/garage" + "/" + id, {
      method: "Delete",
      headers: { "Content-type": "application/json" },
    });
    if ([...document.querySelectorAll("td")].some((el) => el.id == id)) {
      await fetch("http://localhost:3000/winners" + "/" + id, {
        method: "Delete",
        headers: { "Content-type": "application/json" },
      });
    }
    let page = +document.querySelector(".page-number").textContent;
    renderGarageCars(page, 7);
    renderWinnerCars();
  } else if (e.target.classList.contains("select-button")) {
    document.querySelector("#updateName").value = this.children[0].textContent;
    document.querySelector("#updateColor").value = this.color;
    document.querySelector(".garage-block-update-car").id = this.id;
  }
}
// (async () => {
//   try {
//     for (let i = 2300; i < 2400; i++) {
//       await fetch("http://localhost:3000/garage" + "/" + i, {
//         method: "Delete",
//         headers: { "Content-type": "application/json" },
//       });
//     }
//   } catch (e) {
//     return e;
//   }
// })();
