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
//  * @return {number[][]}
//  */
var levelOrder = function(root) {
    
  // if there is no root, return empty array
  if (!root) return [];
  
  // initialize empty array that we will return
  let arr = [];
  
  // helper function that will be called recursively to traverse tree in correct order
  const helper = function(node, i) {
              
      // If arr does not yet have subarray at index i, create empty one
      if (!arr[i]) arr[i] = [];
      
      // First, push value of node into arr at subarray level i
      arr[i].push(node.val);
      
      // recursively call helper function on left first, then right
      if (node.left) helper(node.left, i+1);
      if (node.right) helper(node.right, i+1);
      
  }
  
  // call helper, return arr
  helper(root, 0);
  return arr;

};