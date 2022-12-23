let renderWinnerCars = async function () {
  let response = await fetch("http://localhost:3000/winners");
  let json = await response.json();
  json.forEach((el) => {
    showWinnerCar(el);
  });
};

function showWinnerCar(element) {
  let winner = document.createElement("tr");
  winner.innerHTML = `
    <td>1</td>
    <td>${element.id}</td>
    <td>${element.id}</td>
    <td>${element.wins}</td>
    <td>${element.time}</td>`;
  document.querySelector(".winners-table").appendChild(winner);
}

renderWinnerCars();
