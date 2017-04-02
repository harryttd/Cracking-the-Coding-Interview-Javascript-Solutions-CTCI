'use strict';

export function deleteMiddleNode(node) {
  if (!node || !node.next) throw Error('invalid node');
  node.value = node.next.value;
  node.next = node.next.next;
}
