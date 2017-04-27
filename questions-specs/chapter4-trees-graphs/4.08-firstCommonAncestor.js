'use strict';

const getDepth = (node, depth = 0) => node.parent ? getDepth(node.parent, depth + 1) : depth;

export function firstCommonAncestor(node1, node2) {
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
