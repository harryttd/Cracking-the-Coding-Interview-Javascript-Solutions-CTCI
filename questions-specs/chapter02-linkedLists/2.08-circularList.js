'use strict';

// O(N) TIME -- O(1) SPACE
export function getLoopStartNode(list) {
  if (!list || !list.next) return null;

  let slowPointer = list, fastPointer = list;

  // Check if pointers collide
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) break;
  }

  // Check if it is not a circular list
  if (!fastPointer || !fastPointer.next) return null;

  // Move slow pointer to head and traverse to the beginning of the loop
  slowPointer = list;
  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME -- O(N) SPACE
export function circularList1(list) {
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

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// THIS ONLY DEDECTS A CIRCULAR LIST AND RETURNS WHERE THE POINTERS COLLIDE. DOESN'T RETURN THE BEGINNING OF THE LOOP.
// O(N) TIME -- O(1) SPACE
export function circularList2(list) {
  if (!list || !list.next) return null;
  let slowPointer = list, fastPointer = list;

  while (fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) return slowPointer;
  }

  return null;
}
