'use strict';

export function stringRotation(str1, str2) {
  if (!str1 || !str1.length || !str2 || !str2.length) throw Error('invalid input');
  if (str1.length !== str2.length) return false;

  return (str2 + str2).indexOf(str1) > -1;
}

// console.log(stringRotation('waterbottle', 'erbottlewat'));
