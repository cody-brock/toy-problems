// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
var isBalanced = function(root) {
  if (root === null) return true;
  
  let flag = true;
  
  var helper = function(node) {
      
      if (!node.left && !node.right) return 0;
      
      let leftHeight = 0;
      let rightHeight = 0;
      
      if (node.left) {
          leftHeight = 1 + helper(node.left);
      }
      
      if (node.right) {
          rightHeight = 1 + helper(node.right);
      } 
      
      let subTreeHeight = Math.max(leftHeight, rightHeight);
      if (Math.abs(leftHeight - rightHeight) > 1) flag = false;
      return subTreeHeight;
  }
  
  helper(root);
  return flag;
  
};