'use strict';
import { LinkedList } from './helpers';

// RECURSIVE DEPTH-FIRST SEARCH SOLUTION
export function DFSlinkedListsOfBTDepth(tree) {
  const lists = [];
  DFScreateListOfBTDepth(tree.root, lists);
  return lists;
}

function DFScreateListOfBTDepth(tree, lists, depthLevel = 0) {
  if (tree) {
    if (!lists[depthLevel]) lists[depthLevel] = new LinkedList();

    lists[depthLevel].append(tree.value);

    DFScreateListOfBTDepth(tree.left, lists, depthLevel + 1);
    DFScreateListOfBTDepth(tree.right, lists, depthLevel + 1);
  }
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// ITERATIVE BREADTH-FIRST SEARCH SOLUTION
export function BFSlistOfBTDepth(tree) {
  if (!tree.root) return [];
  return BFScreatelinkedListsOfBTDepth(tree.root);
}

function BFScreatelinkedListsOfBTDepth(tree) {
  const queue = [tree], lists = [];

  tree.level = 0;

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
