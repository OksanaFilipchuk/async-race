export let winnersBlock = document.createElement("div");
winnersBlock.className = "winners-block";
winnersBlock.innerHTML = `<p class = "winners-count">Winners()</p>
<table class = "winners-table">
  <thead>
    <tr>
      <th>№</th>
      <th>Car</th>
      <th>Name</th>
      <th>Wins</th>
      <th>Best time(sec)</th>
    </tr>
  </thead>    
  <tbody class = ".tbody"></tbody>
</table>`;
let prevButtonWinners = document.createElement("button");
prevButtonWinners.id = "prev-button-winners";
prevButtonWinners.textContent = "Prev";
let nextButtonWinners = document.createElement("button");
nextButtonWinners.id = "next-button-winners";
nextButtonWinners.textContent = "Next";
let winnersPageNumber = document.createElement("span");
winnersPageNumber.className = "winners-page-number";
winnersPageNumber.textContent = "1";
winnersBlock.appendChild(prevButtonWinners);
winnersBlock.appendChild(winnersPageNumber);
winnersBlock.appendChild(nextButtonWinners);
