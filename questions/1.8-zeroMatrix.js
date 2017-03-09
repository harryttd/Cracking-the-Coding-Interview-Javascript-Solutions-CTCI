// FIRST SOLUTION
export function zeroMatrix1(matrix) {
  if (!matrix || !matrix.length) throw Error('invalid matrix');
  if (matrix.length === 1 && matrix[0].length === 1) return matrix;

  const coordsSet = new Set();
  matrix.forEach((row, i) => {
    row.forEach((cell, x) => {
      if (cell === 0) coordsSet.add([i, x]);
    });
  });

  coordsSet.forEach(coord => {
    const row = coord[0],
          col = coord[1];
    matrix[row].forEach((cell, index) => {
      matrix[row][index] = 0;
    });
  // Going through each row again to check for column even though column will have changed when the row it's in changed
    matrix.forEach(rowArr => {
      rowArr[col] = 0;
    });
  });

  return matrix;
}

// SECOND SHORTER SOLUTION
export function zeroMatrix2(matrix) {
  if (!matrix || !matrix.length) throw Error('invalid matrix');
  if (matrix.length === 1 && matrix[0].length === 1) return matrix;

  const colCoords = [];
  matrix.forEach(row => {
    if (row.includes(0)) {
      row.forEach((columnCell, index) => {
        if (columnCell === 0) colCoords.push(index);
        row[index] = 0;
      });
    }
  });

  // Only goes through rows that have not already changed to zero and changes columns to zero
  matrix.forEach(row => {
    if (row[0] !== 0) {
      colCoords.forEach(col => {
        row[col] = 0;
      });
    }
  });

  return matrix;
}

const matrix = [
  [1, 2, 0, 4],
  [0, 13, 14, 5],
  [11, 16, 0, 6],
  [10, 9, 8, 7]
];

console.log(zeroMatrix2(matrix));
