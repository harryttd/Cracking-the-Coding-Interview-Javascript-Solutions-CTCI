'use strict';

// O(N2^n) TIME AND SPACE
// 2^n SUBSETS --- EACH ELEMENT WILL BE IN 2^n-1 (half) SUBSETS
// TOTAL NUMBER OF ELEMENTS IN SUBSETS IS N*2^n-1

function powerSet(set, index = set.length - 1) {
  let allSubsets;

  if (!!~index) {
    allSubsets = powerSet(set, index - 1);

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
console.log(powerSet(['a', 'b', 'c']));
console.log(powerSet([1, 2, 3, 4]));
