'use strict';

// Given a string, write a function to check if it is a permutation of a palindrome.

// 0(N) TIME -- O(N) SPACE
export function palindromePermutation(str) {
  if (!str) return false;

  str = str.toLowerCase();

  const letterMap = new Set();
  for (const letter of str) {
    if (letter !== ' ') {
      if (letterMap.has(letter)) letterMap.delete(letter);
      else letterMap.add(letter);
    }
  }

  return letterMap.size <= 1;
}
