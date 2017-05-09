'use strict';

import { TreeNode } from './helpers';

export class RandomTreeNode {
  constructor() {
    this.root = null;
    this.values = new Set();
  }

  insert(value) {
    this.values.add(value);

    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    }
    else {
      let node = this.root, branch;

      while (node) {
        branch = this._branch(node.value, value);
        if (!node[branch]) break;
        node = node[branch];
      }
      newNode.parent = node;
      node[branch] = newNode;
    }
  }

  randomNode() {
    const values = [...this.values],
          min = Math.ceil(Math.min.apply(null, values)),
          max = Math.floor(Math.max.apply(null, values));

    // MUCH SLOWER
    // const min = Math.ceil(Math.min(...this.values)),
    // max = Math.floor(Math.max(...this.values));

    let randomNumber;
    while (!this.values.has(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return this.findNode(randomNumber);
  }

  findNode(value) {
    let node = this.root;

    while (node) {
      if (node.value === value) return node;
      node = node[this._branch(node.value, value)];
    }

    return node;
  }

  delete(value) {
    this.values.delete(value);
    return this._deleteNode(this.root, 'root', value);
  }

  _deleteNode(node, parentBranch, value) {
    if (node) {
      if (node.value === value) {
        if (!node.left && !node.right) {
          if (node.parent) node.parent[parentBranch] = null;
          else this.root = null;
        }
        else if (node.left && !node.right) {
          if (node.parent) node.parent[parentBranch] = node.left;
          else {
            this.root = this.root.left;
            this.root.parent = null;
          }
        }
        else if (!node.left && node.right) {
          if (node.parent) node.parent[parentBranch] = node.right;
          else {
            this.root = this.root.right;
            this.root.parent = null;
          }
        }
        else {
          let minNode = node.right;
          while (minNode.left) minNode = minNode.left;
          node.value = minNode.value;

          // minNode.parent.left = minNode.right;
          this._deleteNode(node.right, 'right', minNode.value);
        }
      }
      else {
        const branch = this._branch(node.value, value);
        this._deleteNode(node[branch], branch, value);
      }
    }
  }

  _branch(nodeValue, value) {
    return value <= nodeValue ? 'left' : 'right';
  }

}
