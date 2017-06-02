'use strict';
import { LinkedList } from './helpers';

// RECURSIVE DEPTH-FIRST SEARCH SOLUTION
// O(N) TIME AND SPACE
export function DFS_linkedListsOfBTDepth(tree) {
  return DFS_createListOfBTDepth(tree.root);
}

function DFS_createListOfBTDepth(tree, lists = [], depthLevel = 0) {
  if (tree) {
    if (!lists[depthLevel]) lists[depthLevel] = new LinkedList();

    lists[depthLevel].append(tree.value);

    DFS_createListOfBTDepth(tree.left, lists, depthLevel + 1);
    DFS_createListOfBTDepth(tree.right, lists, depthLevel + 1);
  }

  return lists;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// ITERATIVE BREADTH-FIRST SEARCH SOLUTION
// O(N) TIME AND SPACE
export function BFS_createlinkedListsOfBTDepth(tree) {
  if (!tree.root) return [];

  const queue = [tree.root], lists = [];
  tree.root.level = 0;

  while (queue.length) {
    const parent = queue.shift();

    if (!lists[parent.level]) lists[parent.level] = new LinkedList();
    lists[parent.level].append(parent.value);

    if (parent.left) {
      parent.left.level = parent.level + 1;
      queue.push(parent.left);
    }

    if (parent.right) {
      parent.right.level = parent.level + 1;
      queue.push(parent.right);
    }

  }

  return lists;
}
