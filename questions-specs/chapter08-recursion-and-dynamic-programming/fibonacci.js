'use strict';

// Approx. O(2^N) TIME --- Closer to O(1.6^N)

// Not Optimized
function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("NOT OPTIMIZED:", fibonacci(30));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME

// Bottom Up
function fibonacciBU(num) {
  if (!num) return 0;
  let a = 0, b = 1;

  for (let x = 2; x < num; x++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return a + b;
}
console.log("BOTTOM UP:", fibonacciBU(70));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME

// Top Down
function fibonacciTD(num, memo = []) {
  if (num <= 1) return num;

  if (!memo[num]) {
    memo[num] = fibonacciTD(num - 1, memo) + fibonacciTD(num - 2, memo);
  }

  return memo[num];
}
console.log("TOP DOWN:", fibonacciTD(70));
