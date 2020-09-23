// 215. Kth Largest Element in an Array
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
var findKthLargest = function(nums, k) {
    
  if (nums.length === 0 || nums.length < k) return -1
  
  const sortedNums = nums.sort((a, b) => a - b)

  return sortedNums[nums.length - k];

};