'use strict';

export function stringCompression1(str) {
  if (!str || str.length <= 2) return str;

  const charMap = new Map();
  let compressedString = '', currentLetter = str[0];

  for (const letter of str) {
    if (letter === currentLetter) {
      charMap.set(letter, charMap.get(letter) + 1 || 1);
    } else {
      compressedString += currentLetter + charMap.get(currentLetter);
      charMap.clear();
      currentLetter = letter;
      charMap.set(letter, 1);
    }
  }

  compressedString += [...charMap][0].join``;
  return compressedString.length < str.length ? compressedString : str;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// SECOND SHORTER SOLUTION WITH DOPE REGEX
export function stringCompression2(str) {
  if (!str || str.length <= 2) return str;

  const compressed = str.match(/(.)\1*/g)
                    .map(group => group[0] + group.length)
                    .join``;

  return compressed.length < str.length ? compressed : str;
}
