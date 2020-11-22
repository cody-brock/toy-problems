// 47. Permutations II
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */


// =======================================================================================
// Solution 1: I'm amazed that this not only worked, but performed really well.

var permuteUnique = function(nums) {
  if (nums.length < 1) return []; // Handle edge case of nums being an empty array
  let set = new Set(); // stores all unique permutations
  createPermutations([], nums.length, arrToMap(nums), set); // calls main logic
  return [ ...set ]; // returns our set as an array
};

// Takes an array and returns a map, where each key corresponds to integers from the array
// Each key's value will be an object containing two pieces of information: 
  // curr - this will allow us to track how many times that number has been used
  // max - how many times the number can be used
const arrToMap = function(arr) {
  let map = new Map();
  for (num of arr) {
      if (map.get(num)) {
          // If we already have this num, then increase the max by 1
          map.set(num, {...map.get(num), max: (map.get(num).max + 1)});
      } else {
          // If we do not yet have this num, then add it to our map
          map.set(num, {curr: 0, max: 1});
      }
  }
  return map;
}

// Contains the main logic for this solution.
  // arr - the array that we are in the process of creating
  // maxLen - the length of the original num array. Once arr is this long, we know we have used all numbers.
  // charMap - our map which tracks what numbers we can use, how many times we have used them, and how many times they can be used.
  // set - where we store and verify our possible permutations.
const createPermutations = function(arr, maxLen, charMap, set) {
  
  // If arr is of sufficient length, try to add it to the set. It will only be added if it is unique.
  if (arr.length === maxLen && !set.has(arr)) set.add(arr);
  
  // Iterate through all the keys in charMap
  for (let [key, value] of charMap) {
      // if we have not yet used this number the maximum number of times allowed...
      if (value.curr < value.max) {
          charMap.set(key, {...charMap.get(key), curr: (charMap.get(key).curr + 1)}); // increment curr + 1
          createPermutations([...arr, key], maxLen, charMap, set); // add the number into arr, and recursively call function
          charMap.set(key, {...charMap.get(key), curr: (charMap.get(key).curr - 1)}); // reset curr so we can procede with other possible permutations from here
      }
  }
}