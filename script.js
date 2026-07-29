
const grid = document.querySelector(".grid");
const slider = document.getElementById("width_slider");
const body = document.getElementById("body");
let GRID_WIDTH = 5;

let boxes = [];
update();

slider.addEventListener("input", function() {
    GRID_WIDTH = Number(slider.value);
    console.log(typeof slider.value);
    update();
});

function update() {
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${GRID_WIDTH},${400/GRID_WIDTH}px)`;
    grid.style.gridTemplateRows = `repeat(${GRID_WIDTH}, ${400/GRID_WIDTH}px)`;
    grid.style.gap = `${60/GRID_WIDTH}px`
    boxes = [];
    for (let row = 0; row < GRID_WIDTH; row++) {
        boxes[row] = [];
        for (let col = 0; col < GRID_WIDTH; col++) {
            const box = document.createElement("div");
            box.className = "box";

            boxes[row][col] = box;

            box.dataset.row = row;
            box.dataset.col = col;

            box.addEventListener("click", () => click(box));

            grid.appendChild(box);
        }
    }

    for(boxRow of boxes) {
        for(box of boxRow) {
            if(Math.random() < 0.5) {
                click(box);
            }
        }
    }
}

function click(box) {
    const x = Number(box.dataset.col);
    const y = Number(box.dataset.row);
    
    toggleBox(x, y);
    toggleBox(x+1, y);
    toggleBox(x-1, y);
    toggleBox(x, y+1);
    toggleBox(x, y-1);

    checkCompletion();

}

function checkCompletion() {
    for(boxRow of boxes) {
        for(box of boxRow) {
            if(box.style.backgroundColor === "yellow") {
                return;
            }
        }
    }
    update();
}

function toggleBox(x, y) {
    if(x < 0 || y < 0 || x >= GRID_WIDTH || y >= GRID_WIDTH) return;
    let box = boxes[y][x];
    if (box.style.backgroundColor === "yellow") {
        box.style.backgroundColor = "#1d1d1d";
    } else {
        box.style.backgroundColor = "yellow";
    }
}
