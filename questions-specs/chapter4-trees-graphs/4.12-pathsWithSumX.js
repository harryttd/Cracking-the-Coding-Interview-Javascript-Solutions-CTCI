'use strict';

export function treePathsWithSumX(tree, value) {
  if (!tree || !tree.root) throw Error('invalid tree');
  return countPaths(tree.root, value);
}

function countPaths(tree, value, path = [], paths = 0) {
  if (tree) {
    path.push(tree.value);

    let sum = 0,
        pathIndex = path.length - 1;

    while (!!~pathIndex) {
      sum += path[pathIndex--];
      if (sum === value) paths++;
    }

    paths += countPaths(tree.left, value, path) + countPaths(tree.right, value, path);
    path.pop();
  }

  return paths;
}
