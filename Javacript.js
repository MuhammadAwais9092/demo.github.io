//Final Assignment 

//Definning the current grid and the total number of grids
var currentGridIndex = 1;
var totalGrids = 10;

//Functions for the next grid
function showNextGrid() {

    //not displaying the current grid
    var currentGrid = document.getElementById("Grid" + currentGridIndex);
    currentGrid.style.display = "none";
    
    //writing the function to update the current grid for the next grid
    currentGridIndex = (currentGridIndex % totalGrids) + 1;

    //showing up the next grid
    var nextGrid = document.getElementById("Grid" + currentGridIndex);
    nextGrid.style.display = "block";
}

//Function for showing up the next grid
function showPreviousGrid() {

    //not displaying the current grid
    var currentGrid = document.getElementById("Grid" + currentGridIndex);
    currentGrid.style.display = "none";

    //writing the codes to update the current grid for the previous grid
    currentGridIndex = currentGridIndex - 1;
    if (currentGridIndex === 0) {
        currentGridIndex = totalGrids;
    }

    // showing up the previous grid
    var previousGrid = document.getElementById("Grid" + currentGridIndex);
    previousGrid.style.display = "block";

}//ending the function