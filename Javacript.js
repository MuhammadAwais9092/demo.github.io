var currentGridIndex = 1;
var totalGrids = 10;

function showNextGrid() {
    var currentGrid = document.getElementById("Grid" + currentGridIndex);
    currentGrid.style.display = "none";

    currentGridIndex = (currentGridIndex % totalGrids) + 1;

    var nextGrid = document.getElementById("Grid" + currentGridIndex);
    nextGrid.style.display = "block";
}

function showPreviousGrid() {
    var currentGrid = document.getElementById("Grid" + currentGridIndex);
    currentGrid.style.display = "none";

    currentGridIndex = currentGridIndex - 1;
    if (currentGridIndex === 0) {
        currentGridIndex = totalGrids;
    }

    var previousGrid = document.getElementById("Grid" + currentGridIndex);
    previousGrid.style.display = "block";

}