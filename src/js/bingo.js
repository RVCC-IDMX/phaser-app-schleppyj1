let numbersCalled = new Array(76);

let squaresSelected = new Array(25);

let newNumber = -1;

const sound = new Audio('public/assets/sound-effects/coin.wav');

const soundTwo = new Audio('public/assets/sound-effects/Win sound.wav');

function selectNextBingoNumber() {
    newNumber = Math.floor(Math.random() * 75 + 1);

    while (numbersCalled[newNumber] === 1) {
        newNumber = Math.floor(Math.random() * 75 + 1);
    }

    numbersCalled[newNumber] = 1;

    let bingoNumber = "";
    if (newNumber < 16) {
        bingoNumber = "B-" + newNumber;
    } else if (newNumber < 31) {
        bingoNumber = "I-" + newNumber;
    } else if (newNumber < 46) {
        bingoNumber = "N-" + newNumber;
    } else if (newNumber < 61) {
        bingoNumber = "G-" + newNumber;
    } else {
        bingoNumber = "O-" + newNumber;
    }

    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Your Number is: " + bingoNumber, 10, 80);

    // window.alert('New number = ' + bingoNumber);

    if (usedNums[newNumber] === true) {
        // window.alert('There is a match!');
        // window.alert('Square = square' + numberToSquare[newNumber]);
        // document.getElementById("square" + numberToSquare[newNumber]).style.backgroundColor = '#F8C8DC';

        /*const cells = document.querySelectorAll('td');

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (cell.id = "square" + numberToSquare[newNumber]) {
                    sound.src = 'public/assets/sound-effects/coin.wav'; // Set the path to your audio file
                    sound.play();
                }
            });
        });*/

        let thisSquare = numberToSquare[newNumber];
        squaresSelected[thisSquare] = true;

    }

    return newNumber;
}

function checkForBingo() {
    // Check for all possible combinations of bingo.
    if (squaresSelected[0] === true && squaresSelected[1] === true && squaresSelected[2] === true &&
        squaresSelected[3] === true && squaresSelected[4] === true) {
        alertWin();
        soundTwo.play();
        return;
    }
    if (squaresSelected[5] === true && squaresSelected[6] === true && squaresSelected[7] === true &&
        squaresSelected[8] === true && squaresSelected[9] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[10] === true && squaresSelected[11] === true &&
        squaresSelected[12] === true && squaresSelected[13] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[14] === true && squaresSelected[15] === true && squaresSelected[16] === true &&
        squaresSelected[17] === true && squaresSelected[18] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[19] === true && squaresSelected[20] === true && squaresSelected[21] === true &&
        squaresSelected[22] === true && squaresSelected[23] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[0] === true && squaresSelected[5] === true && squaresSelected[10] === true &&
        squaresSelected[14] === true && squaresSelected[19] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[1] === true && squaresSelected[6] === true && squaresSelected[11] === true &&
        squaresSelected[15] === true && squaresSelected[20] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[2] === true && squaresSelected[7] === true &&
        squaresSelected[16] === true && squaresSelected[21] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[3] === true && squaresSelected[8] === true && squaresSelected[12] === true &&
        squaresSelected[17] === true && squaresSelected[22] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[4] === true && squaresSelected[9] === true && squaresSelected[13] === true &&
        squaresSelected[18] === true && squaresSelected[23] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[0] === true && squaresSelected[6] === true &&
        squaresSelected[17] === true && squaresSelected[23] === true) {
        alertWin();
        soundTwo.play();
        return;
    }

    if (squaresSelected[4] === true && squaresSelected[8] === true &&
        squaresSelected[15] === true && squaresSelected[19] === true) {
        alertWin();
        soundTwo.play();
        return;
    }
}

function alertWin() {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Congratulations!", 10, 80);
}

function checkForChangeColor(cell) {

    if (cell.id == "square" + numberToSquare[newNumber]) {
        sound.src = 'public/assets/sound-effects/coin.wav'; // Set the path to your audio file
        sound.play();
        cell.style.backgroundColor = "#F8C8DC";
        checkForBingo();
    }
}

