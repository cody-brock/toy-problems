// 103. Binary Tree Zigzag Level Order Traversal
// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

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
var zigzagLevelOrder = function(root) {
    
  if (!root) return [];
  let res = [];
  let queue = [root];
  let direction = false;
  
  while (queue.length) {
      let lvl = [];
      let len = queue.length;
      direction = direction ? false : true;
      for (let i = 0; i < len; i++) {
          let temp = queue.shift()
          lvl.push(temp.val);
          if (temp.left) queue.push(temp.left);
          if (temp.right) queue.push(temp.right);
      }
      direction ? res.push(lvl) : res.push(lvl.reverse())
  }
  return res;
};