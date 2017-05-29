'use strict';

// Solutions for permutations without duplicate characters in original string.

// UPPER BOUND OF FUNCTION CALLS: O(N * !N)
// RUNTIME WILL NOT EXCEED: O(Nˆ2 * !N)

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// Pushes every prefix down the stack
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

// Inserts every letter of string into every position of all permutations

// Passes permutations back up the stack
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
      // Insert prefix into every position
      const perm = word.slice(0, i) + prefix + word.slice(i);
      result.push(perm);
    }
  }

  return result;
}
console.log(permutationsNoDupes2('abc'));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// Uses every letter of string as the first char and appends every permutation to it

// Passes permutations back up the stack
function permutationsNoDupes3(str) {
  const result = [], { length } = str;

  if (!length) {
    result.push(str);
    return result;
  }

  for (let i = 0; i < length; i++) {
    // Remove char at i and find perms of remaining
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const perms = permutationsNoDupes3(remaining);

    for (const perm of perms) {
      result.push(str[i] + perm);
    }
  }

  return result;
}
console.log(permutationsNoDupes3('abc'));
