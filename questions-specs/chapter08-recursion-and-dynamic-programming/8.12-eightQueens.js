'use strict';

function eightQueens() {
  const columns = [], gridSize = 8, result = [];
  placeQueens(0, columns, gridSize, result);
  return result;
}

function placeQueens(row, columns, gridSize, result) {
  if (row === gridSize) result.push(columns.slice());
  else {
    for (let col = 0; col < gridSize; col++) {
      if (validSpot(row, col, columns)) {
        columns[row] = col;
        placeQueens(row + 1, columns, gridSize, result);
      }
    }
  }
}

function validSpot(rowToPlace, colToPlace, columns) {
  for (let row2 = 0; row2 < rowToPlace; row2++) {
    const col2 = columns[row2];

    // Check if rows have queen in the same column
    if (colToPlace === col2) return false;
    // Check diagonals
    if (Math.abs(colToPlace - col2) === rowToPlace - row2) return false;
  }
  return true;
}
console.log(eightQueens());
