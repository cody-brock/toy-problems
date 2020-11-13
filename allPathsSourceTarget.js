// 797. All Paths From Source to Target

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).


var allPathsSourceTarget = function(graph) {
    
  // Edge case of an empty graph
  if (graph === null) return [];
  
  // Pre-calculate target
  let target = graph.length - 1;
  
  // res will be the array we will return, containing the successful paths
  let res = []
  
  // helper is our recursive DFS function
  var helper = function(node, path) {
      
      // First, check to see if our node is the target.  If so, push this path to res and break
      if (node === target) {
          res.push([...path, node]);
          return
      } else {
          // Otherwise, add this node to the path and call helper on all its connections
          for (let i = 0; i < graph[node].length; i++) {
              helper(graph[node][i], [...path, node]);
          }
      }
      
  }
  
  // Calls helper from the start of the graph
  helper(0, []);
  
  // returns our array of successful paths
  return res;
  
};