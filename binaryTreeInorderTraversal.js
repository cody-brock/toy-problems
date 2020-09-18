// 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
var inorderTraversalRecursive = function(root) {
  if (!root) return [];
  let res = [];
  
  const helper = function(node) {
      if (!node) return    
      helper(node.left, node);
      res.push(node.val);
      helper(node.right, node);
  }
  
  helper(root);
  return res;
  
};


var inorderTraversalIterative = function(root) {
  if (!root) return [];
  
  let res = [];
  let stack = [];
  let curr = root;
  
  while (curr !== null || stack.length) {
      while (curr !== null) {
          stack.push(curr);
          curr = curr.left;
      }
      
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
      
  }
  
  return res;
  
};


