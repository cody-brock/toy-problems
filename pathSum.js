// 112. Path Sum
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

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
//  * @param {number} sum
//  * @return {boolean}
//  */
var hasPathSum = function(root, sum) {
    
  if (!root) return false;
  
  let res = false;
  
  const helper = (node, temp) => {

      temp += node.val;
              
      if (node.left) helper(node.left, temp);
      if (node.right) helper(node.right, temp);
      
      if (!node.left && !node.right) {
          if (temp === sum) res = true;
      }
      
  }
  
  helper(root, 0);
  
  return res;
  
};