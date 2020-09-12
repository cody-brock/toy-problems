var levelOrderBottom = function(root) {
    
  if (!root) return [];
  let res = []
  let queue = [root]
  
  while (queue.length) {
      let lvl = [];
      let len = queue.length;
      for (let i = 0; i < len; i++) {
          let temp = queue.shift();
          if (temp.left) queue.push(temp.left);
          if (temp.right) queue.push(temp.right);
          lvl.push(temp.val);
      }
      res.unshift(lvl);
  }
  
  return res
  
};

var levelOrderBottom = function(root) {
    
  if (!root) return [];
  let res = []
  
  const helper = function(node, i) {
      if (!res[i]) res[i] = [];
      res[i].push(node.val);
      
      if (node.left) helper(node.left, i+1);
      if (node.right) helper(node.right, i+1);
  }
  
  helper(root, 0)
  
  return res.reverse()
  
};