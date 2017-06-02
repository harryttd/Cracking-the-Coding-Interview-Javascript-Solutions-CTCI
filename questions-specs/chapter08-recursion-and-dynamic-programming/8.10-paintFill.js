'use strict';

function paintFill(screenArr, row, column, newColor) {
  if (screenArr[row][column] === newColor) return false;
  return paint(screenArr, row, column, screenArr[row][column], newColor);
}

function paint(screenArr, row, column, oldColor, newColor) {
  if (row < 0 || row >= screenArr.length || column < 0 || column >= screenArr[0].length) return false;

  if (screenArr[row][column] === oldColor) {
    screenArr[row][column] = newColor;
    paint(screenArr, row - 1, column, oldColor, newColor);
    paint(screenArr, row + 1, column, oldColor, newColor);
    paint(screenArr, row, column - 1, oldColor, newColor);
    paint(screenArr, row, column + 1, oldColor, newColor);
  }

  return true;
}

const screenArr = [
  ['green', 'blue', 'yellow', 'orange'],
  ['green', 'yellow', 'yellow', 'orange'],
  ['green', 'blue', 'yellow', 'orange'],
  ['green', 'blue', 'blue', 'orange']
];

console.log(paintFill(screenArr, 1, 2, 'green'));
console.log(screenArr);
