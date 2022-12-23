import { renderGarageCars } from "./renderGarageCars.js";

export async function carHandler(e) {
  e.preventDefault();
  let id = e.currentTarget.id;

  if (e.target.classList.contains("remove-button")) {
    await fetch("http://localhost:3000/garage" + "/" + id, {
      method: "Delete",
      headers: { "Content-type": "application/json" },
    });
    renderGarageCars();
  } else if (e.target.classList.contains("select-button")) {
    document.querySelector("#updateName").value = this.children[0].textContent;
    document.querySelector("#updateColor").value = this.color;
    document.querySelector(".garage-block-update-car").id = this.id;
  }
}
