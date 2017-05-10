'use strict';

// USING PARENT REFERENCE
// O(DEPTH OF DEEPER NODE) TIME --- O(1) SPACE

const getDepth = (node, depth = 0) => node.parent ? getDepth(node.parent, depth + 1) : depth;

export function firstCommonAncestor1(node1, node2) {
  if (!node1 || !node2) throw Error('invalid node(s)');

  const depth1 = getDepth(node1), depth2 = getDepth(node2);

  let depthDiff = Math.abs(depth1 - depth2),
      deeper = depth1 > depth2 ? node1 : node2,
      shallower = deeper === node1 ? node2 : node1;

  while (depthDiff--) deeper = deeper.parent;

  while (deeper) {
    if (deeper === shallower) return deeper.value;
    shallower = shallower.parent;
    deeper = deeper.parent;
  }

  return null;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// USING PARENT REFERENCE
// O(SUBTREE SIZE OF FIRST COMMON ANCESTOR) TIME --- O(1) SPACE
// WORST CASE O(N) TIME

export function firstCommonAncestor2(node1, node2, tree) {
  if (!node1 || !node2) throw Error('invalid node(s)');
  else if (!covers(tree, node1) || !covers(tree, node2)) return null;
  else if (covers(node1, node2)) return node1.value;
  else if (covers(node2, node1)) return node2.value;

  let sibling = getSibling(node1), parent = node1.parent;

  while (!covers(sibling, node2)) {
    sibling = getSibling(parent);
    parent = parent.parent;
  }

  return parent.value;
}

function getSibling(node) {
  if (!node || !node.parent) return null;
  const parent = node.parent;
  return parent.left === node ? parent.right : parent.left;
}

function covers(tree, node) {
  if (!tree) return false;
  if (tree === node) return true;
  return covers(tree.left, node) || covers(tree.right, node);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// NOT OPTIMIZED --- NOT USING PARENT REFERENCE
// O(N) TIME (covers() function is called first on 2n nodes, then 2n/2, 2n/4, ...)

export function firstCommonAncestor3(node1, node2, tree) {
  if (!node1 || !node2) throw Error('invalid node(s)');
  else if (!covers(tree, node1) || !covers(tree, node2)) return null;

  return findAncestor(node1, node2, tree).value;
}

function findAncestor(node1, node2, tree) {
  if (tree === node1 || tree === node2) return tree;

  const node1onLeft = covers(tree.left, node1), node2onLeft = covers(tree.left, node2);

  if (node1onLeft !== node2onLeft) return tree;

  const childSide = node1onLeft ? tree.left : tree.right;
  return findAncestor(node1, node2, childSide);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// OPTIMIZED --- NOT USING PARENT REFERENCE
/*
  Wraps node in 'AncestorWrapper' class with a 'isAncestor' property to indicate if the returned node is actually the ancestor.
  Inputing a node that isn't in the tree without the wrapper class or without checking first if the nodes
  actually exist in the tree, the function would return a false value.
  (See also solution after this one)
*/

class AncestorWrapper {
  constructor(node, isAncestor) {
    this.node = node;
    this.isAncestor = isAncestor;
  }
}

export function firstCommonAncestor4(node1, node2, tree) {
  if (!node1 || !node2) throw Error('invalid node(s)');
  const result = findCommonAncestor(node1, node2, tree);
  return result.isAncestor ? result.node.value : null;
}

function findCommonAncestor(node1, node2, tree) {
  if (!tree) return new AncestorWrapper(null, false);
  if (tree === node1 && tree === node2) return new AncestorWrapper(tree, true);

  const checkLeft = findCommonAncestor(node1, node2, tree.left);
  if (checkLeft.isAncestor) return checkLeft; // Already found ancestor. Don't check anymore.

  const checkRight = findCommonAncestor(node1, node2, tree.right);
  if (checkRight.isAncestor) return checkRight; // Already found ancestor. Don't check anymore.

  if (checkLeft.node && checkRight.node) { // node1 and node2 found in different subtrees
    return new AncestorWrapper(tree, true); // 'tree' we are at is the common ancestor
  }
  else if (tree === node1 || tree === node2) { // We are at node1 or node2
    const isAncestor = checkLeft.node || checkRight.node; // We found node1 or node2 in a subtree
    return new AncestorWrapper(tree, isAncestor); // 'tree' is ancestor if 'isAncestor' is true
  }
  else { // Return non-null node
    return new AncestorWrapper(checkLeft.node ? checkLeft.node : checkRight.node, false);
  }

}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// NOT USING PARENT REFERENCE
// OPTIMIZED BUT STILL CHECKS FIRST THAT NODES EXIST IN THE TREE

export function firstCommonAncestor5(node1, node2, tree) {
  if (!node1 || !node2) throw Error('invalid node(s)');
  if (!covers(tree, node1) || !covers(tree, node2)) return null;
  return fca(node1, node2, tree).value;
}

function fca(node1, node2, tree) {
  if (!tree) return null;
  if (tree === node1 && tree === node2) return tree;

  const checkLeft = fca(node1, node2, tree.left);
  if (checkLeft && checkLeft !== node1 && checkLeft !== node2) return checkLeft; // Already found ancestor. Don't check anymore.

  const checkRight = fca(node1, node2, tree.right);
  if (checkRight && checkRight !== node1 && checkRight !== node2) return checkRight; // Already found ancestor. Don't check anymore.

  if (checkLeft && checkRight) return tree; // node1 and node2 found in diff. subtrees, return common ancestor
  else if (tree === node1 || tree === node2) return tree;
  else return checkLeft ? checkLeft : checkRight; // Return non-null node
}
