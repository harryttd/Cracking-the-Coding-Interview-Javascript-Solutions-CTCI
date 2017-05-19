'use strict';

// O(N/2) TIME --- O(1) SPACE

export function palindromeWhileLoop(str) {
  if (typeof str !== 'string') throw Error('invalid input');

  str = str.toLowerCase();

  let head = -1, tail = str.length;

  while (head++ < tail--) {
    if (str[head] !== str[tail]) return false;
  }

  return true;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

export function palindromeForLoop(str) {
  if (typeof str !== 'string') throw Error('invalid input');

  str = str.toLowerCase();

  for (let i = 0, x = str.length - 1; i < x; i++, x--) {
    if (str[i] !== str[x]) return false;
  }

  return true;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

export const palindromeReverseMethod = (str) => str.toLowerCase() === str.split``.reverse().join``.toLowerCase();
