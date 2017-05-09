'use strict';

import { TreeNode } from './helpers';

export class RandomTreeNode {
  constructor() {
    this.root = null;
    this.values = new Set();
    this.min = this.max = 0;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    }
    else {
      let node = this.root, branch;

      while (node) {
        branch = value <= node.value ? 'left' : 'right';
        if (!node[branch]) break;
        node = node[branch];
      }
      newNode.parent = node;
      node[branch] = newNode;
    }

    this.values.add(value);
    if (value < this.min) this.min = value;
    else if (value > this.max) this.max = value;
  }

  find(value) {
    let node = this.root, branch;

    while (node) {
      if (node.value === value) return node;
      branch = value <= node.value ? 'left' : 'right';
      if (!node[branch]) break;
      node = node[branch];
    }

    return node;
  }

  delete(value) {
    this.values.delete(value);
    this.min = Math.min(...this.values);
    this.max = Math.max(...this.values);
    return this._deleteRecursive(this.root, 'root', value);
  }

  _deleteRecursive(node, parentBranch, value) {
    if (node) {
      if (node.value === value) {
        if (!node.left && !node.right) {
          if (node.parent) node.parent[parentBranch] = null;
          else node = null;
        }
        else if (node.left && !node.right) {
          if (node.parent) node.parent[parentBranch] = node.left;
          else node = node.left;
        }
        else if (!node.left && node.right) {
          if (node.parent) node.parent[parentBranch] = node.right;
          else {
            node = node.right;
            node.right.parent = null;
          }
        }
        else {
          let minNode = node.right;
          while (minNode.left) {
            minNode = minNode.left;
          }
          node.value = minNode.value;
          return this._deleteRecursive(node.right, 'right', minNode.value);
        }
      }
      else {
        let branch = value < node.value ? 'left' : 'right';
      }
    }
  }

  randomNode() {
    const min = Math.ceil(this.min), max = Math.floor(this.max);
    let randomNumber;

    while (!this.values.has(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return this.find(randomNumber);
  }

}
