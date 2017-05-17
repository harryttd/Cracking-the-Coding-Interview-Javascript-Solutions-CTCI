'use strict';

export class TreeNode {
  constructor(value) {
    this.value = value;
    this.parent = this.left = this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    }
    else {
      let node = this.root, branch;
      while (node) {
        branch = value <= node.value ? 'left' : 'right';
        if (!node[branch]) {
          break;
        }
        node = node[branch];
      }
      newNode.parent = node;
      node[branch] = newNode;
    }
  }
}

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    // this.size = 0;
    this.head = this.tail = null;
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    }
    else {
      this.head = new LinkedListNode(value, this.head);
    }
    // this.size++;
  }

  append(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    }
    else {
      this.tail = this.tail.next = new LinkedListNode(value);
    }
    // this.size++;
  }

  toArray() {
    let arr = [], node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}

export function isBalanced(tree) {
  if (!tree) return true;

  const cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, tree, 0);
  return cache.max - cache.min <= 1;
}
