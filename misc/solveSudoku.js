'use strict';

function solveSudoku(grid) {
  const cell = [0, 0];

  if (!findEmptyLocation(grid, cell)) return grid;

  const [row, col] = cell;

  for (let num = 1; num < 10; num++) {
    if (checkSafeLocation(grid, row, col, num)) {
      grid[row][col] = num;
      if (solveSudoku(grid)) return grid;
      else grid[row][col] = 0;
    }
  }

  return null;
}

function findEmptyLocation(grid, cell) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (!grid[row][col]) {
        cell[0] = row;
        cell[1] = col;
        return true;
      }
    }
  }
  return false;
}

function checkSafeLocation(grid, row, col, num) {
  return (
    !usedInRowOrColumn(grid, row, col, num) &&
    !usedInBox(grid, row - row % 3, col - col % 3, num)
  );
}

function usedInRowOrColumn(grid, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num || grid[i][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox(grid, row, col, num) {
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      if (grid[i + row][x + col] === num) {
        return true;
      }
    }
  }
  return false;
}

const grid1 = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
];
console.log(solveSudoku(grid1));

const grid2 = [
  [0, 5, 0, 0, 2, 0, 0, 3, 0],
  [2, 0, 0, 0, 0, 1, 7, 0, 8],
  [4, 0, 7, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 4, 7],
  [0, 0, 0, 7, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 5, 0, 4],
  [3, 0, 6, 5, 0, 0, 0, 0, 1],
  [0, 9, 0, 0, 7, 0, 0, 6, 0]
];
console.log('\n', solveSudoku(grid2));
