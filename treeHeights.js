// Designed a problem for myself.  
// Return true for a tree in which all leafs
// ... are at the same depth, or 1 different.
// ... Otherwise, return false.

var balancedTree = function(root) {
  if (!root) return true
  
  let map = new Map
  
  var helper = function(node, i) {
      
      if (!node.left || !node.right) {
          if (!map.get(i)) {
              map.set(i, true);
          }
      } 
      
      if (node.left && !node.right) {
          i++;
          helper(node.left, i);
      } else if (!node.left && node.right) {
          i++;
          helper(node.right, i);
      } else if (node.left && node.right) {
          i++;
          helper(node.left, i);
          helper(node.right, i);
      }

      return map;

  }
  
  helper(root, 1);
  let depths = Array.from(map.keys());
  console.log({depths})

  if (depths.length === 1) {
      return true
  } else if (depths.length === 2 && Math.abs(depths[0] - depths[1]) === 1) {
      return true
  } else {
      return false
  }
  
};
