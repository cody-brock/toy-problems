// 104. Maximum Depth of Binary Tree

// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.

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
//  * @return {number}
//  */
var maxDepth = function(root) {
  
  if (!root) return 0;
  let max = 0
  
  const helper = function(node, i) {

      if (!node.left && !node.right) {
          if (i > max) max = i;
      } else if (node.left && !node.right) {
          i++;
          helper(node.left, i);
      } else if (!node.left && node.right) {
          i++
          helper(node.right, i);
      } else if (node.left && node.right) {
          i++
          helper(node.left, i);
          helper(node.right, i);
      }
      
  }

  helper(root, 1);
  return max;

};


// Returning to make a better solution

// First try:
var findDepth = function(node) {
    
    if (node === null) return 0;
    
    let left = findDepth(node.left);
    let right = findDepth(node.right);
    
    return left > right ? left + 1 : right + 1;
    
}

var maxDepth = function(root) {
    
    return findDepth(root);
    
};


// Second try, simplifying the above:
var maxDepth = function(root) {
    
    if (root === null) return 0;
    
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
    
};
