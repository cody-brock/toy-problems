// 137. Single Number II

// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,3,2]
// Output: 3
// Example 2:

// Input: [0,1,0,1,0,1,99]
// Output: 99

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var singleNumberMap = function(nums) {
  const map = new Map();
  for (const numKey of nums) {
      if (map.has(numKey)) {
          const nextTally = map.get(numKey) + 1;
          nextTally === 3 ? map.delete(numKey) : map.set(numKey, nextTally);
      } else {
          map.set(numKey, 1);
      }
  }
  return map.keys().next().value;
};

var singleNumberObj = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
  }

  for (let key in obj) {
      if (obj[key] === 1) {
          return key;
      }
  }
};