'use strict';

class Point {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }
}

function getPathForRobot(maze) {
  if (!maze || !maze.length) return null;
  return findPath(maze, maze.length - 1, maze[0].length - 1);
}

function findPath(maze, row, column, path = []) {
  if (!~column || !~row || !maze[row][column]) return null;

  const isAtOrigin = !row && !column;

  if (
    isAtOrigin ||
    findPath(maze, row, column - 1, path) ||
    findPath(maze, row - 1, column, path)
  ) {
    path.push(new Point(row, column));
    return path;
  }

  return null;

}

const maze = [
  [true, true, false, false],
  [true, false, true, true],
  [true, true, true, true]
];
console.log(getPathForRobot(maze));
