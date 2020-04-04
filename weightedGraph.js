class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

}

g = new WeightedGraph
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")

g.addEdge("A", "B", 80);
g.addEdge("A", "C", 5);
g.addEdge("B", "D", 9);
// g.addEdge("C", "E");
// g.addEdge("D", "E");
// g.addEdge("D", "F");
// g.addEdge("E", "F");
console.log('Edges added!', g.adjacencyList);