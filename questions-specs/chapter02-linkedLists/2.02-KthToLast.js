'use strict';

// USING A RUNNER
// O(N) TIME --- O(1) SPACE

export function KthToLast1(list, k) {
  if (!list) throw Error('invalid list');

  let aheadPointer = list, behindPointer = list;

  for (let i = 0; i < k; i++) {
    if (!aheadPointer.next) throw Error('list is not long enough');
    aheadPointer = aheadPointer.next;
  }

  while (aheadPointer.next) {
    aheadPointer = aheadPointer.next;
    behindPointer = behindPointer.next;
  }

  return behindPointer.value;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// USING A COUNTER

export function KthToLast2(list, k) {
  if (!list) throw Error('invalid list');

  let indexCounter = -1, head = list;

  while (head) {
    indexCounter++;
    head = head.next;
  }

  if (indexCounter < k) throw Error('list is not long enough');

  while (indexCounter-- > k) list = list.next;

  return list.value;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// RECURSIVE METHOD. ONLY PRINTS THE Kth TO LAST NODE. DOES NOT RETURN IT.
// O(N) SPACE

function printKthToLast(list, k) {
  if (!list) return 0; // Can Return -1 if input for k is 0
  let index = printKthToLast(list.next, k) + 1;
  if (index === k) console.log(k + 'th to last node is' + list.value);
  return index;
}

// printKthToLast({value: 8, next: {value: 5, next: {value: 1, next: null}}}, 2);
