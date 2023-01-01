function setButtonDisabledTrue() {
  [...document.querySelectorAll("button")]
    .filter(
      (el) =>
        el != document.querySelector("#prev-button") &&
        el != document.querySelector("#next-button")
    )
    .forEach((el) => {
      el.disabled = true;
    });
}
function setButtonDisabledFalse() {
  [...document.querySelectorAll("button")]
    .filter(
      (el) =>
        el != document.querySelector("#prev-button") &&
        el != document.querySelector("#next-button")
    )
    .forEach((el) => {
      el.disabled = false;
    });
}
export { setButtonDisabledFalse, setButtonDisabledTrue };
