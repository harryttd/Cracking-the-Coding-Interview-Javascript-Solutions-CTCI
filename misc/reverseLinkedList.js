'use strict';

// O(N) TIME --- O(1) SPACE
function reverseLinkedList1(head) {
  let previous = null;

  while (head) {
    // Keep next node since we trash the next pointer.
    const next = head.next; // 2, 3, null // 3, null // null;

    // Switch the next pointer to point backwards.
    head.next = previous; // 1, null // 2, 1, null // 3, 2, 1, null;

    // Move both pointers forward
    previous = head; // 1, null // 2, 1, null // 3, 2, 1, null;
    head = next; // 2, 3, null // 3, null // null;
  }

  return previous;
}
const ll1 = {val: 1, next: {val: 2, next: {val: 3, next: null}}};
console.log(reverseLinkedList1(ll1));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(1) SPACE
function reverseLinkedList2(oldList) {
  let newList = null;

  while (oldList) {
    // Remove node from head of old list.
    const node = oldList; // 1, 2, 3, null // 2, 3, null // 3, null;
    oldList = oldList.next; // 2, 3, null // 3, null // null;

    // Insert node after head of new list.
    node.next = newList; // 1, null // 2, 1, null // 3, 2, 1, null;
    newList = node; // 1, null // 2, 1, null // 3, 2, 1, null;
  }

  return newList;
}
const ll2 = {val: 1, next: {val: 2, next: {val: 3, next: null}}};
console.log(reverseLinkedList2(ll2));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(N) SPACE
const createNode = (val, next = null) => ({val, next});

function reverseLinkedList3(head) {
  let node;

  while (head) {
    node = createNode(head.val, node);
    head = head.next;
  }

  return node;
}
const ll3 = {val: 1, next: {val: 2, next: {val: 3, next: null}}};
console.log(reverseLinkedList3(ll3));
