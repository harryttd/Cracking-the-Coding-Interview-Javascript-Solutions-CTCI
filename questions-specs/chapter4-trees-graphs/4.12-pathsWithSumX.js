'use strict';

export function treePathsWithSumX_1(tree, value) {
  if (!tree || !tree.root) throw Error('invalid tree');
  return countPaths1(tree.root, value);
}

function countPaths1(tree, value, path = [], paths = 0) {
  if (tree) {
    path.push(tree.value);

    let sum = 0,
        pathLength = path.length;

    while (!!~pathLength--) {
      sum += path[pathLength];
      if (sum === value) paths++;
    }

    paths += countPaths1(tree.left, value, path) + countPaths1(tree.right, value, path);
    path.pop();
  }

  return paths;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

export function treePathsWithSumX_2(tree, value) {
  if (!tree || !tree.root) throw Error('invalid tree');
  return countPaths2(tree.root, value);
}

function countPaths2(tree, value) {
  if (!tree) return 0;

  const pathsFromRoot = countFromNode(tree, value),
        leftPaths = countPaths2(tree.left, value),
        rightPaths = countPaths2(tree.right, value);

  return pathsFromRoot + leftPaths + rightPaths;
}

function countFromNode(tree, value, sum = 0) {
  if (!tree) return 0;

  sum += tree.value;

  let paths = 0;
  if (sum === value) paths++;

  paths += countFromNode(tree.left, value, sum) + countFromNode(tree.right, value, sum);

  return paths;
}
