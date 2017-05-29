'use strict';

// Solutions for permutations with duplicate characters in original string.

// WORST CASE RUNTIME: O(!N)

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function permutationsWithDupes1(str, prefix = '', result = [], perms = new Set()) {

  perms.add(prefix);

  const { length } = str;
  if (!length) return result.push(prefix);

  for (let i = 0; i < length; i++) {
    const perm = prefix + str[i];
    if (!perms.has(perm)) {
      permutationsWithDupes1(str.slice(0, i) + str.slice(i + 1), perm, result, perms);
    }
  }

  return result;
}
console.log(permutationsWithDupes1('aabbbbc'));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// Very optimized runtime for duplicate strings.

function permutationsWithDupes2(str) {
  return createPerms('', str.length, buildLetterMap(str));
}

function buildLetterMap(str) {
  const map = new Map();
  for (const letter of str) {
    map.set(letter, map.get(letter) + 1 || 1);
  }
  return map;
}

function createPerms(prefix, length, map, result = []) {
  if (!length) return result.push(prefix);

  for (const letter of map.keys()) {
    const count = map.get(letter);
    if (count) {
      map.set(letter, count - 1);
      createPerms(prefix + letter, length - 1, map, result);
      map.set(letter, count);
    }
  }

  return result;
}
console.log(permutationsWithDupes2('aabbbbc'));
