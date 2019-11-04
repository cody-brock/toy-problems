//write a function that takes an array and a number, and returns the minimum length of a subarray
//required to add up to or equal the given number.  The array and number will be composed of positive integers.
//If there isn't one, return 0.

function minSubArrayLen(arr, sum) {
    var tempSum = 0;
    var minLength = Infinity;
    var start = 0;
    var end = 0;
    
    while (start < arr.length) {
        
        if (tempSum < sum && end < arr.length) {
            tempSum += arr[end];
            end++;
        }
        
        else if (tempSum >= sum) {
            minLength = Math.min(minLength, end-start);
            tempSum -= arr[start];
            start++;
        }
        else {
            break;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}