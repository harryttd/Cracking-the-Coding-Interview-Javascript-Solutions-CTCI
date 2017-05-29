'use strict';

// O(N2ˆn) TIME AND SPACE
// 2ˆn SUBSETS --- EACH ELEMENT WILL BE IN 2ˆn-1 (half) SUBSETS
// TOTAL NUMBER OF ELEMENTS IN SUBSETS IS N*2ˆn-1

function powerSetRecursive(set, index = set.length - 1) {
  let allSubsets;

  if (!!~index) {
    allSubsets = powerSetRecursive(set, index - 1);

    const item = set[index], { length } = allSubsets;
    for (let i = 0; i < length; i++) {
      allSubsets.push([...allSubsets[i], item]);
    }
  }
  else {
    allSubsets = [[]];
  }

  return allSubsets;
}
console.log(powerSetRecursive(['a', 'b', 'c']));
console.log(powerSetRecursive([1, 2, 3, 4]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function powerSetIterative(set) {
  let allSubsets = [];
  const max = 1 << set.length;

  for (let k = 0; k < max; k++) {
    const subset = convertNumToSet(k, set);
    allSubsets.push(subset);
  }
  return allSubsets;
}

function convertNumToSet(x, set) {
  const subset = [];
  let index = 0;

  for (let k = x; k > 0; k >>= 1) {
    if ((k & 1) === 1) subset.push(set[index]);
    index++;
  }
  return subset;
}
console.log(powerSetIterative(['x', 'y', 'z']));
console.log(powerSetIterative([5, 6, 7, 8]));
