let board = document.getElementById("board");
let move = 0

console.log(board);
board.addEventListener("click", function(e) {
  if (e.target.textContent) return;
  if (move % 2 === 0) {
    e.target.textContent = "X";
  } else {
    e.target.textContent = "O";
  }
  move++;
});
