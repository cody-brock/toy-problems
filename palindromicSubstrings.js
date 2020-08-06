// Leetcode: 647. Palindromic Substrings
// ************************

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Note:

// The input string length won't exceed 1000.

// /**
//  * @param {string} s
//  * @return {number}
//  */
var countSubstrings = function(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < 2; j++) {
          let left = i;
          let right = i+j;
          while (left >= 0 && s[left] === s[right]) {
              counter++;
              left--;
              right++;
          }
      }
  }
  return counter;
};