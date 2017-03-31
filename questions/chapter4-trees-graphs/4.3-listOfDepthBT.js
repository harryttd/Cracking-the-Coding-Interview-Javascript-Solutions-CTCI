'use strict';
import { LinkedList } from './helpers';

// DEPTH-FIRST SEARCH SOLUTION
export function linkedListsOfBTDepth(tree) {
  const lists = [];
  createListOfBTDepth(tree.root, lists);
  return lists;
}

function createListOfBTDepth(tree, lists, level = 0) {
  if (tree) {
    if (!lists[level]) lists[level] = new LinkedList();

    lists[level].append(tree.value);

    createListOfBTDepth(tree.left, lists, level + 1);
    createListOfBTDepth(tree.right, lists, level + 1);
  }
}
