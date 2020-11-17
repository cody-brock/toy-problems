// 98. Validate Binary Search Tree
// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
// //  * @param {TreeNode} root
// //  * @return {boolean}
// //  */
var isValidBST = function(root) {
    
  if (!root) return null;
  let flag = true;
  
  const helper = function(node, min, max) {
      // console.log({node,min,max})
      if (node === null) return;
      if (node.val <= min) return false
      if (node.val >= max) return false
      // console.log({flag})

      if (node.left) helper(node.left, min, node.val);
      
      if (node.right) helper(node.right, node.val, max);
      
  }
  
  helper(root, -Infinity, Infinity);
  return flag;
  
};