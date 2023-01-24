let V = 5;
function minKey(key, mstSet) {
  let min = Number.MAX_VALUE,
    min_index;

  for (let v = 0; v < V; v++)
    if (mstSet[v] == false && key[v] < min) (min = key[v]), (min_index = v);

  return min_index;
}

function printMST(parent, graph) {
  document.write("Edge      Weight" + "<br>");
  for (let i = 1; i < V; i++)
    document.write(
      parent[i] + "   -  " + i + "     " + graph[i][parent[i]] + "<br>"
    );
}

function primMST(graph) {
  let parent = [];
  let key = [];
  let mstSet = [];
  for (let i = 0; i < V; i++) (key[i] = Number.MAX_VALUE), (mstSet[i] = false);
  key[0] = 0;
  parent[0] = -1;

  for (let count = 0; count < V - 1; count++) {
    let u = minKey(key, mstSet);
    mstSet[u] = true;
    for (let v = 0; v < V; v++)
      if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v])
        (parent[v] = u), (key[v] = graph[u][v]);
  }
  printMST(parent, graph);
}

let graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];
primMST(graph);
