'use strict';

export function buildOrder(projects, dependencies) {
  const adjList = {}, result = new Set();

  // create adjacency list
  projects.forEach(project => adjList[project] = []);
                                    // project     // dependent
  dependencies.forEach(edge => adjList[edge[0]].push(edge[1]));

  // run topological sort
  projects.forEach(project => topologicalSort(project, adjList, result));

  return [...result].reverse();
}

function topologicalSort(project, adjList, result, path = new Set()) {
  if (!result.has(project)) {

    path.add(project);

    for (const dependent of adjList[project]) {
      if (path.has(dependent)) throw Error('dependencies are cyclic');
      topologicalSort(dependent, adjList, result, path);
    }

    path.delete(project);
    result.add(project);
  }
}
