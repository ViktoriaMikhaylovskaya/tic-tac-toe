let playerSymbol = "X";
let gameEnded = false;
let winPos = [ // возможныe «выигрышныe» позиции
    [1, 2, 3], [4, 5, 6], 
    [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]
]; 

function onClickCell() {
    if (this.innerHTML === '' && !gameEnded) { 
        this.innerHTML = playerSymbol;
        this.classList.add(playerSymbol.toLowerCase());

        checkWin();

        if (playerSymbol === "X") {
            playerSymbol = "O";
        } else { 
            playerSymbol = "X";
        }
    }
};

for (let i = 1; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener('click', onClickCell);
};

function checkWin() {
    for (let i = 0; i < winPos.length; i++) {
        const firstElem = document.getElementById(winPos[i][0]);
        const secondElem = document.getElementById(winPos[i][1]);
        const thirdElem = document.getElementById(winPos[i][2]);

        if (
            firstElem.innerHTML === playerSymbol &&
            secondElem.innerHTML === playerSymbol &&
            thirdElem.innerHTML === playerSymbol
        ) {
            firstElem.classList.add("win");
            secondElem.classList.add("win");
            thirdElem.classList.add("win"); 
            gameEnded = true;

            setTimeout(function() {
                alert(playerSymbol + " wins!");
            }, 500); 
        } 
    } 
};

document.getElementById("reset").addEventListener('click', function () {
    for (let i = 1; i <= 9; i++) {
        const element = document.getElementById(`${i}`);

        element.innerHTML = "";
        element.classList.remove("x");
        element.classList.remove("o");
        element.classList.remove("win");

        gameEnded = false;
    }
});