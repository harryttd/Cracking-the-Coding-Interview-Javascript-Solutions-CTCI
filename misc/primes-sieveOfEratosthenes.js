'use strict';

function eratosthenes(n) {
  const array = new Array(n).fill(true), upperLimit = Math.sqrt(n), output = [];

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        // console.log(j);
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (let i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i);
    }
  }
  return output;
}

console.log(eratosthenes(1000000));
