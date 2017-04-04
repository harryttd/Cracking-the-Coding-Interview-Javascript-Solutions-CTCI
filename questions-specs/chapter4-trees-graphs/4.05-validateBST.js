'use strict';

export function isValidBST(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST(tree.root);
}

function validateBST(node) {
  if (!node) return true;

  if (node.parent) {
    if (node.parent.left === node) {
      if (node.value > node.parent.value) return false;
    }
    else if (node.parent.right === node) {
      if (node.value <= node.parent.value) return false;
    }
  }

  return validateBST(node.left) && validateBST(node.right);
}
