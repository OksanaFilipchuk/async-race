export function switchToGarage() {
  document.querySelector(".winners-block").style.display = "none";
  document.querySelector(".garage-block").style.display = "block";
}
export function switchToWinner() {
  document.querySelector(".winners-block").style.display = "block";
  document.querySelector(".garage-block").style.display = "none";
}
