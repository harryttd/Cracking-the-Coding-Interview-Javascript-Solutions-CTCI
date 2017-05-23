'use strict';

const errorCheck = (graph, start) => {
  if (!Array.isArray(graph)) throw Error('invalid graph');
  if (!graph[start]) throw Error('invalid start node');
};

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// E = Edges
// V = Vertices

// O(E) TIME --- O(V) SPACE
// ITERATIVE BREADTH FIRST SEARCH

export function graphSearchBFS(graph, start, target) {
  errorCheck(graph, start);

  if (start === target) return true;

  const visited = new Set(),
        queue = [start];

  while (queue.length) {
    const currentNode = queue.shift();
    for (const neighbour of graph[currentNode]) {
      if (!visited.has(neighbour)) {
        if (neighbour === target) return true;
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }

  return false;
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(E) TIME --- O(V) SPACE
// RECURSIVE DEPTH FIRST SEARCH

export function graphSearchDFS(graph, start, target) {
  errorCheck(graph, start);
  return searchDFS(graph, start, target);
}

function searchDFS(graph, start, target, visited = new Set()) {
  if (start === target) return true;

  visited.add(start);

  for (const neighbour of graph[start]) {
    if (!visited.has(neighbour)) {
      if (searchDFS(graph, neighbour, target, visited)) return true;
    }
  }

  return false;
}
