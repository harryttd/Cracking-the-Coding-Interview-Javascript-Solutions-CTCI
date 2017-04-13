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
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
    }
    else {
      let n = this.root, branch;
      while (n) {
        branch = value <= n.value ? 'left' : 'right';
        if (!n[branch]) {
          break;
        }
        n = n[branch];
      }
      node.parent = n;
      n[branch] = node;
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
  // if (Array.isArray(tree) || tree === undefined) return;

  // if (!tree || !tree.root) {
  //   return true;
  // }

  if (!tree) return true;
  // let node = tree.root,
  let cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };
                // node
  findDepth(cache, tree, 0);
  return cache.max - cache.min <= 1;
}

class Graph {
  constructor() {
    this.maxVertices = 6;
    this.vertices = new Array(this.maxVertices).fill(0);
    this.count = 0;
  }

  addNode(node) {
    if (this.count < this.maxVertices) {
      this.vertices[this.count] = node;
      this.count++;
    } else {
      throw Error('graph is full');
    }
  }

  getNode() {
    return this.vertices;
  }

}

class GraphNode {
  constructor(vertex, adjacentLength) {
    this.adjacent = new Array(adjacentLength || 6);
    this.vertex = vertex;
    this.adjacentCount = 0;
    this.visited = false;
  }

  addAdjacent(node) {
    if (this.adjacentCount < this.adjacent.length) {
      this.adjacent[this.adjacentCount] = node;
      this.adjacentCount++;
    } else {
      throw Error('adjacent nodes are full');
    }
  }

  getAdjacent() {
    return this.adjacent;
  }

  getVertex() {
    return this.vertex;
  }
}
