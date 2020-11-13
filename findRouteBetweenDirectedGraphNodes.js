// ==================================================================================================================
// Practice Implementing Directed Graph
// Simple version, allowing for just the creation of the graph using Adjacency List

class Graph {

  constructor() {
    this.adjacencyList = {};
  }

  addVertex = function(v1) {
    this.adjacencyList[v1] = [];
  }

  addConnection = function(v1, v2) {
    this.adjacencyList[v1].push(v2);
  }

}


// ==================================================================================================================
// Creating sample to use to test below

let graph = new Graph()

let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

for (vertex of vertices) {
  graph.addVertex(vertex);
}

graph.addConnection('A', 'B');
graph.addConnection('A', 'D');
graph.addConnection('B', 'E');
graph.addConnection('E', 'C');
graph.addConnection('C', 'F');
graph.addConnection('A', 'C');
graph.addConnection('A', 'C');

// console.log(graph);



// ==================================================================================================================
// Now, adding an algorithm - will look at a directed graph and determine if there is a route between two nodes

var isConnected = function(graph, v1, v2) {
  
  if (v1 === v2) return true;

  let queue = [];
  queue.push(v1);

  while (queue.length) {
    let node = queue.shift();
    if (node === v2) {
      return true;
    } else {
      for (connection of graph.adjacencyList[node]) {
        queue.push(connection);
      }
    }
  }

  return false;

}

console.log("isConnected(graph, 'A', 'F') - true", isConnected(graph, 'A', 'F'));
console.log("isConnected(graph, 'A', 'F') - true", isConnected(graph, 'A', 'F'));
console.log("isConnected(graph, 'A', 'G') - false", isConnected(graph, 'A', 'G'));
