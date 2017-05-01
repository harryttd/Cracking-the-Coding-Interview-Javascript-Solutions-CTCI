'use strict';

// O(N) TIME --- O(N) SPACE

export function removeDupes1(list) {
  if (!list || !list.next) return list;

  const set = new Set();
  let head = list;

  set.add(head.value);

  while (head.next) {
    if (set.has(head.next.value)) {
      head.next = head.next.next;
    } else {
      set.add(head.next.value);
      head = head.next;
    }
  }
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N^2) TIME --- O(1) SPACE

export function removeDupes2(list) {
  if (!list || !list.next) return list;
  let head = list;

  while (head) {
    let current = head;
    while (current.next) {
      if (current.next.value === head.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    head = head.next;
  }
}
