// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubArrayBruteForce(A) {
    
  let max = -Infinity;
  
  if (A.length === 1) return A[0];
  
  for (let i = 0; i < A.length; i++) {
      let sum = 0;
      for (let j = i; j < A.length; j++) {
          sum += A[j];
          if (sum > max) max = sum;
      }
  }
  
  return max;
  
}


function maxSubArray(A) {
    
  let max = A[0];
  let curr = Math.max(max, 0);
  
  for (let i = 1; i < A.length; i++) {
      curr = curr + A[i];
      max = Math.max(curr, max);
      console.log({curr, max})

      curr = Math.max(curr, 0);
      console.log({curr})
  }
  
  return max;
  
}