// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

var searchInsert = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length-1)
};

var binarySearch = function(array, target, start, end) {
  if (start > end) return start
  middle = Math.floor((start + end) / 2);
  
  if (array[middle] === target) return middle
  if (array[middle] > target) return binarySearch(array, target, start, middle-1)
  if (array[middle] < target) return binarySearch(array, target, middle+1, end)
  
}