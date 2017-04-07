import { expect } from 'chai';
import * as helpers from './helpers';
import * as funcs from './4.01-routesBetweenNodes';

for (let key in funcs) {
//  let func = funcs[key];

  xdescribe('ch4-q01: ' + key, function() {
    // TODO
  });

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
    this.adjacent = new Array(adjacentLength).fill(0);
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
