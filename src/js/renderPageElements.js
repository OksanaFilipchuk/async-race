import { header } from "./dom/headerContent";
import { garageBlock } from "./dom/garageBlockContent";
import { winnersBlock } from "./dom/winnerBlockContent";

export function renderPageElements() {
  const container = document.createElement("div");
  container.className = "container";
  document.body.prepend(container);
  container.appendChild(header);
  container.appendChild(garageBlock);
  container.appendChild(winnersBlock);
}
