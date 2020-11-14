// 108. Convert Sorted Array to Binary Search Tree
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {number[]} nums
//  * @return {TreeNode}
//  */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null
  
  const helper = function(arr, left, right) {
      const middle = Math.floor((left + right) / 2);
      const node = new TreeNode(arr[middle]);

      if (left < middle) node.left = helper(arr, left, middle-1);
      if (right > middle) node.right = helper(arr, middle+1, right);
      
      return node;
  }
      
  return helper(nums, 0, nums.length-1);
  
};


// Returning to this problem - here's another solution
var sortedArrayToBST = function(nums) {

  // base case
  if (!nums.length) return null;
  
  // First, find the middle index of nums
  const middle = Math.floor(nums.length / 2);
  
  // turn the middle index of nums into a new TreeNode
  let node = new TreeNode(nums[middle]);

  // Define node's left and right, by recursively calling function of arrays sliced from left and right of middle
  node.left = sortedArrayToBST(nums.slice(0, middle));
  node.right = sortedArrayToBST(nums.slice(middle+1));        

  // Finally, return our node
  return node;
      
};


// ... And another solution.  This time, using indexes without slicing the array.  Faster this way.
var sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length-1);
};

var helper = function(arr, start, end) {
  
  if (start > end) return null;
  
  let middle = Math.floor((start + end) / 2);
  let node = new TreeNode(arr[middle]);
  
  node.left = helper(arr, start, middle-1);
  node.right = helper(arr, middle+1, end);
  
  return node;
  
}


// OK, last solution - seems to be the best option.  The same as the one above, but without helper function.
var sortedArrayToBST = function(nums, start = 0, end = nums.length - 1) {
    
  if (start > end) return null;
  
  let middle = Math.floor((start + end) / 2);
  let node = new TreeNode(nums[middle]);
  
  node.left = sortedArrayToBST(nums, start, middle-1);
  node.right = sortedArrayToBST(nums, middle+1, end);
  
  return node;
  
};