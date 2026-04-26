let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const option= ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const playGame=(userChoice) => { 
    console.log("playGame was called", userChoice);
    const computerChoice = genCompChoice();
    console.log("computer choice is", computerChoice);
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
        document.getElementById("message").innerText = "It's a tie!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "paper" && computerChoice === "rock") ||
               (userChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win!");
        userScore++;
        document.getElementById("user-score").innerText = userScore;
        document.getElementById("message").innerText = "You win!";
    } else {
        console.log("Computer wins!");
        computerScore++;
        document.getElementById("comp-score").innerText = computerScore;
        document.getElementById("message").innerText = "Computer wins!";
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});