// Solving in-place
const reverseStr = strArr => {
  // Set up two pointers
  let left = 0;
  let right = 0;

  // First, find the null termination
  while (strArr[right] !== null) {
    right++;
  }

  // Then, set right to one to the left of the null, keeping null in place.
  right--;

  // Until the two pointers meet...
  while (left < right) {
    // Swap left and right values
    let temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;

    // Move pointers inward
    left++;
    right--;
  }

  return strArr;
}

console.log(reverseStrTwo(['a', 'b', 'c', 'd', null]));