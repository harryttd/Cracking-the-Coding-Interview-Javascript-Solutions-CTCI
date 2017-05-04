'use strict';

export function checkIfSubtree(tree1, tree2) {
  if (!tree1 || !tree1.root) throw Error('invalid input for tree1');
  if (!tree2 || !tree2.root) return true;
  return findSubtreeRoot(tree1.root, tree2.root);
}

function findSubtreeRoot(tree1, tree2) {
  if (!tree1 || !tree2) return false;

  if (tree1.value === tree2.value && isSubtree(tree1, tree2)) return true;

  return findSubtreeRoot(tree1.left, tree2) || findSubtreeRoot(tree1.right, tree2);
}

function isSubtree(tree1, tree2) {
  if (!tree2 && !tree1) return true;
  if (!tree1 || !tree2) return false;
  if (tree1.value !== tree2.value) return false;

  return isSubtree(tree1.left, tree2.left) && isSubtree(tree1.right, tree2.right);
}
