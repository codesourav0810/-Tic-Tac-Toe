const cells = document.querySelectorAll(".cell");
const p1 = document.querySelector(".player1");
const p2 = document.querySelector(".player2");
let currentPlayer = "player1";
const p1Input = document.querySelector(".player1-input");
const p2Input = document.querySelector(".player2-input");
const startButton = document.querySelector(".start-game");
const setupSection = document.querySelector(".setup-card");
const playersCard = document.querySelector(".players");
const container = document.querySelector(".container");
const Winnercard = document.querySelector(".card");
const winnerName = document.querySelector(".winner-name");
const restart = document.querySelector(".restart");
const drawCard = document.querySelector(".draw-card");
const drawRestart = document.querySelector(".draw-restart");

drawCard.classList.add("hidden");
let gameOver = false;
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

container.classList.add("hidden");
Winnercard.classList.add("hidden");
playersCard.classList.add("hidden");
/*Display the name of player 1 and 2 */

startButton.addEventListener("click", function () {
  if (p1Input.value === "" || p2Input.value === "") {
    alert("Please enter player names.");
    return; /*this means stop the game right here dont start the game until input is given */
}
  const p1Name = p1Input.value;
  const p2Name = p2Input.value;
  p1.textContent = p1Name;
  p2.textContent = p2Name;

  setupSection.classList.add("hidden");
  playersCard.classList.remove("hidden");
  container.classList.remove("hidden");

  p1.classList.add("active");
});

/*Game logic */
for (const cell of cells) {
  cell.addEventListener("click", function () {
    if (cell.innerHTML == "" && gameOver === false) {
      if (currentPlayer === "player1") {
        cell.innerHTML ='<img src="cross.png" class="cell-img">';
        currentPlayer = "player2";
        p1.classList.remove("active");
        p2.classList.add("active2");
      } else {
        cell.innerHTML = '<img src="circle.png" class="cell-img">';;
        currentPlayer = "player1";
        p2.classList.remove("active2");
        p1.classList.add("active");
      }
      for (const combo of winCombo) {
        if (
          cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
          cells[combo[1]].innerHTML === cells[combo[2]].innerHTML &&
          cells[combo[0]].innerHTML != ""
        ) {
          const p1Name = p1Input.value;
          const p2Name = p2Input.value;
          if (cells[combo[0]].innerHTML ==='<img src="cross.png" class="cell-img">') {
            container.classList.add("hidden");
            playersCard.classList.add("hidden");
            Winnercard.classList.remove("hidden");

            winnerName.textContent = p1Name;
          } else {
            container.classList.add("hidden");
            playersCard.classList.add("hidden");
            Winnercard.classList.remove("hidden");
            winnerName.textContent = p2Name;
          }
          gameOver = true;
        }
      }
      /*Draw card */
  let boardFull = true;
  
  for (const cell of cells) {
      if (cell.innerHTML === "") {
          boardFull = false;
      }
  }
  if (boardFull === true && gameOver === false) {
      drawCard.classList.remove("hidden");
  
  container.classList.add("hidden");
  playersCard.classList.add("hidden");
  
  gameOver = true;
  }
    }
  });
}

/*Restart Button*/
restart.addEventListener("click", function () {
  container.classList.add("hidden");
playersCard.classList.add("hidden");
Winnercard.classList.add("hidden");
drawCard.classList.add("hidden");
setupSection.classList.remove("hidden");
  for (const cell of cells) {
    cell.innerHTML = "";
}

gameOver = false;
currentPlayer = "player1";
p1.classList.add("active");
p2.classList.remove("active2");
p1Input.value="";
p2Input.value="";

});

/*Restart Button*/
drawRestart.addEventListener("click", function () {
  container.classList.add("hidden");
playersCard.classList.add("hidden");
Winnercard.classList.add("hidden");
drawCard.classList.add("hidden");
setupSection.classList.remove("hidden");
  for (const cell of cells) {
    cell.innerHTML = "";
}

gameOver = false;
currentPlayer = "player1";
p1.classList.add("active");
p2.classList.remove("active2");
p1Input.value="";
p2Input.value="";

});
