import { SUCCESSS_RESPONSE_CODE, localHost } from "./defaultValue";

export async function createWinner([id, time]) {
  const responseGet = await fetch(`${localHost}/winners/${id}`);
  const jsonGet = await responseGet.json();

  if (responseGet.status === SUCCESSS_RESPONSE_CODE) {
    const docPut = {
      wins: jsonGet.wins + 1,
      time: Math.min(time, jsonGet.time),
    };
    const responsePut = await fetch(`${localHost}/winners/${id}`, {
      method: "Put",
      body: JSON.stringify(docPut),
      headers: { "Content-Type": "application/json" },
    });
    const jsonPut = await responsePut.json();
    return jsonPut;
  }
  const docPost = {
    id,
    wins: 1,
    time,
  };
  const responsePost = await fetch(`${localHost}/winners`, {
    method: "Post",
    body: JSON.stringify(docPost),
    headers: { "Content-Type": "application/json" },
  });
  const jsonPost = await responsePost.json();
  return jsonPost;
}

export async function showWinner(time, id) {
  const popUp = document.querySelector(".winner-pop-up");
  popUp.classList.add("winner-pop-up-visible");
  const winnerName = document.getElementById(id).children[0].textContent;
  document.querySelector(
    ".winner-name"
  ).textContent = `The winner is ${winnerName}`;
  document.querySelector(".winner-time").textContent = `Time: ${time} sec`;
  setTimeout(() => {
    popUp.classList.remove("winner-pop-up-visible");
  }, 5000);
}
