'use strict';

// O(ROWS * COLUMNS) TIME WITH SET
// O(2ˆr+c) TIME WITHOUT SET

function getPathForRobot(maze) {
  if (!maze || !maze.length) return null;
  return findPath(maze, maze.length - 1, maze[0].length - 1);
}

function findPath(maze, row, column, path = [], failedPoints = new Set()) {
  if (column < 0 || row < 0 || !maze[row][column]) return null;

  const isAtOrigin = !row && !column,
        point = `(${row}, ${column})`;

  if (failedPoints.has(point)) return null;

  if (
    isAtOrigin ||
    findPath(maze, row, column - 1, path, failedPoints) ||
    findPath(maze, row - 1, column, path, failedPoints)
  ) {
    path.push(point);
    return path;
  }

  failedPoints.add(point);
  return null;
}

const maze = [
  [true, true, true, false], // 0
  [false, true, true, false], // 1
  [true, false, true, false], // 2
  [true, true, true, false], // 3
  [false, true, true, true], // 4
  [true, false, false, true] // 5
];
console.log(getPathForRobot(maze));
