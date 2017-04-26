'use strict';

function stringPermutations(str, prefix = '', perms = [], prefixes = new Set()) {
  const length = str.length;

  if (prefixes.has(prefix)) return;
  prefixes.add(prefix);

  if (!length) return perms.push(prefix);

  for (let i = 0; i < length; i++) {
    stringPermutations(str.slice(0, i) + str.slice(i + 1), prefix + str[i], perms, prefixes);
  }

  return perms;
}

console.log(stringPermutations('abc'));
// 'abc' => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
