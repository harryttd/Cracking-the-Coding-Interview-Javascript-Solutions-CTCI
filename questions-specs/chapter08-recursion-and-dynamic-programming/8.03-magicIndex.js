'use strict';

function magicIndex(arr) {
  if (!arr) throw Error('invalid input');

  for (const [index, num] of arr.entries()) {
    if (index === num) return index;
  }

  return -1;
}
console.log(magicIndex([-1, 0, 1, 3, 10, 15, 20, 22, 27, 30]));
console.log(magicIndex([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));
// console.log(magicIndex([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function magicIndex_BinarySearch(arr) {
  if (!arr) throw Error('invalid input');

  let head = 0, tail = arr.length - 1;

  while (head <= tail) {
    const half = Math.floor((head + tail) / 2);
    if (half === arr[half]) return half;
    else if (half < arr[half]) tail = half - 1;
    else head = half + 1;
  }

  return -1;
}
console.log(magicIndex_BinarySearch([-1, 0, 1, 3, 10, 15, 20, 22, 27, 30]));
console.log(magicIndex_BinarySearch([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function magicIndex_BSrecursive(arr, start = 0, end = arr.length - 1) {
  console.trace();
  if (end < start) return -1;

  const half = Math.floor((start + end) / 2);
  if (half === arr[half]) return half;
  else if (half < arr[half]) return magicIndex_BSrecursive(arr, start, half - 1);
  else return magicIndex_BSrecursive(arr, half + 1, end);
}
console.log(magicIndex_BSrecursive([-1, 0, 1, 3, 10, 15, 20, 22, 27, 30]));
console.log(magicIndex_BSrecursive([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));
