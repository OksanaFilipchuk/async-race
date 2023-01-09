function addAnimation(id, time) {
  const currentCar = document.getElementById(id).children[5];
  const goButton = document.getElementById(id).children[3];
  const stopButton = document.getElementById(id).children[4];
  currentCar.classList.add("svgClass-animated");
  currentCar.classList.remove("paused");
  currentCar.style.animationDuration = `${time}ms`;
  goButton.disabled = true;
  stopButton.disabled = false;
}

function stopAnimation(id) {
  const currentCar = document.getElementById(id).children[5];
  const goButton = document.getElementById(id).children[3];
  const stopButton = document.getElementById(id).children[4];
  currentCar.classList.remove("svgClass-animated");
  currentCar.classList.remove("paused");
  goButton.disabled = false;
  stopButton.disabled = true;
}

function pauseAnimation(id) {
  const currentCar = document.getElementById(id).children[5];
  currentCar.classList.add("paused");
}

export { addAnimation, pauseAnimation, stopAnimation };
