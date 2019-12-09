// Given an array of integers, return indices 
//...of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, 
//...and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {

    //makes a copy of original array
    var sortArr = nums.slice(0);

    //helper function to sort integers
    function sortNumber(a, b) {
        return a - b;
      }

    //sorts sortArr
    var sortArr = sortArr.sort(sortNumber);

    //creates two pointers on each end of sorted array, and a final array to return
    let left = 0;
    let right = nums.length-1;
    let finalArr = [];
    
    //while indices aren't yet touching...
    while (left < right) {
        //if sum is too small, move left pointer up
        if (sortArr[left] + sortArr[right] < target) {
            left++;
        } 
        //if sum is too large, move right pointer down
        else if (sortArr[left] + sortArr[right] > target) {
            right--;
        } 
        //if sum === target, 
        else {
            console.log(`Got to answer! ${sortArr[left]} + ${sortArr[right]} = ${target}`)
            
            //takes the values we're going to look for in the original array.
            leftNum = sortArr[left];
            rightNum = sortArr[right];

            //pushes the left number into our final array to return
            finalArr.push(nums.indexOf(leftNum));
            
            //if the two numbers are equal...
            if (leftNum === rightNum) {
                //...then start looking after the index of the first occurrence of number
                finalArr.push(nums.indexOf(sortArr[right], finalArr[0]+1));
            } else {
                //otherwise, just find first index of other number
                finalArr.push(nums.indexOf(sortArr[right]));
            }
            return finalArr;
        }
    } 
    //if we break the while loop without finding match, returns false
    return false;

}

// console.log(twoSum([10,20,70,50,30], 120))
console.log(twoSum([45,22,88,45,21,98,76,34,58,23,77,56,44,44], 88))
// console.log(twoSum([2,7,11,15], 9))

