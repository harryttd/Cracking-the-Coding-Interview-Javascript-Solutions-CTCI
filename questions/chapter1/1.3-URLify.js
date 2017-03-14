'use strict';

export function URLify(str) {
  if (!str) return str;
  return str.split(' ').join('%20');
}

// solution from book
// function URLify(str, trueLength) {
//   let newString = '';
//   for (var i = 0; i < trueLength; i++) {
//     if (str[i] === ' ') newString += '%20';
//     else newString += str[i];
//   }
//   return newString;
// }
