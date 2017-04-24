'use strict';

function stringPermutations(str, prefix = '', set = new Set()) {
  const length = str.length;

  if (!length) return set.add(prefix);

  for (let i = 0; i < length; i++) {
    stringPermutations(str.slice(0, i) + str.slice(i + 1), prefix + str[i], set);
  }

  return [...set];
}

console.log(stringPermutations('abc'));
// 'abc' => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
