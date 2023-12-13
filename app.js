const board = document.querySelector(".board");
const changeSizeButton = document.querySelector("#size");
const randomColorButton = document.getElementById("random");
const eraserButton = document.getElementById("erase");
console.log(eraserButton)
const black = '#000'
const blackButton = document.getElementById("black");
const startOverButton = document.getElementById("startOver");
// console.log(changeSizeButton)




changeSizeButton.addEventListener("click", getSizeOfGrid)

function getSizeOfGrid() {
    let size = Number(prompt("what size do you want must be >1 and < 100 ?"))
    console.log(typeof (size))
    if (isNaN(size) || size < 2 || size > 100) {
        alert("Please enter a valid size ");
        return;
    }


    setGridSize(size)
}


function setGridSize(size) {
    board.style.gridTemplateColumns = `repeat(${size},1fr)`; // Fix the template string here
    board.style.gridTemplateRows = `repeat(${size}), 1fr`; // Fix the template string here

    let numberOfDivs = size * size;
    console.log(numberOfDivs);
    for (let i = 0; i < numberOfDivs; i++) {
        let divItems = document.createElement("div");
        divItems.classList.add("new");
        board.appendChild(divItems)


        // divItems.addEventListener("mouseover", function () {
        //     divItems.style.backgroundColor = randomColor()
        // })

    }



}

// random color

// randomColorButton.addEventListener("click", randomColor)

function randomColor() {
    const red = Math.floor(Math.random() * 256)
    // console.log(red)

    const blue = Math.floor(Math.random() * 256)
    // console.log(blue)

    const green = Math.floor(Math.random() * 256)
    // console.log(green)

    let random = `RGB(${red},${blue},${green})`
    return random

}


randomColorButton.addEventListener("click", RgbChoice)

function RgbChoice() {
    const gridSquares = document.querySelectorAll(".new");
    gridSquares.forEach(square => {
        // square.style.backgroundColor = black;
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = randomColor()
        })
    });
}

//black

blackButton.addEventListener("click", blackGrid)

function blackGrid() {
    const gridSquares = document.querySelectorAll(".new");
    gridSquares.forEach(square => {
        // square.style.backgroundColor = black;
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = black
        })
    });
}

//eraseOne
eraserButton.addEventListener("click", eraseOne)

function eraseOne() {
    const gridSquares = document.querySelectorAll(".new");
    gridSquares.forEach(square => {
        // square.style.backgroundColor = black;
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = ""
        })
    });
}



// eraser
startOverButton.addEventListener("click", eraseGrid)

function eraseGrid() {
    const gridSquares = document.querySelectorAll(".new");
    gridSquares.forEach(square => {
        square.style.backgroundColor = "";
    });
}





