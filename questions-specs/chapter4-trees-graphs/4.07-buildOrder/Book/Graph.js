'use strict';

import Project from './Project';
// const Project = require('./Project');

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

	addEdge(startName, endName) {
		const start = this.getOrCreateNode(startName);
		const end = this.getOrCreateNode(endName);
		start.addNeighbor(end);
	}

	getNodes() {
		return this.nodes;
	}
}

// module.exports = Graph;
