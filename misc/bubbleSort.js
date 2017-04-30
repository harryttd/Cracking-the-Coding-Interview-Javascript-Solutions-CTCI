'use strict';

// O(N^2) TIME --- O(1) SPACE

export function bubbleSort(array) {
  let sorted = false;
  for (let end = array.length; end > 0 && !sorted; end--) {
    sorted = true;
    for (let j = 0; j < end; j++) {
      if (!inOrder(array, j)) {
        swap(array, j);
        sorted = false;
      }
    }
  }
  return array;
}

export function inOrder(array, index) {
  if (index === array.length - 1) return true;
  return array[index] < array[index + 1];
}

export function swap(array, index) {
  [array[index], array[index + 1]] = [array[index + 1], array[index]];
}
