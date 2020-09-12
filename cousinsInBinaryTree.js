// 993. Cousins in Binary Tree

// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @param {number} x
//  * @param {number} y
//  * @return {boolean}
//  */

var isCousins = function(root, x, y) {
  if (!root) return false;
  let res = true;
  let arr = [];
  
  const helper = function(node, i) {
      // checks if they are siblings - if x & y have same parent, flag is set to false
      if (node.left && node.right) {
          if (node.left.val === x && node.right.val === y) res = false;
          if (node.left.val === y && node.right.val === x) res = false;
      }

      if (!arr[i]) arr[i] = [];
      arr[i].push(node.val);
      
      if (node.left) helper(node.left, i+1);
      if (node.right) helper(node.right, i+1);
      
  }
  
  helper(root, 0);
  
  arr.forEach((elem) => {
      if (elem.includes(x) && !elem.includes(y)) res = false
  })
  
  return res;
  
};