export function zeroMatrix(matrix) {
  if (!matrix || !matrix.length) throw Error('invalid matrix');
  if (matrix.length === 1 && matrix[0].length === 1) return matrix;

  const coordsSet = new Set();
  matrix.forEach((row, i) => {
    row.forEach((cell, x) => {
      if (cell === 0) coordsSet.add([i, x]);
    });
  });

  coordsSet.forEach(coord => {
    const row = coord[0];
    matrix[row].forEach((cell, index) => {
      if (cell !== 0) matrix[row][index] = 0;
    });
  // Going through each row again to check for column even
  // though column will have changed when its row changed
    matrix.forEach(rowArr => {
      const cell = coord[1];
      if (rowArr[cell] !== 0) rowArr[cell] = 0;
    });
  });

  return matrix;
}

const matrix = [
  [1, 2, 0, 4],
  [12, 13, 14, 5],
  [11, 16, 0, 6],
  [10, 9, 8, 7]
];

console.log(zeroMatrix(matrix));
