
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

let resetBtn = document.querySelector("#reset");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
};

const drawGame = () => {
    msg.innerText = "It's a Draw. Play again";
    msg.style.backgroundColor = "rgb(84, 79, 79)"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `you win !! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        msg.innerText = `you lost !! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    compChoice = generateCompChoice();
    if(userChoice === compChoice) {
        //draw
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //compChoice can be paper or scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //compChoice can be rock or scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //compChoice can be rock or scissors
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const resetGame = () => {
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#272727";
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
};

resetBtn.addEventListener("click", resetGame);