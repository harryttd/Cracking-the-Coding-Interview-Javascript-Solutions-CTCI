'use strict';

// O(N) TIME --- O(N) SPACE

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
// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(Nˆ2) TIME --- O(1) SPACE

export function removeDupes2(head) {
  if (!head || !head.next) return head;

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
