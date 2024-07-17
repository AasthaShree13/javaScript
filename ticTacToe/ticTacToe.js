let boxes = document.querySelectorAll(".box");
let restartBtn = document.querySelector("#restart");
let winnerMsg = document.querySelector("#msg");

let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner ();
    });
});

const checkWinner = () => {
    for(pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val == pos3val) {
                console.log("game ends here");
                console.log(pos1val, "is the winner");
                printWinner(pos1val);
                disableBoxes();
            }
        }
    }
}

const printWinner = (winner) => {
    winnerMsg.innerText = `* WINNER is ${winner} *`;
    winnerMsg.classList.remove("hide");
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const restartGame = () => {
    turnX = true;
    winnerMsg.classList.add("hide");
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    console.log("restart");
}

restartBtn.addEventListener("click", restartGame );