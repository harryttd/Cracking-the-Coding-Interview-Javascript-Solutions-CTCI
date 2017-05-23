'use strict';

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
console.log(fibonacciBU(50));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// Top Down
function fibonacciTD(num, memo = []) {
  if (num <= 1) return num;

  if (!memo[num]) {
    memo[num] = fibonacciTD(num - 1, memo) + fibonacciTD(num - 2, memo);
  }

  return memo[num];
}
console.log(fibonacciTD(100));
