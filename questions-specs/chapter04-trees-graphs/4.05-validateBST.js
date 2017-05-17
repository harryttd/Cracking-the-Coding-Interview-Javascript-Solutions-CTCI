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

const isNumber = (value) => typeof value === 'number';

export function isValidBST_2(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST_2(tree.root);
}

function validateBST_2(node, minValue, maxValue) {
  if (!node) return true;

  if ((isNumber(minValue) && node.value <= minValue) || (isNumber(maxValue) && node.value > maxValue)) return false;

  return validateBST_2(node.left, minValue, node.value) && validateBST_2(node.right, node.value, maxValue);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// ASSUMES NO DUPLICATE VALUES. THIS ALGORITHM WOULD STILL RETURN TRUE EVEN IF TO THE RIGHT THERE WAS AN EQUAL VALUE NODE.
/*
  EXAMPLE:
            10
          /   \
        10    10
*/

export function noDupesIsValidBST(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST_3(tree.root, {value: null});
}

function validateBST_3(tree, previous) {
  if (!tree) return true;

  if (!validateBST_3(tree.left, previous)) return false;

  if (previous.value !== null && tree.value < previous.value) return false;

  previous.value = tree.value;

  if (!validateBST_3(tree.right, previous)) return false;

  return true;
}
