'use strict';

// Fisher-Yates / Knuth Shuffle

function getRandom(floor, ceil) {
  return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
}

function shuffle(arr) {
  const { length } = arr;

  if (length <= 1) return;

  for (let i = 0; i < length - 1; i++) {
    const randomIndex = getRandom(i, length - 1);
    if (randomIndex !== i) {
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
  }

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffle(arr);
console.log(arr);
