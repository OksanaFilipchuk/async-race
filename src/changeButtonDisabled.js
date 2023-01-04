let buttons = [...document.querySelectorAll("button")];

function excludePaginationButtons(el) {
  return (
    el != document.querySelector("#prev-button-garage") &&
    el != document.querySelector("#next-button-garage") &&
    el != document.querySelector("#prev-button-winners") &&
    el != document.querySelector("#next-button-winners")
  );
}
function setButtonDisabledTrue() {
  buttons.filter(excludePaginationButtons).forEach((el) => {
    el.disabled = true;
  });
}
function setButtonDisabledFalse() {
  buttons.filter(excludePaginationButtons).forEach((el) => {
    el.disabled = false;
  });
}
export { setButtonDisabledFalse, setButtonDisabledTrue };
