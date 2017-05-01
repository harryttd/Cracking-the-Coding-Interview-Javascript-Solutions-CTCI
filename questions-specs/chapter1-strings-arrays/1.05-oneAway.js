'use strict';

export function oneAway(str1, str2) {
  const str1Length = str1.length, str2Length = str2.length;

  if (Math.abs(str1Length - str2Length) > 1) return false;

  const isInsertion = str1Length < str2Length,
        isDeletedChar = !isInsertion && str1Length !== str2Length;

  let isEdited = false, i, x;

  for (i = x = 0; i < str1Length && x < str2Length; i++, x++) {
    if (str1[i] !== str2[x]) {
      if (isEdited) return false;
      if (isInsertion) i--;
      else if (isDeletedChar) x--;
      isEdited = true;
    }
  }

  return true;
}
