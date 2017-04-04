'use strict';

// USES EACH NODE'S PARENT REFERENCE
// O(N) TIME --- O(log N) SPACE - WORST CASE O(N)
export function isValidBST_1(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST_1(tree.root);
}

function validateBST_1(node) {
  if (!node) return true;

  if (node.parent) {
    if (node.parent.left === node) {
      if (node.value > node.parent.value) return false;
    }
    else if (node.parent.right === node) {
      if (node.value <= node.parent.value) return false;
    }
  }

  return validateBST_1(node.left) && validateBST_1(node.right);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(log N) SPACE - WORST CASE O(N)
export function isValidBST_2(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST_2(tree.root);
}

function validateBST_2(node, minValue, maxValue) {
  if (!node) return true;

  if ((minValue && node.value <= minValue) || (maxValue && node.value > maxValue)) return false;

  return validateBST_2(node.left, minValue, node.value) && validateBST_2(node.right, node.value, maxValue);
}
