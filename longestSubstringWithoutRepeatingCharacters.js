// Leetcode: 3. Longest Substring Without Repeating Characters
// ************************

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) {
  var string = [];
  var longestStr = 0;
  var idx
  
  for (let i = 0; i < s.length; i++) {
      
      if (string.includes(s[i])) {
          idx = string.indexOf(s[i]);
          string = string.slice(idx+1);
      }
      
      string.push(s[i]);
      
      if (string.length > longestStr) {
          longestStr = string.length;
      }
      
  }

  return longestStr;
};