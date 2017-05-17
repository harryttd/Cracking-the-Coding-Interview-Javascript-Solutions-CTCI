'use strict';

console.log('Number Swap Addition Subtraction');
function numberSwap1(a, b) {
  a = a - b;
  b = a + b;
  a = b - a;
  return `a: ${a}, b: ${b}`;
}
console.log(numberSwap1(3, 15));
console.log(numberSwap1(-3, 7));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function numberSwap2(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return `a: ${a}, b: ${b}`;
}
console.log('\nNumber Swap Bitwise XOR');
console.log(numberSwap2(-3, 7));
console.log(numberSwap2(15, 4));
