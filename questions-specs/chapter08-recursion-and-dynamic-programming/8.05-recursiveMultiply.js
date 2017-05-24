'use strict';

function recursiveMultiply1(a, b, max = Math.max(a, b), product = 0, times = Math.min(a, b)) {
  return times ? recursiveMultiply1(a, b, max, product + max, times - 1) : product;
}
console.log(recursiveMultiply1(17, 23));
console.log(recursiveMultiply1(101, 4321));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function recursiveMultiply2(a, b) {
  const bigger = a < b ? b : a, smaller = a < b ? a : b;
  return smaller && bigger ? multiply1(smaller, bigger) : 0;
}

function multiply1(smaller, bigger) {
  if (smaller === 1) return bigger; // 1 * bigger = bigger

  /* Compute half. If uneven, compute other half. If even, double it. */
  const halfOfSmaller = smaller >> 1; // Divide by 2
  const half1 = multiply1(halfOfSmaller, bigger);
  let half2 = half1;

  if (smaller % 2 === 1) {
    half2 = multiply1(smaller - halfOfSmaller, bigger);
  }
  return half1 + half2;
}
console.log(recursiveMultiply2(17, 23));
console.log(recursiveMultiply2(101, 4321));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// MEMOIZED

function recursiveMultiply3(a, b) {
  const bigger = a < b ? b : a, smaller = a < b ? a : b;
  return smaller && bigger ? multiply2(smaller, bigger) : 0;
}

function multiply2(smaller, bigger, memo = []) {
  if (smaller === 1) return bigger; // 1 * bigger = bigger
  else if (memo[smaller]) return memo[smaller];

  /* Compute half. If uneven, compute other half. If even, double it. */
  const halfOfSmaller = smaller >> 1; // Divide by 2
  const half1 = multiply2(halfOfSmaller, bigger);
  let half2 = half1;

  if (smaller % 2 === 1) {
    half2 = multiply2(smaller - halfOfSmaller, bigger, memo);
  }

  memo[smaller] = half1 + half2;
  return memo[smaller];
}
console.log(recursiveMultiply3(17, 23));
console.log(recursiveMultiply3(101, 4321));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(log smallerNum) TIME

function recursiveMultiply4(a, b) {
  const bigger = a < b ? b : a, smaller = a < b ? a : b;
  return smaller && bigger ? multiply3(smaller, bigger) : 0;
}

function multiply3(smaller, bigger) {
  if (smaller === 1) return bigger; // 1 * bigger = bigger

  const halfOfSmaller = smaller >> 1, // Divide by 2
        halfProduct = multiply3(halfOfSmaller, bigger),
        halfPlusHalf = halfProduct + halfProduct;

  return smaller % 2 === 0 ? halfPlusHalf : halfPlusHalf + bigger;
}
console.log(recursiveMultiply4(17, 23));
console.log(recursiveMultiply4(101, 4321));
