function computerChoiceInt() {
  return Math.floor(Math.random() * 3) + 1;
}
let playerWins = 0;
let computerWins = 0;

function playGame() {
  let computerChoiceNum = computerChoiceInt();
  let playerChoice = "";

  while (true) {
    playerChoice = prompt(
      "Input Your choice: rock, paper, or scissors (or 'quit' to exit)"
    );
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "quit") {
      break;
    } else if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      break;
    } else {
      alert(
        "Invalid choice. Please enter rock, paper, or scissors (or 'quit' to exit)."
      );
    }
  }
  // 1 - rock 2 - paper
  let computerChoice = "";
  if (computerChoiceNum == 1) {
    computerChoice = "rock";
  } else if (computerChoiceNum == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  if (playerChoice === computerChoice) {
    alert("Computer chose: " + computerChoice + ". It's a Tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("Computer chose: " + computerChoice + ". Player Wins!");
    playerWins++;
  } else {
    alert("Computer chose: " + computerChoice + ". Computer Wins!");
    computerWins++;
  }
  const playAgain = prompt("Play again? (yes/no)");
  if (playAgain.toLowerCase() === "yes") {
    playGame();
  } else {
    alert(`Final score: Player - ${playerWins}, Computer - ${computerWins}`);
  }
}
playGame();
