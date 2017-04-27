'use strict';

import Graph from './Graph';
import Project from './Project';

// O(PROJECTS + DEPENDENCY PAIRS) TIME

export class BuildOrder {
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
    if (project.getState() === Project.State().PARTIAL) {
      return false; // Cycle
    }

    if (project.getState() === Project.State().BLANK) {
      project.setState(Project.State().PARTIAL);
      const children = project.getChildren();
      for (const child of children) {
        if (!this.doDFS(child, stack)) {
          return false;
        }
      }
      project.setState(Project.State().COMPLETE);
      stack.push(project);
    }
    return true;
  }

  orderProjects(projects) {
    const stack = [];
    for (const project of projects) {
      if (project[1].getState() === Project.State().BLANK) {
        if (!this.doDFS(project[1], stack)) {
          return null;
        }
      }
    }
    return stack;
  }

  convertToArray(projects) {
    const length = projects.length;
    const buildOrder = new Array(length);
    for (let i = 0; i < length; i++) {
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
    const buildOrderString = this.convertToArray(buildOrder);
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
