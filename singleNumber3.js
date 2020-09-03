// 260. Single Number III


// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var singleNumber = function(nums) {
  let m = new Map();
  nums.forEach(x => (!m.has(x)) ? m.set(x, 1) : m.delete(x));
  return Array.from(m.keys());
};

var singleNumberMapNaive = function(nums) {
  let map = new Map();
  for (const numKey of nums) {
      if (map.has(numKey)) {
          let nextTally = map.get(numKey) + 1;
          nextTally === 2 ? map.delete(numKey) : map.set(numKey, nextTally);
      } else {
          map.set(numKey, 1);
      }
  }
  let arr = [];
  let mapKeys = map.keys();
  arr.push(mapKeys.next().value);
  arr.push(mapKeys.next().value);
  return arr;
};