import { header } from "./headerContent";
import { garageBlock } from "./garageBlockContent";
import { winnersBlock } from "./winnerBlockContent";

export function renderPageElements() {
  const container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  container.appendChild(header);
  container.appendChild(garageBlock);
  container.appendChild(winnersBlock);
}
