'use strict';

 function graphSearchBFS(graph, start, end) {
  if (start === end) return true;

  const visited = new Set(),
        queue = [start];

  while (queue.length) {
    const currentNode = queue.shift();
    for (let neighbour of graph[currentNode]) {
      if (!visited.has(neighbour)) {
        if (neighbour === end) return true;
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }

  return false;
}

function graphSearchDFS(graph, source, target, visited = new Set()) {
  if (source === target) return true;

  visited.add(source);

  for (let neighbour of graph[source]) {
    if (!visited.has(neighbour)) {
      if (graphSearchDFS(graph, neighbour, target, visited)) return true;
    }
  }

  return false;
}

const doBFS = function(graph, source) {
  const bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null };
    }

  bfsInfo[source].distance = 0;

  const queue = [source];

  // Traverse the graph

  // As long as the queue is not empty:
  //  Repeatedly dequeue a vertex v from the queue.
  //
  //  For each neighbor n of v that has not been visited:
  //     Set distance to 1 greater than v's distance
  //     Set predecessor to n
  //     Enqueue n
  //
  //
  //  use graph to get the neighbors,
  //  use bfsInfo for distances and predecessors

  while (queue.length) {
    const current = queue.shift();
    for (let i = 0; i < graph[current].length; i++) {
      const node = graph[current][i];
      if (bfsInfo[node].distance === null) {
        bfsInfo[node].distance = bfsInfo[current].distance + 1;
        bfsInfo[node].predecessor = current;
        queue.push(node);
      }
    }
  }

  return bfsInfo;
};

const adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  []
];

const bfsInfo = doBFS(adjList, 3);
console.log(bfsInfo);

const searchBFS = graphSearchBFS(adjList, 6, 6);
console.log(searchBFS);

const searchDFS = graphSearchDFS(adjList, 6, 0);
console.log(searchDFS);
