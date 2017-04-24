'use strict';

export function buildOrder(projects, dependencies) {
  const adjList = {},
        result = new Set(),
        path = new Set();

  // create adjacency list
  projects.forEach(project => adjList[project] = []);
                                    // project     // dependent
  dependencies.forEach(edge => adjList[edge[0]].push(edge[1]));
  // run topological sort
  projects.forEach(project => topologicalSort(project, adjList, path, result));

  return [...result].reverse();
}

function topologicalSort(project, adjList, path, result) {
  if (!result.has(project)) {

    path.add(project);

    for (const dependent of adjList[project]) {
      if (path.has(dependent)) throw new Error('dependencies are cyclic');
      topologicalSort(dependent, adjList, path, result);
    }

    path.delete(project);
    result.add(project);
  }
}
