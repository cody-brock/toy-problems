// 560. Subarray Sum Equals K
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
var subarraySum = function(nums, k) {
  let res = 0;
  
  for (let i = 0; i < nums.length; i++) {
      
      let sum = nums[i];
      let j = i+1;
      
      if (sum === k) res++;

      while (j < nums.length) {
          
          sum += nums[j];
          if (sum === k) res++;
          j++;
                      
      }
  }
  return res;
};


var subarraySumHashmap = function(nums, k) {
    
  let map = new Map();
  let count = 0;
  let sum = 0;
  
  map.set(0, 1);
  
  for (let i = 0; i < nums.length; i++) {
      
      sum += nums[i];
      
      if (map.has(sum - k)) {
          count += map.get(sum-k);
      } 

      if (map.get(sum)) {
          map.set(sum, map.get(sum)+1);
      } else {
          map.set(sum, 1)
      }

  }
  
  return count;
  
};