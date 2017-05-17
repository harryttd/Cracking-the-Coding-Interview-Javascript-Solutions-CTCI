'use strict';

export function findSuccesor(node) {
  if (!node) throw Error('node cannot be null');

  if (node.right) {
    node = node.right;
    while (node.left) node = node.left;
    return node.value;
  }
  else if (node.parent) {
    if (node.parent.value > node.value) return node.parent.value;
    else {
      let parent = node.parent;
      while (parent) {
        if (parent.value > node.value) return parent.value;
        parent = parent.parent;
      }
    }
  }
}
