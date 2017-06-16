'use strict';

// Leetcode #113

function pathSum(root, sum) {
  if (!root) return [];
  if (!root.left && !root.right && root.val === sum) {
    return  [[root.val]];
  }

  const paths = [];

  const leftPaths = pathSum(root.left, sum - root.val);
  const rightPaths = pathSum(root.right, sum - root.val);

  if (leftPaths.length) {
    leftPaths.forEach(path => path.unshift(root.val));
    paths.push(...leftPaths);
  }

  if (rightPaths.length) {
    rightPaths.forEach(path => path.unshift(root.val));
    paths.push(...rightPaths);
  }

  return paths;
}
