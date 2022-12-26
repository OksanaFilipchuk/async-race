async function start(id) {
  let response = await fetch(
    `http://localhost:3000/engine?id=${id}&status=started`,
    {
      method: "PATCH",
    }
  );
  let json = await response.json();
  console.log(json);
  let currentCar = document.getElementById(id).children[5];
  currentCar.classList.add("svgClass-animated");
  currentCar.style.animationDuration = json.distance / json.velocity + "ms";
}

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("go-button")) {
    let id = event.target.parentNode.id;
    start(id);
  }
});
document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("stop-button")) {
    let id = event.target.parentNode.id;
    document
      .getElementById(id)
      .children[5].classList.remove("svgClass-animated");
  }
});
