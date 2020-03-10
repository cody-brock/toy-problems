class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      console.log(adjacentVertex);
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstSearchRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function DFS(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          DFS(neighbor);
        }
      });
    }

    DFS(start);
    // console.log('result', result)
    return result;
  }

  depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    console.log('DEPTH result', result)
    return result;
  }

  breadthFirstSearchIterative(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log('BREADTH result', result)
    return result;
  }

}

g = new Graph
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log('Edges added!', g.adjacencyList);

g.depthFirstSearchRecursive("A");
g.depthFirstSearchIterative("A");
g.breadthFirstSearchIterative("A");


// g.removeVertex("SF");
// console.log('Vertex removed!', g.adjacencyList);
