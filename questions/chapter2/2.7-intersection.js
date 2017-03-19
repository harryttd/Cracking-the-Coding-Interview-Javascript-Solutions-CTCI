'use strict';

// (O(A + B)) O(N) TIME -- O(N) SPACE
export function intersection(list1, list2) {
  let head1 = list1, head2 = list2;
  const set = new Set();

  while (head1) {
    set.add(head1);
    head1 = head1.next;
  }

  while (head2) {
    if (set.has(head2)) return head2;
    head2 = head2.next;
  }

}
