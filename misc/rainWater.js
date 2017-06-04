'use strict';

// O(N) TIME
function rainWater(arr) {
  const rightMax = [], { length } = arr;
  let max = 0;

  for (let i = length - 1; i >= 0; i--) {
    max = arr[i] > max ? arr[i] : max;
    rightMax[i] = max;
  }

  let water = max = 0;

  for (let i = 0; i < length; i++) {
    max = arr[i] > max ? arr[i] : max;
    water += Math.min(max, rightMax[i]) - arr[i];
  }

  return water;
}

const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1];
console.log(rainWater(a)); // 7

const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(rainWater(b)); // 6

const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2];
console.log(rainWater(c)); // 12

const d = [0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1];
console.log(rainWater(d)); // 8

const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2];
console.log(rainWater(e)); // 38
