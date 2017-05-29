'use strict';

// BALANCED TREE: O(N log N) TIME
// WORST CASE: O(Nˆ2) TIME

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
// WORST CASE: O(Nˆ2) TIME

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

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// SECOND BOOK SOLUTION

// O(NUMBER OF NODES IN THE TREE) TIME
// O(log N) SPACE FOR BALANCED TREE. WORST CASE O(N).

export function treePathsWithSumX_3(tree, value) {
  if (!tree || !tree.root) throw Error('invalid tree');
  return countPaths3(tree.root, value);
}

function countPaths3(node, targetSum, runningSum = 0, pathCount = new Map()) {
  if (!node) return 0;

  runningSum += node.value;

  // Count paths with sum ending at the current node.
  const sum = runningSum - targetSum;
  let totalPaths = pathCount.get(sum) || 0;

  // If runningSum equals targetSum, then one additional path starts at root.
  if (runningSum === targetSum) totalPaths++;

  // Add runningSum to pathCounts.
  incrementMap(pathCount, runningSum, 1);

  // Count paths with sum on the left and right.
  totalPaths += countPaths3(node.left, targetSum, runningSum, pathCount);
  totalPaths += countPaths3(node.right, targetSum, runningSum, pathCount);

  incrementMap(pathCount, runningSum, -1); // Remove runningSum

  return totalPaths;
}

function incrementMap(map, key, delta) {
  const newCount = delta + (map.get(key) || 0);
  if (!newCount) map.delete(key); // Remove when 0 to reduce space usage
  else map.set(key, newCount);
}
