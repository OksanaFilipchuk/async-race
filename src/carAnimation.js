function addAnimation(id, time) {
  let currentCar = document.getElementById(id).children[5];
  let goButton = document.getElementById(id).children[3];
  currentCar.classList.add("svgClass-animated");
  currentCar.classList.remove("paused");
  currentCar.style.animationDuration = time + "ms";
  goButton.disabled = true;
}

function stopAnimation(id) {
  let currentCar = document.getElementById(id).children[5];
  let goButton = document.getElementById(id).children[3];
  currentCar.classList.remove("svgClass-animated");
  currentCar.classList.remove("paused");
  goButton.disabled = false;
}
function pauseAnimation(id) {
  let currentCar = document.getElementById(id).children[5];
  currentCar.classList.add("paused");
}
export { addAnimation, pauseAnimation, stopAnimation };
