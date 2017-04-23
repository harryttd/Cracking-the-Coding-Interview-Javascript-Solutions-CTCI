'use strict';

export function buildOrder(projects, dependencies) {
  const adjList = {},
        result = [],
        visited = new Set(),
        path = new Set();

  // create adjacency matrix
  projects.forEach(project => adjList[project] = []);
  dependencies.forEach(edge => adjList[edge[0]].push(edge[1]));

  // run topological sort
  projects.forEach(project => topologicalSort(project, adjList, visited, path, result));
  return result.reverse();
}

function topologicalSort(project, adjList, visited, path, result) {
  if (visited.has(project)) return;

  visited.add(project);
  path.add(project);

  for (const neighbour of adjList[project]) {
    if (path.has(neighbour)) throw new Error('dependencies are cyclic');
    topologicalSort(neighbour, adjList, visited, path, result);
  }

  path.delete(project);
  result.push(project);
}

const projects = ["a", "b", "c", "d", "e", "f"];
const dependencies = [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]];

console.log(buildOrder(projects, dependencies));
