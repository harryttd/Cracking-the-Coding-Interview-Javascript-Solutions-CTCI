'use strict';

function recursiveMultiply1(a, b, sum = 0, times = Math.min(a, b)) {
  return times ? recursiveMultiply1(a, b, sum + Math.max(a, b), times - 1) : sum;
}
console.log(recursiveMultiply1(5, 3));
console.log(recursiveMultiply1(101, 4321));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function recursiveMultiply2(a, b) {
  const bigger = a < b ? b : a, smaller = a < b ? a : b;
  return multiply1(smaller, bigger);
}

function multiply1(smaller, bigger) {
  if (smaller === 0) return 0; // 0 x bigger = 0
  else if (smaller === 1) return bigger; // 1 x bigger = bigger

  /* Compute half. If uneven, compute other half. If even, double it. */
  const halfOfSmaller = smaller >> 1; // Divide by 2
  const side1 = multiply1(halfOfSmaller, bigger);
  let side2 = side1;

  if (smaller % 2 === 1) {
    side2 = multiply1(smaller - halfOfSmaller, bigger);
  }
  return side1 + side2;
}
console.log(recursiveMultiply2(17, 23));
console.log(recursiveMultiply2(101, 4321));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// MEMOIZED

function recursiveMultiply3(a, b) {
  const bigger = a < b ? b : a, smaller = a < b ? a : b;
  return multiply2(smaller, bigger);
}

function multiply2(smaller, bigger, memo = []) {
  if (smaller === 0) return 0; // 0 x bigger = 0
  else if (smaller === 1) return bigger; // 1 x bigger = bigger
  else if (memo[smaller]) return memo[smaller];

  /* Compute half. If uneven, compute other half. If even, double it. */
  const halfOfSmaller = smaller >> 1; // Divide by 2
  const side1 = multiply2(halfOfSmaller, bigger);
  let side2 = side1;

  if (smaller % 2 === 1) {
    side2 = multiply2(smaller - halfOfSmaller, bigger, memo);
  }

  memo[smaller] = side1 + side2;
  return memo[smaller];
}
console.log(recursiveMultiply3(17, 23));
console.log(recursiveMultiply3(101, 4321));
