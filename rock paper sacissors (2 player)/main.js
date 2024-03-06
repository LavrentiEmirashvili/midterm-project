let player1Wins = 0;
let player2Wins = 0;

function playGame() {
  while (true) {
    const player1Choice = prompt(
      "Player 1, please choose: rock, paper, or scissors"
    ).toLowerCase();
    if (
      player1Choice === "rock" ||
      player1Choice === "paper" ||
      player1Choice === "scissors"
    ) {
      while (true) {
        const player2Choice = prompt(
          "Player 2, please choose: rock, paper, or scissors"
        ).toLowerCase();
        if (
          player2Choice === "rock" ||
          player2Choice === "paper" ||
          player2Choice === "scissors"
        ) {
          if (player1Choice === player2Choice) {
            alert("It's a Tie!");
          } else if (
            (player1Choice === "rock" && player2Choice === "scissors") ||
            (player1Choice === "paper" && player2Choice === "rock") ||
            (player1Choice === "scissors" && player2Choice === "paper")
          ) {
            alert("Player 1 Wins!");
            player1Wins++;
          } else {
            alert("Player 2 Wins!");
            player2Wins++;
          }
          break;
        } else {
          alert("Invalid choice. Please enter rock, paper, or scissors.");
        }
      }
      break;
    } else {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
    }
  }
  const playAgain = prompt("Play again? (yes/no)").toLowerCase();
  if (playAgain === "yes") {
    playGame();
  } else {
    alert(`Final score: Player 1 - ${player1Wins}, Player 2 - ${player2Wins}`);
  }
}
playGame();
