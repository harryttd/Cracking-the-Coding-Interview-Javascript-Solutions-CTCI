'use strict';

// Given two strings, write a function to decide if one is a permutation of the other.

// O(N log N) TIME -- O(1) SPACE
const sort = str => [...str].sort().join``;

export function checkPermutations1(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;

  return sort(str1) === sort(str2);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// 0(N) TIME -- O(N) SPACE
export function checkPermutations2(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;

  const letterMap = new Map();

  for (const letter of str1) {
    letterMap.set(letter, letterMap.get(letter) + 1 || 1);
  }

  for (const letter of str2) {
    if (!letterMap.has(letter)) return false;
    if (letterMap.get(letter) === 1) letterMap.delete(letter);
    else letterMap.set(letter, letterMap.get(letter) - 1);
  }

  return !letterMap.size;
}
