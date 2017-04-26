'use strict';

import Graph from './Graph';

export default class Question {
  constructor() {
    this.graph = new Graph();
  }

	buildGraph(projects, dependencies) {
		for (const project of projects) {
			this.graph.getOrCreateNode(project);
		}

		for (const dependency of dependencies) {
			this.graph.addEdge(dependency[0], dependency[1]);
		}

		return this.graph;
	}

	doDFS(project, stack) {
		if (project.getState() === "PARTIAL") {
			return false; // Cycle
		}

		if (project.getState() === "BLANK") {
			project.setState("PARTIAL");
			const children = project.getChildren();
			for (const child of children) {
				if (!this.doDFS(child, stack)) {
					return false;
				}
			}
			project.setState("COMPLETE");
			stack.push(project);
		}
		return true;
	}

  orderProjects(projects) {
		const stack = [];
		for (let project of projects) {
			if (project[1].getState() === "BLANK") {
				if (!this.doDFS(project[1], stack)) {
					return null;
				}
			}
		}
		return stack;
	}

  convertToStringList(projects) {
		const buildOrder = new Array(projects.length);
		for (let i = 0; i < buildOrder.length; i++) {
			buildOrder[i] = projects.pop().getName();
		}
		return buildOrder;
	}

  findBuildOrder(projects, dependencies) {
		const graph = this.buildGraph(projects, dependencies);
		return this.orderProjects(graph.getNodes());
	}

	buildOrderWrapper(projects, dependencies) {
		const buildOrder = this.findBuildOrder(projects, dependencies);
		if (buildOrder === null) return null;
		const buildOrderString = this.convertToStringList(buildOrder);
		return buildOrderString;
	}

	start(projects, dependencies) {
		const buildOrder = this.buildOrderWrapper(projects, dependencies);
		if (buildOrder === null) {
      throw Error('dependencies are cyclic');
		}
    return buildOrder;
	}

}
