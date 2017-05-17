'use strict';

/*
  N: Number of nodes in larger tree
  M: Number of nodes in smaller tree
  K: Number of occurrences of smaller tree's root in larger tree
  ABOUT O(N + KM) TIME --- O(log(N) + log(M)) SPACE
*/

export function checkIfSubtree1(tree1, tree2) {
  if (!tree1 || !tree1.root) throw Error('invalid input for tree1');
  if (!tree2 || !tree2.root) return true;
  return findSubtreeRoot(tree1.root, tree2.root);
}

function findSubtreeRoot(tree1, tree2) {
  if (!tree1) return false;

  if (tree1.value === tree2.value && matchTrees(tree1, tree2)) return true;

  return findSubtreeRoot(tree1.left, tree2) || findSubtreeRoot(tree1.right, tree2);
}

function matchTrees(tree1, tree2) {
  if (!tree2 && !tree1) return true;
  if (!tree1 || !tree2) return false;
  if (tree1.value !== tree2.value) return false;

  return matchTrees(tree1.left, tree2.left) && matchTrees(tree1.right, tree2.right);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N + M) TIME AND SPACE

export function checkIfSubtree2(tree1, tree2) {
  if (!tree1 || !tree1.root) throw Error('invalid input for tree1');
  if (!tree2 || !tree2.root) return true;

  const arr1 = [], arr2 = [];

  getPreOrderArr(tree1.root, arr1);
  getPreOrderArr(tree2.root, arr2);

  return arr1.join``.includes(arr2.join``);
  // return !!~arr1.join``.indexOf(arr2.join``);
}

function getPreOrderArr(tree, arr) {
  if (!tree) return arr.push('X');

  arr.push(tree.value + ' ');
  getPreOrderArr(tree.left, arr);
  getPreOrderArr(tree.right, arr);
}
