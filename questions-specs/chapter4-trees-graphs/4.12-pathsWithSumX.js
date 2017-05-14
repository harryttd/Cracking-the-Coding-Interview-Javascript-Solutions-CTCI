'use strict';

export function treePathsWithSumX(tree, value) {
  if (!tree || !tree.root) throw Error('invalid tree');
  return countPaths(tree.root, value);
}

function countPaths(tree, value, path = [], paths = 0) {
  if (tree) {
    path.push(tree.value);

    let sum = 0,
        pathLength = path.length - 1;

    while (pathLength >= 0) {
      sum += path[pathLength];
      if (sum === value) paths++;
      pathLength--;
    }

    paths += countPaths(tree.left, value, path) + countPaths(tree.right, value, path);
    path.pop();
  }

  return paths;
}
