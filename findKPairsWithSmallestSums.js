// 373. Find K Pairs with Smallest Sums
// You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

// Define a pair (u,v) which consists of one element from the first array and one element from the second array.

// Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.


// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number} k
//  * @return {number[][]}
//  */
var kSmallestPairsBruteForce = function(nums1, nums2, k) {
    
  if (nums1.length === 0 || nums2.length === 0) return []
  
  let arr = [];
  let res = [];
  
  for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
          let newObj = 
              {
                  nums: [nums1[i], nums2[j]],
                  sum: (nums1[i] + nums2[j])
              }
          arr.push(newObj);
      }
  }
  
  arr.sort((a, b) => a.sum - b.sum);
  
  for (let i = 0; i < k && i < arr.length; i++) {
      res.push(arr[i].nums);
  }
  
  return res;
  
};