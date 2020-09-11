// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

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
//  * @return {number}
//  */


var minDepth = function(root) {
  if (!root) return false;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


var minDepthFirstAttempt = function(root) {
  if (!root) return false
  let min = Infinity
  
  const helper = function(node, i) {
      if (!node.left && !node.right) {
          if (i < min) min = i;
      } else if (node.left && !node.right) {
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
      return i
  }
  
  helper(root, 1);
  return min;
};

