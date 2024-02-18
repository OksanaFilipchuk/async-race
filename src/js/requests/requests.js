import { requestUrl } from "../defaultValue";

async function garageCarDelete(id) {
  return fetch(`${requestUrl}/garage/${id}`, {
    method: "Delete",
    headers: { "Content-type": "application/json" },
  });
}

async function winnerDelete(id) {
  return fetch(`${requestUrl}/winners/${id}`, {
    method: "Delete",
    headers: { "Content-type": "application/json" },
  });
}

async function getGarageCar(id) {
  return fetch(`${requestUrl}/garage/${id}`).then((res) => res.json());
}

async function getWinners() {
  return fetch(`${requestUrl}/winners`).then((res) => res.json());
}

async function postCar(name, color) {
  const doc = {
    name,
    color,
  };
  await fetch(`${requestUrl}/garage`, {
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
  await fetch(`${requestUrl}/garage/${id}`, {
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
  const responsePut = await fetch(`${requestUrl}/winners/${id}`, {
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
  const responsePost = await fetch(`${requestUrl}/winners`, {
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
