// 199. Binary Tree Right Side View
// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

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
//  * @return {number[]}
//  */
var rightSideViewRecursiveOne = function(root) {
    
  if (!root) return [];
  let rows = [];
  let res = [];
  
  const helper = function(node, i) {
      if (!rows[i]) rows[i] = [];
      rows[i].push(node.val);
      if (node.left) helper(node.left, i+1);
      if (node.right) helper(node.right, i+1);
  }
  
  helper(root, 0);

  rows.forEach(elem => {
      res.push(elem[elem.length-1])
  })
  
  return res;
  
};

var rightSideViewRecursiveTwo = function(root) {
    
  if (!root) return [];
  let res = [];
  
  const helper = function(node, i) {
      if (!node) return;
      res[i] = node.val;
      helper(node.left, i+1);
      helper(node.right, i+1);
  }
  
  helper(root, 0)

  return res;

};
