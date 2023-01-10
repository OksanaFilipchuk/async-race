async function garageCarDelete(id) {
  return fetch(`http://localhost:3000/garage/${id}`, {
    method: "Delete",
    headers: { "Content-type": "application/json" },
  });
}

async function winnerDelete(id) {
  return fetch(`http://localhost:3000/winners/${id}`, {
    method: "Delete",
    headers: { "Content-type": "application/json" },
  });
}

async function getGarageCar(id) {
  return fetch(`http://localhost:3000/garage/${id}`).then((res) => res.json());
}

async function getWinners() {
  return fetch(`http://localhost:3000/winners`).then((res) => res.json());
}

async function postCar(name, color) {
  const doc = {
    name,
    color,
  };
  await fetch("http://localhost:3000/garage", {
    method: "Post",
    body: JSON.stringify(doc),
    headers: { "Content-type": "application/json" },
  });
}

async function putCar(id, name, color) {
  const doc = {
    name,
    color,
  };
  await fetch(`http://localhost:3000/garage/${id}`, {
    method: "Put",
    body: JSON.stringify(doc),
    headers: { "Content-type": "application/json" },
  });
}

async function putWinner(id, wins, time) {
  const docPut = {
    id,
    wins,
    time,
  };
  const responsePut = await fetch(`http://localhost:3000/winners/${id}`, {
    method: "Put",
    body: JSON.stringify(docPut),
    headers: { "Content-Type": "application/json" },
  });
  const jsonPut = await responsePut.json();
  return jsonPut;
}

async function postWinner(wins, time) {
  const docPost = {
    wins,
    time,
  };
  const responsePost = await fetch(`http://localhost:3000/winners`, {
    method: "Post",
    body: JSON.stringify(docPost),
    headers: { "Content-Type": "application/json" },
  });
  const jsonPost = await responsePost.json();
  return jsonPost;
}

export {
  garageCarDelete,
  winnerDelete,
  getWinners,
  postCar,
  putCar,
  getGarageCar,
  putWinner,
  postWinner,
};
