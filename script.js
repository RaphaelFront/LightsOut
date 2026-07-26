GRID_WIDTH = 5;

const grid = document.querySelector(".grid");

grid.style.gridTemplateColumns = `repeat(${GRID_WIDTH}, 80px)`;
grid.style.gridTemplateRows = `repeat(${GRID_WIDTH}, 80px)`;

const boxes = [];

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

function click(box) {
    const x = Number(box.dataset.col);
    const y = Number(box.dataset.row);
    
    toggleBox(x, y);
    toggleBox(x+1, y);
    toggleBox(x-1, y);
    toggleBox(x, y+1);
    toggleBox(x, y-1);

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
