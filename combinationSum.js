// 39. Combination Sum

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
var combinationSum = function(candidates, target) {
    
  if (!candidates) return [];
  if (target === 0) return [[]];
  
  candidates.sort((a, b) => a - b);
  
  let ans = [];
  
  const helper = function(target, path, index) {
      
      console.log({target, path, index});
      
      if (target === 0) {
          ans.push(path);
      } else if (target < 0) {
          return
      } else {
          while (index < candidates.length && target - candidates[index] >= 0) {
              helper(target - candidates[index], [...path, candidates[index]], index);
              index++;
          }
      }
      
  }
  
  helper(target, [], 0);
  
  return ans;
  
};