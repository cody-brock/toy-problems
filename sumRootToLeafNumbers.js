// 129. Sum Root to Leaf Numbers
// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.

/**
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
var sumNumbers = function(root) {
  if (!root) return 0;
  let res = []
  
  const helper = function(node, str) {
      let newStr = str + (node.val).toString();
      // console.log({node, str, newStr})
      
      if (!node.left && !node.right) return res.push(parseInt(newStr));
      
      if (node.left) helper(node.left, newStr);
      if (node.right) helper(node.right, newStr);

  }
  
  helper(root, '')
  return res.reduce((acc, curr) => acc += curr);

};