'use strict';

export function rotateMatrix(matrix) {
  if (!matrix || !matrix.length) throw Error('invalid matrix');

  const len = matrix.length;
  for (let layer = 0; layer < len / 2; layer++) {
    const firstLayer = layer,
          lastLayer = len - 1 - layer;

    for (let i = layer; i < lastLayer; i++) {
      const offset = i - layer,
            top = matrix[firstLayer][i];

      // left -> top
      matrix[firstLayer][i] = matrix[lastLayer - offset][firstLayer];
      // bottom -> left
      matrix[lastLayer - offset][firstLayer] = matrix[lastLayer][lastLayer - offset];
      // right -> bottom
      matrix[lastLayer][lastLayer - offset] = matrix[i][lastLayer];
      // top -> right
      matrix[i][lastLayer] = top;
    }
  }
  return matrix;
}

const matrix4X4 = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];

const matrix5X5 = [
  [1, 2, 3, 4, 5],
  [15, 25, 26, 19, 6],
  [15, 24, 27, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
];

rotateMatrix(matrix4X4);
