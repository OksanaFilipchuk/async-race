export async function createWinner([id, time]) {
  let responseGet = await fetch(`http://localhost:3000/winners/${id}`);
  let jsonGet = await responseGet.json();

  if (responseGet.status === 200) {
    let docPut = {
      wins: jsonGet.wins + 1,
      time: Math.min(time, jsonGet.time),
    };
    let responsePut = await fetch(`http://localhost:3000/winners/${id}`, {
      method: "Put",
      body: JSON.stringify(docPut),
      headers: { "Content-Type": "application/json" },
    });
    let jsonPut = await responsePut.json();
    return jsonPut;
  } else {
    let docPost = {
      id: id,
      wins: 1,
      time: time,
    };
    let responsePost = await fetch(`http://localhost:3000/winners`, {
      method: "Post",
      body: JSON.stringify(docPost),
      headers: { "Content-Type": "application/json" },
    });
    let jsonPost = await responsePost.json();
    return jsonPost;
  }
}

export function showWinner(time, id) {
  let popUp = document.querySelector(".winner-pop-up");
  popUp.classList.add("winner-pop-up-visible");
  let winnerName = document.getElementById(id).children[0].textContent;
  document.querySelector(
    ".winner-name"
  ).textContent = `The winner is ${winnerName}`;
  document.querySelector(".winner-time").textContent = `Time: ${time} sec`;
  setTimeout(() => {
    popUp.classList.remove("winner-pop-up-visible");
  }, 1000);
}
