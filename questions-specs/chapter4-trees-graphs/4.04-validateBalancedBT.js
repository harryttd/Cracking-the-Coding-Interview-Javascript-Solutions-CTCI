'use strict';

export function validateBalancedBT_1(tree) {
  if (!tree || !tree.root) return true;

  const depthCache = {
    minLevel: Number.MAX_SAFE_INTEGER,
    maxLevel: Number.MIN_SAFE_INTEGER
  };

  findTreeDepth(depthCache, tree.root);
  return depthCache.maxLevel - depthCache.minLevel <= 1;
}

function findTreeDepth(depthCache, node, depthLevel = 0) {
  if (!node) {
    if (depthLevel < depthCache.minLevel) depthCache.minLevel = depthLevel;
    if (depthLevel > depthCache.maxLevel) depthCache.maxLevel = depthLevel;
  } else {
    findTreeDepth(depthCache, node.left, depthLevel + 1);
    findTreeDepth(depthCache, node.right, depthLevel + 1);
  }
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// FIRST BOOK SOLUTION
// O(N log N)

const getHeight = (tree) => tree ? Math.max(getHeight(tree.left), getHeight(tree.right)) + 1 : -1;

export function validateBalancedBT_2(tree) {
  if (!tree || !tree.root) return true;
  return isBalanced(tree.root);
}

function isBalanced(tree) {
  if (!tree) return true;

  const heightDiff = Math.abs(getHeight(tree.left) - getHeight(tree.right));

  if (heightDiff > 1) return false;

  return isBalanced(tree.left) && isBalanced(tree.right);
}
