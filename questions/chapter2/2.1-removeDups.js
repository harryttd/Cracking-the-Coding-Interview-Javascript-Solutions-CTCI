'use strict';
// USING A SET
// O(N) TIME -- O(N) SPACE
export function removeDupes1(list) {
  if (!list || !list.next) return list;
  const set = new Set();
  set.add(list.value);
  while (list.next) {
    if (set.has(list.next.value)) {
      list.next = list.next.next;
    } else {
      set.add(list.next.value);
      list = list.next;
    }
  }
}

// O(N^2) TIME
export function removeDupes2(list) {
  if (!list || !list.next) return list;
  while (list) {
    let head = list;
    while (head.next) {
      if (head.next.value === list.value) {
        head.next = head.next.next;
      } else {
        head = head.next;
      }
    }
    list = list.next;
  }
}
