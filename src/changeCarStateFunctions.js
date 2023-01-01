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
export { start, stop, drive };
