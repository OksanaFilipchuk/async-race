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
async function start(id) {
  let response = await fetch(
    `http://localhost:3000/engine?id=${id}&status=started`,
    {
      method: "PATCH",
    }
  );
  let json = await response.json();
  let time = (await json.distance) / (await json.velocity);
  return time;
}
async function stop(id) {
  let response = await fetch(
    `http://localhost:3000/engine?id=${id}&status=stopped`,
    {
      method: "PATCH",
    }
  );
}
function drive(id) {
  return fetch(`http://localhost:3000/engine?id=${id}&status=drive`, {
    method: "PATCH",
  }).then((response) => response.status);
}

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("go-button")) {
    let id = event.target.parentNode.id;
    goCar(id);
  }
});
function goCar(id) {
  return new Promise((res, rej) => {
    start(id)
      .then((time) => {
        addAnimation(id, time);
        return id;
      })
      .then(drive)
      .then((status) => {
        if (status == 500) {
          pauseAnimation(id);
          rej(id);
        } else if (status == 200) {
          stop(id);
          res(id);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  });
}

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("stop-button")) {
    let id = event.target.parentNode.id;
    stopCar(id);
  }
});

function stopCar(id) {
  pauseAnimation(id);
  stop(id).then(() => setTimeout(stopAnimation(id), 1000));
}

document.querySelector("#race-button").addEventListener("click", () => {
  let timeStart = new Date();
  let arr = [];
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    arr.push(goCar(el.parentNode.id));
  });
  Promise.any(arr).then((id) => {
    let timeEnd = new Date();
    showWinner(timeEnd - timeStart, id);
  });
});
document.querySelector("#reset-button").addEventListener("click", () => {
  [...document.querySelectorAll(".svgClass")].forEach((el) => {
    stopCar(el.parentNode.id);
  });
});

function showWinner(time, id) {
  let popUp = document.querySelector(".winner-pop-up");
  popUp.classList.add("winner-pop-up-visible");
  let winnerName = document.getElementById(id).children[0].textContent;
  document.querySelector(
    ".winner-name"
  ).textContent = `The winner is ${winnerName}`;
  document.querySelector(".winner-time").textContent = time / 1000 + " sec";
  setTimeout(() => {
    popUp.classList.remove("winner-pop-up-visible");
  }, 2000);
}
