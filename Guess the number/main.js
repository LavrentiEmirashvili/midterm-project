let attempts = Number(
  prompt("Enter the number of attempts (leave blank for 10 attempts):")
);
if (isNaN(attempts) || attempts === 0) {
  attempts = 10;
}
const randomNumber = Math.floor(Math.random() * 1000) + 1;
let guess;
for (let i = 0; i < attempts; i++) {
  guess = Number(prompt("enter your guess:"));
  if (isNaN(guess)) {
    alert("Invalid input, please enter a number.");
    continue;
  }
  if (guess === randomNumber) {
    alert("correct guess!");
    break;
  } else if (guess < randomNumber) {
    alert("your guess is too low.");
  } else {
    alert("your guess is too high.");
  }
}
if (guess !== randomNumber) {
  alert("you ran out of attempts, the number was: " + randomNumber);
}
