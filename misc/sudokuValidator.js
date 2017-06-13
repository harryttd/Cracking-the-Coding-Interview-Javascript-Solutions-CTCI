'use strict';

function sudokuValidator(board) {
  for (const row of board) {
    if (new Set(row).size !== 9) return false;
  }

  const gridMap = new Map();

  for (let col = 0; col < 9; col++) {
    const column = new Set();
    for (let row = 0; row < 9; row++) {
      const cell = board[row][col];
      column.add(cell);

      const currentGrid = `${Math.floor(row / 3)}, ${Math.floor(col / 3)}`;
      if (!gridMap.has(currentGrid)) gridMap.set(currentGrid, new Set());
      const grid = gridMap.get(currentGrid);
      grid.add(cell);
    }

    if (column.size !== 9) return false;
  }

  for (const grid of gridMap) {
    if (grid[1].size !== 9) return false;
  }

  return true;
}

const sudoku = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
console.log(sudokuValidator(sudoku));
