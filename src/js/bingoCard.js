var usedNums = new Array(76);
var numberToSquare = new Array(76);

function newCard() {
    //Starting loop through each square card
    for (var i = 0; i < 24; i++) {  //<--always this code for loops. change in red
        setSquare(i);
    }

    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    ctx.font = "50px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText("Your Number Is: ", 10, 80);

}

function setSquare(thisSquare) {
    var currSquare = "square" + thisSquare;
    var newNum;

    var colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);

    do {
        newNum = (colPlace[thisSquare] * 15) + getNewNum() + 1;
        // newNum = getNewNum();
    }
    while (usedNums[newNum]);

    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
    numberToSquare[newNum] = thisSquare;
}

function getNewNum() {
    // return Math.floor(Math.random() * 75);
    return Math.floor(Math.random() * 15);

}

function anotherCard() {
    for (var i = 1; i < usedNums.length; i++) {
        usedNums[i] = false;
    }

    newCard();
}