// 113. Path Sum II
// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.


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
//  * @return {number[][]}
//  */
const pathSum = function(root, sum) {
    
  // Handle a couple edge cases
  if (root === null || sum === undefined) return [];
  
  // res will be our array of arrays ultimately returned
  let res = [];
  
  // helper function that we will use recursively to DFS all possible paths
  const helper = function(node, arr) {
      
      // Check to see if current node is a leaf
      if (node.left === null && node.right === null) {
          // If so, add up all the values in this path.  If the total equals target sum, ...
          if ([...arr, node.val].reduce((acc, curr) => (acc += curr), 0) === sum) {
              // ... then we push the array into res.
              res.push([...arr, node.val])
          }
      } else {
          // If node is not a leaf, then call helper function on any non-null nodes to search all paths.
          if (node.left) helper(node.left, [...arr, node.val]);
          if (node.right) helper(node.right, [...arr, node.val]);
      }
      
  }
  
  helper(root, []);
  return res;
  
};