'use strict';

const revBySort = (array) => array.sort(() => 1);
console.log(revBySort([2, 1, 5, 0, 9]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function reverseByDestructuring(arr) {
  const length = arr.length;

  let head = 0, tail = length - 1;

  while (head < tail) {
    [arr[head++], arr[tail--]] = [arr[tail], arr[head]];
  }
  return arr;
}
console.log(reverseByDestructuring([1, 2, 3, 4, 5]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function reverseBySplice(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}
console.log(reverseBySplice([1, 2, 3, 4, 5]));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

function reverseByNewArray(arr) {
  const length = arr.length - 1, newArr = [];

  for (let i = length; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseByNewArray([1, 2, 3, 4, 5]));
