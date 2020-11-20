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


// =======================================================================================
// Solution 2: using recursion. Much better time and memory.
var isSubtree = function(t1, t2) {
    
  if (t2 === null) return true;  // If t2 is null, then an empty tree will always be a subtree of t1. Return true.
  
  return findCommonRoot(t1, t2);
  
};

const findCommonRoot = function(r1, r2) {
  
  if (r1 === null) return false;  // r1 has been fully searched without match. Return false.
  
  // Compare the value of r1's current node to r2's root node.
  // If we find a match, send them to compareTrees to see if the rest of the trees match.
  if (r1.val === r2.val) {
      if (compareTrees(r1, r2)) return true;
  }
  
  // Recursively call function, traversing DFS through r1.
  return (findCommonRoot(r1.left, r2) || findCommonRoot(r1.right, r2));
  
}

const compareTrees = function(r1, r2) {
  
  if (r1 === null && r2 === null) return true; // If both are empty, then they have matched correctly. Return true.
  if (r1 === null || r2 === null) return false; // If one is empty but not the other, return false.
  
  // Comparison logic
  if (r1.val !== r2.val) {
      return false; // If the values are different at any point, return false.
  } else {
      // If they match, then recursively call compareTrees on each tree's branches.
      return (compareTrees(r1.left, r2.left) && compareTrees(r1.right, r2.right));
  }
  
}
