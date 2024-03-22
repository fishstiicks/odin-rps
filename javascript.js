let playerScore = 0;
let compScore = 0; 

    function getUserChoice() {
        var userInput = prompt("Choose rock, paper, or scissors.");
        var userChoice = userInput.toLowerCase();
        return userChoice;
    }

    function getComputerChoice() {
        const RPS = ["rock", "paper", "scissors"];
        const compChoice = RPS[Math.floor(Math.random() * RPS.length)];
        return compChoice;
    }

    function playRound() {
    const userChoice = getUserChoice();
    console.log("You selected",userChoice,".");
    const compChoice = getComputerChoice();
    console.log("Computer selected",compChoice,".");

        if (userChoice === compChoice) {
            console.log("You Tied!") 
        }
        if (userChoice === "rock" & compChoice === "paper" ||
            userChoice === "scissors" & compChoice === "paper" ||
            userChoice === "paper" & compChoice === "rock") {
            console.log("You Win!",userChoice,"beats",compChoice,"!")
            playerScore++;
        }
        if (userChoice === "rock" & compChoice === "scissors" ||
            userChoice === "scissors" & compChoice === "rock" ||
            userChoice === "paper" & compChoice === "scissors") {
            console.log("You Lose!",compChoice,"beats",userChoice,"!")
            compScore++;
        }
    }

    function playGame() {
            for (let round = 0; round < 5;round++){
                playRound();
                }
        console.log("Player Score:",playerScore," & Computer Score:",compScore)

        if (playerScore > compScore) {console.log("Player Wins.")}
        if (compScore > playerScore) {console.log("Computer Wins.")}
        if (playerScore === compScore) {console.log("Tie.")}
            }