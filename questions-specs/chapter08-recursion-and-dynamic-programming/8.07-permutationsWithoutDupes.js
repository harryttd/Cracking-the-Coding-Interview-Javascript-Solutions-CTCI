'use strict';

function permutationsNoDupes1(str, prefix = '', result = []) {
  const { length } = str;
  if (!length) return result.push(prefix);

  for (let i = 0; i < length; i++) {
    permutationsNoDupes1(str.slice(0, i) + str.slice(i + 1), prefix + str[i], result);
  }

  return result;
}
console.log(permutationsNoDupes1('abc'));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function permutationsNoDupes2(str, result = []) {
  if (!str) {
    result.push(str);
    return result;
  }

  const prefix = str[0],
        words = permutationsNoDupes2(str.slice(1));

  for (const word of words) {
    const { length } = word;
    for (let i = 0; i <= length; i++) {
      const perm = word.slice(0, i) + prefix + word.slice(i);
      result.push(perm);
    }
  }

  return result;
}
console.log(permutationsNoDupes2('abc'));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function permutationsNoDupes3(str) {
  const result = [], { length } = str;

  if (!length) {
    result.push(str);
    return result;
  }

  for (let i = 0; i < length; i++) {
    // Remove char at i and find perms of remaining
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const partials = permutationsNoDupes3(remaining);

    for (const word of partials) {
      result.push(str[i] + word);
    }
  }

  return result;
}
console.log(permutationsNoDupes3('abc'));
