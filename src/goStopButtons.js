import { addAnimation, pauseAnimation, stopAnimation } from "./carAnimation.js";
import { start, stop, drive } from "./changeCarStateFunctions.js";

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

function stopCar(id) {
  pauseAnimation(id);
  stop(id).then(() => setTimeout(stopAnimation(id), 1000));
}

export { goCar, stopCar };
