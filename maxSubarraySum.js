//create a function that takes in an array and a number and returns 
//the subarray of 'number' length that has the largest sum (consecutive numbers).  Use the 
//sliding window method.

function maxSubarraySum(arr, num){
    let tempSum = 0;
    let maxSum = 0;
    if (num > arr.length) return null;
    
    for (let i = 0; i < num; i++) {
          maxSum += arr[i]
    }
    
    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,3,5,66,4,78,2], 3))
console.log(maxSubarraySum([-1,3,-5,-66,4,-78,2], 3))
console.log(maxSubarraySum([2,3], 3))
console.log(maxSubarraySum([100,300,700,200,50], 2))