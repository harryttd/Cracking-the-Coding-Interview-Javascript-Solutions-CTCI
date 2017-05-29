'use strict';

function reverseNum(num) {
  let reversed = 0;

  while (num > 0) {
    const remainder = num % 10;
    reversed = reversed * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return reversed;
}
console.log(reverseNum(12345));
