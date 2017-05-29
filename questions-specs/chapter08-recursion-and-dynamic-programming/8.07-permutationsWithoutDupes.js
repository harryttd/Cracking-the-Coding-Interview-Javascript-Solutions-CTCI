'use strict';

function permutationsNoDupes(str, prefix = '', result = []) {
  const { length } = str;
  if (!length) return result.push(prefix);

  for (let i = 0; i < length; i++) {
    permutationsNoDupes(str.slice(0, i) + str.slice(i + 1), prefix + str[i], result);
  }

  return result;
}

console.log(permutationsNoDupes('abc'));
