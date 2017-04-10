'use strict';

export function graphSearch(graph, start, end) {
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
