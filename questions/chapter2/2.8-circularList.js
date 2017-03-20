'use strict';

// O(N) TIME -- O(1) SPACE
export function circularList1(list) {
  if (!list || !list.next) return null;
  let pointer1 = list, pointer2 = list;

  while (pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
    if (pointer1 === pointer2) return pointer1;
  }

  return null;
}

// O(N) TIME -- O(N) SPACE
export function circularList2(list) {
  if (!list || !list.next) return null;

  let head = list;
  const set = new Set();

  while (head) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next;
  }

  return null;
}
