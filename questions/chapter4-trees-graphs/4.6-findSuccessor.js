'use strict';

export function findSuccesor(node) {
  if (!node) throw Error('node cannot be null');

  if (node.right) {
    let tree = node.right;
    while (tree.left) tree = tree.left;
    return tree.value;
  }

  else if (node.parent) {
    if (node.parent.value > node.value) return node.parent.value;
    else {
      let tree = node.parent;
      while (tree) {
        if (tree.value > node.value) return tree.value;
        tree = tree.parent;
      }
    }
  }
}
