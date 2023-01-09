import { carSvg } from "../car-svg";

export function winnerRowCreate(element, index, page, limit, name, color) {
  const winner = document.createElement("tr");
  winner.id = `win${element.id}`;
  winner.innerHTML = `
    <td>${index + 1 + (page - 1) * limit}</td>
    <td><svg class = "svgClass-small" viewBox="0 0 64 64">${carSvg(
      color
    )}</svg></td>
    <td>${name}</td>
    <td>${element.wins}</td>
    <td>${element.time}</td>`;
  document.querySelector("tbody").appendChild(winner);
}
