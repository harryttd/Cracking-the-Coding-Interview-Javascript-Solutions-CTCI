'use strict';

function reverseBetweenLinkedList(head, m, n) {
  let newHead = {val: 0, next: null};
  newHead.next = head;
  let pre = newHead;

  for (let i = 0; i < m - 1; i++) pre = pre.next;

  let cur = pre.next;
  for (let i = 0; i < n - m; i++) {
    const move = cur.next;
    cur.next = move.next;
    move.next = pre.next;
    pre.next = move;
    console.log(cur);
  }

  return newHead.next;
}

const ll1 = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}};
console.log(reverseBetweenLinkedList(ll1, 2, 4));
