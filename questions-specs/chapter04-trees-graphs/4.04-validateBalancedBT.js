'use strict';

// O(N) TIME --- O(log N) SPACE - WORST CASE O(N)
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
// O(N log N) TIME

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

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// SECOND BOOK SOLUTION
// O(N) TIME AND SPACE

const checkHeightError = (height) => height === Number.MIN_SAFE_INTEGER;

export function validateBalancedBT_3(tree) {
  if (!tree || !tree.root) return true;
  return checkHeight(tree.root) !== Number.MIN_SAFE_INTEGER;
}

function checkHeight(tree) {
  if (!tree) return -1;

  const leftHeight = checkHeight(tree.left);
  if (checkHeightError(leftHeight)) return Number.MIN_SAFE_INTEGER;

  const rightHeight = checkHeight(tree.right);
  if (checkHeightError(rightHeight)) return Number.MIN_SAFE_INTEGER;

  const heightDiff = Math.abs(leftHeight - rightHeight);

  if (heightDiff > 1) return Number.MIN_SAFE_INTEGER;

  return Math.max(leftHeight, rightHeight) + 1;
}
