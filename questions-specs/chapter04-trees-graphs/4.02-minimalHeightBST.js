'use strict';
import { TreeNode } from './helpers';

// O(N) TIME AND SPACE

export function minimalHeightBST(arr) {
  if (!arr || !arr.length) return null;
  return createMinimalHeightBST(arr, 0, arr.length - 1);
}

function createMinimalHeightBST(arr, start, end) {
  if (start > end) return null;

  const middleIndex = Math.ceil((start + end) / 2),
        rootNode = new TreeNode(arr[middleIndex]);

  rootNode.left = createMinimalHeightBST(arr, start, middleIndex - 1);
  rootNode.right = createMinimalHeightBST(arr, middleIndex + 1, end);

  return rootNode;
}
