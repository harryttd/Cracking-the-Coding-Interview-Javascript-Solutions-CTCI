'use strict';

const GRID_SIZE = 8;

class Queens {
  constructor(gridSize = 8) {
    this.gridSize = gridSize;
    this.columns = new Array(gridSize);
    this.result = [];
  }

  checkValidSpot(row1, col1) {
    for (let row2 = 0; row2 < row1; row2++) {
      const col2 = this.columns[row2];

      if (col1 === col2) return false;

      const columnDistance = Math.abs(col1 - col2);
      const rowDistance = row1 - row2;
      if (columnDistance === rowDistance) return false;
    }

    return true;
  }

  placeQueens(row = 0) {
    if (row === this.gridSize) { // Found valid placement
      // console.log(this.columns);
      this.result.push([...this.columns]);
    } else {
      for (let col = 0; col < this.gridSize; col++) {
        if (this.checkValidSpot(row, col)) {
          this.columns[row] = col;	// Place queen
          this.placeQueens(row + 1);
        }
      }
    }
    return this.result;
  }
}
const x = new Queens().placeQueens();

/* Check if (row1, column1) is a valid spot for a queen by checking if there
* is a queen in the same column or diagonal. We don't need to check it for queens
* in the same row because the calling placeQueen only attempts to place one queen at
* a time. We know this row is empty.
*/
function checkValid(columns, row1, column1) {
  for (let row2 = 0; row2 < row1; row2++) {
    const column2 = columns[row2];
    /* Check if (row2, column2) invalidates (row1, column1) as a queen spot. */

    /* Check if rows have a queen in the same column */
    if (column1 === column2) return false;

    /* Check diagonals: if the distance between the columns equals the distance
    * between the rows, then they’re in the same diagonal. */
    const columnDistance = Math.abs(column2 - column1);
    const rowDistance = row1 - row2; // row1 > row2, so no need to use absolute value
    if (columnDistance === rowDistance) {
      return false;
    }
  }
  return true;
}

function placeQueens(row, columns, results) {
  if (row === GRID_SIZE) { // Found valid placement
    results.push([...columns]);
  } else {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (checkValid(columns, row, col)) {
        columns[row] = col;	// Place queen
        placeQueens(row + 1, columns, results);
      }
    }
  }
}

function printBoard(columns) {
  drawLine();
  for (let i = 0; i < 8; i++){
    console.log("|");
    for (let j = 0; j < 8; j++){
      if (columns[i] === j) {
        console.log("Q|");
      } else {
        console.log(" |");
      }
    }
    console.log("\n");
    drawLine();
  }
  console.log("\n");
}

function drawLine() {
  let line = '';
  for (let i = 0; i < 17; i++) {
    line += '-';
  }
  console.log(line);
}


function printBoards(boards) {
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    printBoard(board);
  }
}

const result = [];
const c = new Array(8).fill(-1);
placeQueens(0, c, result);
// printBoards(result);
// console.log('\n');
// console.log(result.length);
// printBoards(results);

const board = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];
// eightQueens(board);
