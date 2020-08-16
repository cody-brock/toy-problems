// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
var reverseString = function(s) {
  let left = 0, right = s.length - 1
  while (left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
  }
  return s;
};

 var reverseStringNaive = function(s) {
  for (let i = 0; i < s.length; i++) {
      s.splice(i, 0, s.pop());
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));