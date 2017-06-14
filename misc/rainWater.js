'use strict';

// O(N) TIME AND SPACE
function rainWater(arr) {
  const rightMax = [], { length } = arr;
  let maxPeak = 0;

  for (let i = length - 1; i >= 0; i--) {
    maxPeak = arr[i] > maxPeak ? arr[i] : maxPeak;
    rightMax[i] = maxPeak;
  }

  let water = maxPeak = 0;

  arr.forEach((level, i) => {
    maxPeak = level > maxPeak ? level : maxPeak;
    water += Math.min(maxPeak, rightMax[i]) - level;
  });

  return water;
}

const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1];
console.log(rainWater(a)); // 7

const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(rainWater(b)); // 6

const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2];
console.log(rainWater(c)); // 12

const d = [2, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1];
console.log(rainWater(d)); // 10

const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2];
console.log(rainWater(e)); // 38

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function rainWater2(arr) {
  const rightMax = [], leftMax = [], { length } = arr;
  let maxPeak = 0;

  for (let i = length - 1; i >= 0; i--) {
    maxPeak = arr[i] > maxPeak ? arr[i] : maxPeak;
    rightMax[i] = maxPeak;
  }

  maxPeak = 0;

  for (let i = 0; i < length; i++) {
    maxPeak = arr[i] > maxPeak ? arr[i] : maxPeak;
    leftMax[i] = maxPeak;
  }

  return arr.reduce((acc, level, i) => {
    return acc + Math.min(rightMax[i], leftMax[i]) - level;
  }, 0);
}
console.log(rainWater2([0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]));
