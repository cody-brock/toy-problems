// 938. Range Sum of BST
// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.

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
//  * @param {number} L
//  * @param {number} R
//  * @return {number}
//  */


// Depth First approach using stack 
var rangeSumBST = function(root, L, R) {
  if (!root) return false;
  let stack = [root];
  let sum = 0;
  
  while (stack.length) {
      const node = stack.pop();
      if (L <= node.val && node.val <= R) sum += node.val;
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
  }
  return sum;
};


// recursion using helper function
var rangeSumBST = function(root, L, R) {
  if (!root) return false;
  let sum = 0;
  
  const helper = function(node) {
      if (L <= node.val && node.val <= R) sum += node.val;
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
  }
  
  helper(root);
  return sum;
  
};


// recursion using original function
var rangeSumBST = function(root, L, R, sum=0) {
  if (!root) return false;
  if (L <= root.val && root.val <= R) sum += root.val;
  return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};