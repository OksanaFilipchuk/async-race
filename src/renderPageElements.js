import { header } from "./headerContent.js";
import { garageBlock } from "./garageBlockContent.js";
import { winnersBlock } from "./winnerBlockContent.js";

function renderPageElements() {
  let container = document.createElement("div");
  container.className = "container";
  document.body.prepend(container);
  container.appendChild(header);
  container.appendChild(garageBlock);
  container.appendChild(winnersBlock);
}

renderPageElements();
