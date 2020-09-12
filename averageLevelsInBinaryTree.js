// 637. Average of Levels in Binary Tree
// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

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

var averageOfLevels = function(root) {
  if (!root) return [];
  
  let res = [];
  let queue = [root];
  
  while (queue.length) {
      let lvl = [];
      let len = queue.length;
      for (let i = 0; i < len; i++) {
          let temp = queue.shift();
          if (temp.left) queue.push(temp.left);
          if (temp.right) queue.push(temp.right);
          lvl.push(temp.val);
      }
      res.push(lvl.reduce((acc, curr) => acc += curr) / lvl.length);
  }
  
  return res;
  
};