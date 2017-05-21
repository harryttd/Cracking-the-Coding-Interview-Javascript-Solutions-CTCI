'use strict';

function binarySearch(arr, num) {
  let head = 0, tail = arr.length - 1;

  while (head <= tail) {
    const half = Math.floor((head + tail) / 2);

    if (arr[half] === num) return true;
    else if (num < arr[half]) tail = half - 1;
    else head = half + 1;
  }

  return false;
}

const arr = [1, 2, 3, 4, 5, 100];
for (let i = 0; i < arr.length; i++) {
  console.log(i, binarySearch(arr, i));
  console.log(arr[i], binarySearch(arr, arr[i]));
  const random = Math.floor(Math.random() * 10);
  console.log("Random", random, binarySearch(arr, random));
}
