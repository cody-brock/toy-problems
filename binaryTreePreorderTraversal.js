// 144. Binary Tree Preorder Traversal
// Given a binary tree, return the preorder traversal of its nodes' values.



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversalRecursion = function(root) {
  if (!root) return [];
  let res = [];
  
  const helper = function(node) {
      if (node === null) return;
      res.push(node.val);
      helper(node.left);
      helper(node.right);
  }
  
  helper(root);
  return res
  
};


var preorderTraversalIterativeOne = function(root) {
  if (!root) return [];
  
  let curr = root;
  let stack = [];
  let res = [];
  
  while (curr !== null || stack.length) {
      
      while (curr !== null) {
          stack.push(curr);
          res.push(curr.val);
          curr = curr.left;
      }
      
      curr = stack.pop().right;
      
  }
  
  return res
  
};



var preorderTraversalIterativeTwo = function(root) {
  if (!root) return [];
  
  let stack = [root];
  let res = [];
  
  while (stack.length) {
      
      let node = stack.pop();
      res.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      
  }
  
  return res;
  
};



