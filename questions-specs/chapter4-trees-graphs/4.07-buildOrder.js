'use strict';

export function buildOrder(projects, dependencies) {
  const adjList = {},
        result = [],
        visited = new Set(),
        path = new Set();

  // create adjacency matrix
  projects.forEach(project => adjList[project] = []);
  dependencies.forEach(edge => adjList[edge[1]].push(edge[0]));

  // run topological sort
  // console.log(adjList);
  projects.forEach(project => topologicalSort(project, adjList, result, visited, path));
  return result.reverse();
}

function topologicalSort(project, adjList, result, visited, path) {
  if (visited.has(project)) return;

  visited.add(project);
  path.add(project);

  for (const neighbour of adjList[project]) {
    if (path.has(neighbour)) throw new Error('dependencies are cyclic');
    topologicalSort(neighbour, adjList, result, visited, path);
  }

  path.delete(project);
  result.push(project);
}
