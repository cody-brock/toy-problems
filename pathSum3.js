// 437. Path Sum III
// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.


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
//  * @return {number}
//  */

// =======================================================================================
// Solution 1: Per the leetcode version of the problem, returns the number of paths.
var pathSum = function(root, sum, paths=0) {
    
  // Handle a few edge cases
  if (root === null || sum === undefined) return null;
  
  // Helper function - proceeds from a given root, adding all nodes below and incrementing paths+1 anytime find a match
  const sumPath = function(root, sum, curr) {
      curr += root.val;
      if (curr === sum) paths++;

      if (root.left) sumPath(root.left, sum, curr);
      if (root.right) sumPath(root.right, sum, curr);
  }
  
  // Helper function - traverses tree, calling sumPath from every node.
  const traverseTree = function(root, sum) {
      sumPath(root, sum, 0);
      if (root.right) traverseTree(root.right, sum);
      if (root.left) traverseTree(root.left, sum);
  }

  traverseTree(root, sum);
  return paths;
  
};



// =======================================================================================
// Solution 2: Modified so that it prints the path. This is different than the CTCI answer... but it works.
var pathSum = function(root, sum, paths=0) {
    
  if (root === null || sum === undefined) return null;
  
  
  const traverseTree = function(root, sum) {
      sumPath(root, sum, 0, []);
      if (root.right) traverseTree(root.right, sum);
      if (root.left) traverseTree(root.left, sum);
  }

  const sumPath = function(root, sum, curr, path) {
      curr += root.val;
      path.push(root.val);
      
      if (curr === sum) {
          paths++;
          console.log(path);
      } 

      if (root.left) sumPath(root.left, sum, curr, [...path, root.val]);
      if (root.right) sumPath(root.right, sum, curr, [...path, root.val]);
  }
  
  traverseTree(root, sum);
  return paths;
  
};

