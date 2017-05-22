'use strict';

// O(NM) TIME

function smallestDiff1(arr1, arr2) {
  if (!arr1.length || !arr2.length) return -1;

  let minDiff = Number.MAX_SAFE_INTEGER;

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      const diff = Math.abs(num1 - num2);
      if (diff === 0) return diff;
      if (diff < minDiff) minDiff = diff;
    });
  });

  return minDiff;
}
console.log(smallestDiff1([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O((N log N) + (M log M) TIME

function smallestDiff2(arr1, arr2) {
  if (!arr1.length || !arr2.length) return -1;
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  let minDiff = Number.MAX_SAFE_INTEGER,
      pointer1 = 0,
      pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    const diff = Math.abs(arr1[pointer1] - arr2[pointer2]);
    if (diff === 0) return diff;
    if (diff < minDiff) minDiff = diff;

    if (arr1[pointer1] < arr2[pointer2]) pointer1++;
    else pointer2++;
  }

  return minDiff;
}
console.log(smallestDiff2([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));
