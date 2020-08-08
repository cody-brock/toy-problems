// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function(nums) {
  let sums = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length-2; i++) {
    let left = i+1
    let right = nums.length-1;
    
    while (left < right && nums[i] !== nums[i-1] && nums[i] <= 0) {
        sum = nums[i] + nums[left] + nums[right]
        if (sum === 0) {
            sums.push([nums[i], nums[left], nums[right]]);
            while (nums[left] === nums[left+1]) left++; 
            while (nums[right] === nums[right+1]) right++;
            left++;
            right--;
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
return sums;
};

console.log(threeSum([0,0,0,0,0]));
console.log(threeSum([4,1,-4,0,0, -1, 1, 1, -1, 0]));
