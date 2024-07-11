function getComputerChoice()
{
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let choice = "";

  if (randomNum === 1) {
    choice = "rock";
  } else if (randomNum === 2) {
    choice = "paper";
  } else {
    choice = "scissor";
  }

  return choice;
}

function getPlayerChoice() {
  let input = prompt("Enter your choice: Rock, Paper or Scissor").toLowerCase();
  let choice = "";
  
  if (input === "rock") {
    choice = "rock";
  } else if (input === "paper") {
    choice = "paper";
  } else if (input === "scissor") {
    choice = "scissor";
  } else {
    alert("Wrong input");
    getPlayerChoice();
  }

  return choice;
}

function playRound(computerChoice, playerChoice)
{ 
  if (computerChoice === playerChoice) {
    return 0;
  } else if ((computerChoice === "rock" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "scissor") || (computerChoice === "scissor" && playerChoice === "rock")) {
    return 2;
  } else if ((computerChoice === "rock" && playerChoice === "scissor") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissor" && playerChoice === "paper")) {
    return 1;
  }
}

function playGame() {
  alert("Welcome to the game Rock, Paper, Scissor. \nThe game is of 5 rounds");
  let computerPoints = 0;
  let playerPoints = 0;

  for (let i=0; i<5; i++)
  { 
    alert(`Round: ${i+1}`);
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let winner = playRound(computerChoice, playerChoice);

    if (winner === 1) {
      alert(`You lost the round \nYour choice: ${playerChoice} \nComputer's choice: ${computerChoice}`);
      computerPoints++;
    } else if (winner === 2) {
      alert(`You won the round \nYour choice: ${playerChoice} \nComputer's choice: ${computerChoice}`);
      playerPoints++;
    } else {
      alert (`Round drawn \nYour choice: ${playerChoice} \nComputer's choice: ${computerChoice}`);
    }
  }

  if (computerPoints > playerPoints) {
    alert("You LOST the game");
  } else if (computerPoints < playerPoints) {
    alert("You WON the game");
  } else {
    alert("Game DRAWN");
  }
}

playGame();