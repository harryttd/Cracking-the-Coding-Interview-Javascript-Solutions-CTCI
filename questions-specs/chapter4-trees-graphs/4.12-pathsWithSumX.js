'use strict';

// BALANCED TREE: O(N log N) TIME
// WORST CASE: O(N^2) TIME

export function treePathsWithSumX_1(tree, value) {
  if (!tree || !tree.root) throw Error('invalid tree');
  return countPaths1(tree.root, value);
}

function countPaths1(tree, targetValue, path = []) {
  let paths = 0;

  if (tree) {
    path.push(tree.value);

    let sum = 0,
        pathIndex = path.length - 1;

    while (!!~pathIndex) {
      sum += path[pathIndex];
      if (sum === targetValue) paths++;
      pathIndex--;
    }

    paths += countPaths1(tree.left, targetValue, path) + countPaths1(tree.right, targetValue, path);
    path.pop();
  }

  return paths;
}


// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// BALANCED TREE: O(N log N) TIME
// WORST CASE: O(N^2) TIME

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

function countFromNode(tree, targetValue, sum = 0) {
  if (!tree) return 0;

  sum += tree.value;

  let paths = 0;
  if (sum === targetValue) paths++;

  paths += countFromNode(tree.left, targetValue, sum) + countFromNode(tree.right, targetValue, sum);

  return paths;
}
