'use strict';

import Project from './Project';

export default class Graph {
  constructor() {
    this.nodes = new Map();
  }

  getOrCreateNode(node) {
    if (!this.nodes.has(node)) {
      const project = new Project(node);
      this.nodes.set(node, project);
    }

    return this.nodes.get(node);
  }

  addEdge(project, dependent) {
    const start = this.getOrCreateNode(project);
    const end = this.getOrCreateNode(dependent);
    start.addNeighbor(end);
  }

  getNodes() {
    return this.nodes;
  }

}
