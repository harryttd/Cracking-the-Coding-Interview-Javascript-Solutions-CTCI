'use strict';

export const URLify1 = (str) => str ? str.split` `.join`%20` : str;

export const URLify2 = (str) => str ? str.replace(/\s/g, '%20') : str;

// SOLUTION FROM BOOK
// function URLify(str, trueLength) {
//   let newString = '';
//   for (var i = 0; i < trueLength; i++) {
//     if (str[i] === ' ') newString += '%20';
//     else newString += str[i];
//   }
//   return newString;
// }
