'use strict';

// O(N) TIME
function magicIndex(arr) {
  for (const [index, num] of arr.entries()) {
    if (index === num) return index;
  }
  return -1;
}
console.log(magicIndex([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]));
console.log(magicIndex([-1, 0, 1, 3, 10, 15, 20, 22, 27, 30]));
console.log(magicIndex([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(log N) TIME --- O(1) SPACE
// Only works with distinct values
function magicIndex_BinarySearch(arr) {
  let head = 0, tail = arr.length - 1;

  while (head <= tail) {
    const midIndex = Math.floor((head + tail) / 2);
    if (midIndex === arr[midIndex]) return midIndex;
    else if (midIndex < arr[midIndex]) tail = midIndex - 1;
    else head = midIndex + 1;
  }

  return -1;
}
console.log(magicIndex_BinarySearch([-1, 0, 1, 3, 10, 15, 20, 22, 27, 30]));
console.log(magicIndex_BinarySearch([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(log N) TIME --- O(log N) SPACE (UNLESS THERE IS TAIL RECURSION)
// Only works with distinct values
function magicIndex_BSrecursive(arr, start = 0, end = arr.length - 1) {
  if (end < start) return -1;
  const midIndex = Math.floor((start + end) / 2);

  if (midIndex === arr[midIndex]) return midIndex;
  else if (midIndex < arr[midIndex]) return magicIndex_BSrecursive(arr, start, midIndex - 1);
  else return magicIndex_BSrecursive(arr, midIndex + 1, end);
}
console.log(magicIndex_BSrecursive([-1, 0, 1, 3, 10, 15, 20, 22, 27, 30]));
console.log(magicIndex_BSrecursive([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// Works with non-distinct values
function magicIndex_NonDistinct(arr, start = 0, end = arr.length - 1) {
  if (end < start) return -1;

  const midIndex = Math.floor((start + end) / 2),
        valueAtHalf = arr[midIndex];

  if (midIndex === valueAtHalf) return midIndex;

  const leftIndex = Math.min(midIndex - 1, valueAtHalf),
        left = magicIndex_NonDistinct(arr, start, leftIndex);
  if (left >= 0) return left;

  const rightIndex = Math.max(midIndex + 1, valueAtHalf);
  return magicIndex_NonDistinct(arr, rightIndex, end);
}
console.log(magicIndex_NonDistinct([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]));
console.log(magicIndex_NonDistinct([-1, 0, 1, 3, 10, 15, 20, 22, 27, 30]));
console.log(magicIndex_NonDistinct([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));
