// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

// =======================================================================================
// Solution 1: All logic is contained within the function.
var permute = function(nums) {
    
  // Handle edge case of an empty nums
  if (nums.length === 0) return [];
  
  // We will ultimately return res, an array containing subarrays of the permutations
  let res = [];
  
  // map's keys will be the values of nums, and the value will show if the key has been used yet.
  let map = new Map();
  for (num of nums) {
      map.set(num, false);
  }
  
  // helper function
  // arr is the array thus far, and choices are the remaining numbers
  const helper = function(arr, choices) {
              
      if (arr.length === nums.length) res.push(arr);
      
      // iterates through all possible nums
      for (let [key, value] of choices) {
          if (value === false) {   // if we have not yet used this num...
              choices.set(key, true);  // then set it to true...
              helper([...arr, key], choices); // and add it to arr and call the helper recursively...
              choices.set(key, false); // and lastly, set it back to false.  This allows us to go through all the possibilities.
          }
      }
      
  }
  
  helper([], map);
  return res;
  
};



// =======================================================================================
// Solution 2: Separates the logic into three different functions
var permute = function(nums) {
    
  // Handle edge case of an empty nums
  if (nums.length === 0) return [];
  
  let res = [];
  findPermutations([], createMap(nums), nums.length, res);
  return res;
  
};


// createMap takes in an array, and returns a map - each value from array will be a key, and all values will be false
const createMap = function(arr) {
  let map = new Map();
  for (num of arr) {
      map.set(num, false);
  }
  return map;
}


// findPermutations contains the important logic for solving this problem
// arr will store the current permutation array.
// map will be used to track whether the number has yet been used.
// len is the target length of each permutation array, which lets us know when to push it into res.
// res is an array containing subarrays, each showing a possible permutation.
const findPermutations = function(arr, map, len, res) {
  if (arr.length === len) res.push(arr);

  // iterates through all possible nums
  for (let [key, value] of map) {
      if (value === false) {   // if we have not yet used this num...
          map.set(key, true);  // then set it to true...
          findPermutations([...arr, key], map, len, res); // and call the helper recursively...
          map.set(key, false); // and lastly, set it back to false.  This allows us to go through all the possibilities.
      }
  }
}