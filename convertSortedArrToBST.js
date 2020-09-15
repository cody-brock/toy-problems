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
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
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