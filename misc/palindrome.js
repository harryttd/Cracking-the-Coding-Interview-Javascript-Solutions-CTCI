'use strict';

export function palindrome(str) {
  if (typeof str !== 'string') throw Error('invalid input');

  const length = str.length,
        half = length / 2,
        even = length % 2 === 0;

  let head = 0, tail = length - 1;

  while (even ? head < half : head !== tail) {
    if (str[head] !== str[tail]) return false;
    head++;
    tail--;
  }

  return true;
}

export const palindromeReverseMethod = (str) => str === str.split``.reverse().join``;
