'use strict';

// O(N) TIME AND SPACE OF MAX VALUE IN THE ARRAY
export function countingSort(array) {
  const maxValue = Math.max(...array),
        numCounts = new Array(maxValue + 1).fill(0);

  array.forEach(num => numCounts[num] += 1);

  const sortedArray = [], { length } = numCounts;
  for (let num = 0; num < length; num++) {
    const count = numCounts[num];
    for (let i = 0; i < count; i++) {
      sortedArray.push(num);
    }
  }

  return sortedArray;
}
console.log(countingSort([2, 1, 0, 5, 100, 7]));
