async function start(id) {
  const response = await fetch(
    `http://localhost:3000/engine?id=${id}&status=started`,
    {
      method: "PATCH",
    }
  );
  const json = await response.json();
  const time = (await json.distance) / (await json.velocity);
  return time;
}
async function stop(id) {
  await fetch(`http://localhost:3000/engine?id=${id}&status=stopped`, {
    method: "PATCH",
  });
}
async function drive([id, time]) {
  return fetch(`http://localhost:3000/engine?id=${id}&status=drive`, {
    method: "PATCH",
  }).then((response) => [response.status, time]);
}
export { start, stop, drive };
