// 75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Follow up:

// Could you solve this problem without using the library's sort function?
// Could you come up with a one-pass algorithm using only O(1) constant space?

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var sortColors = function(nums) {
    
  let i = 0;
  let counter = 0
  
  while (counter < nums.length) {
      
      if (nums[i] === 0) {
          nums.splice(i, 1);
          nums.unshift(0);
          i++;
      } else if (nums[i] === 1) {
          i++;
      } else if (nums[i] === 2) {
          nums.splice(i, 1);
          nums.push(2);
      } 
      
      counter++
      
      // console.log({nums, i, counter});
      
  }

  return nums;
  
};


var sortColorsTwo = function(nums) {
    
  let left = 0;
  let curr = 0;
  let right = nums.length - 1;
  
  while (curr <= right) {
      if (nums[curr] === 0) {
          [nums[curr++], nums[left++]] = [nums[left], nums[curr]];
      } else if (nums[curr] === 2) {
          [nums[curr], nums[right--]] = [nums[right], nums[curr]];
      } else {
          curr++;
      }
  }
};