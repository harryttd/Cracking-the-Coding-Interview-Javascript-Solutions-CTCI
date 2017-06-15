'use strict';

function reverseNum(num) {
  const isPositive = num >= 0;
  let reversed = 0;

  while (num) {
    const remainder = Math.abs(num % 10);
    reversed = reversed * 10 + remainder;
    num = Math.floor(Math.abs(num) / 10);
  }

  return isPositive ? reversed : -reversed;
}

console.log(reverseNum(12345));
console.log(reverseNum(-12345));
