'use strict';

// USING A RUNNER
// O(N) TIME -- O(1) SPACE
export function KthToLast1(list, k) {
  if (!list) throw Error('invalid list');

  let pointer1 = list, pointer2 = list;

  for (let i = 0; i < k; i++) {
    if (!pointer1.next) throw Error('list is not long enough');
    pointer1 = pointer1.next;
  }

  while (pointer1.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2.value;
}

// USING A COUNTER
export function KthToLast2(list, k) {
  if (!list) throw Error('invalid list');

  let indexCounter = -1, head = list;

  while (head) {
    indexCounter++;
    head = head.next;
  }

  if (indexCounter < k) throw Error('list is not long enough');

  while (indexCounter > k) {
    list = list.next;
    indexCounter--;
  }

  return list.value;
}

// RECURSIVE METHOD. ONLY PRINTS THE Kth TO LAST NODE. DOES NOT RETURN IT.
// O(N) SPACE
function printKthToLast(list, k) {
  if (!list) return 0;
  let index = printKthToLast(list.next, k) + 1;
  if (index === k) console.log(k + 'th to last node is' + list.value);
  return index;
}

// printKthToLast({value: 8, next: {value: 5, next: {value: 1}}}, 2);
