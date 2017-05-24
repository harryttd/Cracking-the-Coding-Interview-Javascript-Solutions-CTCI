'use strict';

function powerSet(set, index = set.length - 1) {
  let allSubsets;

  if (!!~index) {
    allSubsets = powerSet(set, index - 1);
    const item = set[index], moreSubsets = [];

    for (const subset of allSubsets) {
      moreSubsets.push([...subset, item]);
    }
    allSubsets.push(...moreSubsets);
  }
  else {
    allSubsets = [[]];
  }

  return allSubsets;
}
console.log(powerSet(['a', 'b', 'c']));
console.log(powerSet([1, 2, 3, 4]));
