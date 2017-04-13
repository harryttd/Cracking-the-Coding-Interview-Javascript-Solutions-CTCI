'use strict';

// MY FIRST SOLUTION
function compressString(map) {
  let str = '';
  map.forEach((value, letter) => {
    str += letter + value;
  });
  return str;
}

export function stringCompression1(str) {
  if (!str || str.length <= 2) return str;

  const charMap = new Map();
  let compressedString = '',
      previousLetter;

  for (const letter of str) {
    if (letter !== previousLetter) {
      if (!charMap.has(letter)) {
        charMap.set(letter, 1);
      } else {
        compressedString += compressString(charMap);
        charMap.clear();
        charMap.set(letter, 1);
      }
    } else {
      charMap.set(letter, charMap.get(letter) + 1);
    }
    previousLetter = letter;
  }

  compressedString += compressString(charMap);

  return compressedString.length < str.length ? compressedString : str;
}

// SECOND SHORTER SOLUTION WITH DOPE REGEX
export function stringCompression2(str) {
  if (!str || str.length <= 2) return str;

  const letterGroups = str.match(/(.)\1*/g);
  let compressedString = '';

  letterGroups.forEach(group => {
    compressedString += group[0] + group.length;
  });

  return compressedString.length < str.length ? compressedString : str;
}
