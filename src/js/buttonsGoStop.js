import { addAnimation, pauseAnimation, stopAnimation } from "./carAnimation";
import { start, stop, drive } from "./carStateChange";

function goCar(id) {
  return new Promise((res) => {
    start(id)
      .then((time) => {
        addAnimation(id, time);
        return [id, time];
      })
      .then(drive)
      .then(([status, time]) => {
        if (status === 500) {
          pauseAnimation(id);
        } else if (status === 200) {
          stop(id);
          res([id, time]);
        }
      })
      .catch((err) => {
        throw err;
      });
  });
}

function stopCar(id) {
  pauseAnimation(id);
  stop(id).then(stopAnimation(id));
}

export { goCar, stopCar };
