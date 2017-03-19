'use strict';

// O(N) TIME -- O(N) SPACE
export function circularList(list) {
  if (!list) return null;

  let head = list;
  const set = new Set();

  while (head) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next;
  }

  return null;
}
