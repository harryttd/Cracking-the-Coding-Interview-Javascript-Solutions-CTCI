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

}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// USING PARENT REFERENCE
// O(SUBTREE SIZE OF FIRST COMMON ANCESTOR) TIME --- O(1) SPACE
// WORST CASE O(N) TIME

export function firstCommonAncestor2(node1, node2, tree) {
  if (!node1 || !node2) throw Error('invalid node(s)');

  // if (!covers(tree, node1) || !covers(tree, node2)) return null;
  if (covers(node1, node2)) return node1.value;
  if (covers(node2, node1)) return node2.value;

  let sibling = getSibling(node1), parent = node1.parent;

  while (!covers(sibling, node2)) {
    sibling = getSibling(parent);
    parent = parent.parent;
  }

  return parent.value;
}

function covers(tree, node) {
  if (!tree) return false;
  if (tree === node) return true;
  return covers(tree.left, node) || covers(tree.right, node);
}

function getSibling(node) {
  if (!node || !node.parent) return null;
  const parent = node.parent;
  return parent.left === node ? parent.right : parent.left;
}
