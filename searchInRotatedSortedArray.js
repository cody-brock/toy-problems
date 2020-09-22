// 33. Search in Rotated Sorted Array
// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

var search = function(nums, target) {
    
  let idx = -1
  let left = nums[0];
  let right = nums[nums.length-1];
  
  if (target < left && target > right) {
      idx = -1;
  } else if ((left - target) <= 0) {
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] === target) {
              idx = i;
          }
      }
  } else if ((left - target) > 0) {
      for (let i = nums.length-1; i >= 0; i--) {
          if (nums[i] === target) {
              idx = i;
          }
      }
  }

  return idx;

};



var searchBinary = function(nums, target) {
    
  let left = 0;
  let right = nums.length-1;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      console.log(left, mid, right)
      
      if (nums[mid] === target) {
          return mid
      }
      
      if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target <= nums[mid]) {
              right = mid - 1
          } else {
              left = mid + 1;
          }
      } else {
          if (nums[mid] <= target && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  
  return -1
  
};