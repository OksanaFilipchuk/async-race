import { addAnimation, pauseAnimation, stopAnimation } from "./carAnimation";
import { start, stop, drive } from "../requests/carStateChange";
import {
  SERVER_ERROR_RESPONSE_CODE,
  SUCCESSS_RESPONSE_CODE,
} from "../defaultValue";

function goCar(id) {
  return new Promise((res) => {
    start(id)
      .then((time) => {
        addAnimation(id, time);
        return [id, time];
      })
      .then(drive)
      .then(([status, time]) => {
        if (status === SERVER_ERROR_RESPONSE_CODE) {
          pauseAnimation(id);
        } else if (status === SUCCESSS_RESPONSE_CODE) {
          stop(id);
          res([id, time]);
        }
      });
  });
}

function stopCar(id) {
  pauseAnimation(id);
  stop(id).then(stopAnimation(id));
}

export { goCar, stopCar };
