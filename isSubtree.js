// 572. Subtree of Another Tree
// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} s
//  * @param {TreeNode} t
//  * @return {boolean}
//  */


// =======================================================================================
// Solution 1: Relatively naive solution, apparently - underperformed in time and memory, especially memory

var isSubtree = function(T1, T2) {
  if (T1 === null) return false;
  return findCommonNode(T1, T2)
};

const findCommonNode = function(T1, T2) {
  if (T2 === null) return true;
  
  let target = T2.val;
  let queue = [T1];
  while (queue.length) {
      let node = queue.shift();
      if (node.val === target) {
          if (compareTrees(node, T2)) return true;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
  }
  return false;
}

const compareTrees = function(T1, T2) {
  let q1 = [T1];
  let q2 = [T2];
  while (q1.length && q2.length) {
      let n1 = q1.shift();
      let n2 = q2.shift();
      
      if (n1.left === null || n2.left === null) {
          if (n1.left !== null || n2.left !== null) return false;
      } else {
          if (n1.left.val !== n2.left.val) return false;
      }
      
      if (n1.right === null || n2.right === null) {
          if (n1.right !== null || n2.right !== null) return false;
      } else {
          if (n1.right.val !== n2.right.val) return false;
      }
      
      if (n1.left) q1.push(n1.left);
      if (n1.right) q1.push(n1.right);
      if (n2.left) q2.push(n2.left);
      if (n2.right) q2.push(n2.right);
      
  }
  if (q1.length || q2.length) return false
  else return true;
}



