export let renderWinnerCars = async function () {
  let response = await fetch("http://localhost:3000/winners");
  let json = await response.json();
  document.querySelector("tbody").innerHTML = "";
  json.forEach((el) => {
    addWinnerCar(el);
  });
};

function addWinnerCar(element) {
  let winner = document.createElement("tr");
  winner.id = element.id;
  winner.innerHTML = `
    <td>1</td>
    <td>${element.id}</td>
    <td>${element.id}</td>
    <td>${element.wins}</td>
    <td>${element.time}</td>`;
  document.querySelector("tbody").appendChild(winner);
}
renderWinnerCars();
