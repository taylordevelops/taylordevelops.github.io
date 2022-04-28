
const container = document.getElementsByClassName("container");
const box = document.getElementsByClassName("color-box");

// Get a Random RGB Color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Change the background-color of box to randomColor()
function changeColor() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = randomColor();
    }
}

// Generate (num) number 'color-box' elements
function generateBoxes(num) { 
    for (let i = 0; i < num; i++) {
    let newBox = document.createElement("div");
    newBox.className = "color-box";
    newBox.style.backgroundColor = randomColor();
    container[0].appendChild(newBox);
}
}
generateBoxes(49);

// Give boxes random sizes
function randomSize() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.width = Math.floor(Math.random() * 4) + 26 + "vmin";
        box[i].style.height = Math.floor(Math.random() * 4) + 26 + "vmin";
    }
}


// Rotate the boxes continuously
function rotateBoxes() {
    let angle = 0;
    let interval = setInterval(function() {
        angle -= 0.3;
        container[0].style.transform = "rotate(" + angle + "deg)";
    }, 15);
}
rotateBoxes();

// Give each box a random border-radius
function randomRadius() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.borderRadius = Math.floor(Math.random() * 10 * 0.5) + "rem";
    }
}

// Give each box a random border-width
function randomWidth() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.borderWidth = Math.floor(Math.random() * 10) + "px";
    }
}

// Give each box a random opacity
function randomOpacity() {
    for (let i = 0; i + 90 < box.length; i++) {
        box[i].style.opacity = Math.random();
    }
}

// Give each box a random z-index
function randomZIndex() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.zIndex = Math.floor(Math.random() * 10);
    }
}

// Set the body-background-color to a random color
function randomBackground() {
    document.body.style.backgroundColor = randomColor();
}

// Give color-box a random border-shadow-color
function randomShadow() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.boxShadow = "2em 2em " + Math.floor(Math.random() * 10) + "em " + randomColor();
    }
}


function doEverything() {
    
    randomSize();
    randomShadow();
    randomZIndex();
    randomOpacity();
    changeColor();
    randomRadius();
    randomWidth();
    randomColor();
    randomBackground();
}
doEverything();