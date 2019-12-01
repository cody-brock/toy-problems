//Write out the code for Radix Sort
//Great for sorting numbers, or by breaking data into binary,
//then reconverting back.

//Time complexity: O(nk)
//Space complexity: O(n+k)
//n is length of array, and
//k is the number of digits (average)
//If you have very very long numbers, or all unique randomly distributed data,
// then that slows it.

function getDigit(num, idx) {
    return Math.floor(Math.abs(num) / Math.pow(10,idx)) % 10;
}

function digitCount(num) {
    return Math.max(Math.floor(Math.log10(Math.abs(num))),0) + 1
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
    return nums;
}

console.log(radixSort([100,23,4567,1234567,34,65,99,345,2123,7,6,3,4567,8]));