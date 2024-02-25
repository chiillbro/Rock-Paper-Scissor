let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".option");
const message = document.querySelector("#message");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");

const generateComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const draw = () => {
  message.innerText = "Oops, it's a Draw!, Play again";
  message.style.backgroundColor = "#2d2d2d";
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const playerChoice = option.getAttribute("id");
    playGame(playerChoice);
  });
});

const playGame = (playerChoice) => {
  const computerChoice = generateComputerChoice();

  if (playerChoice == computerChoice) {
    draw();
  } else {
    let playerWins = true;
    if (playerChoice === "Rock") {
      playerWins = computerChoice === "Paper" ? false : true;
    } else if (playerChoice === "Scissor") {
      playerWins = computerChoice === "Paper" ? true : false;
    } else {
      playerWIns = computerChoice === "Scissor" ? false : true;
    }
    showWinner(playerWins, playerChoice, computerChoice);
  }
};

const showWinner = (playerWins, playerChoice, computerChoice) => {
  if (playerWins) {
    playerScore++;
    playerScoreElement.innerText = playerScore;
    message.innerHTML = `You win! your ${playerChoice} beats ${computerChoice}`;
    message.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScoreElement.innerHTML = computerScore;
    message.innerHTML = `You Lost! ${computerChoice} beats ${playerChoice}`;
    message.style.backgroundColor = "red";
  }
};
