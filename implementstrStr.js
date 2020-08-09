// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */

// ===NAIVE SOLUTION===
var strStr = function(haystack, needle) {
  if (needle === '') return 0
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
          let temp = i;
          for (let j = 0; j < needle.length; j++) {
              if (haystack[temp] === needle[j]) {
                  if (j === needle.length-1) {
                      return i
                  } else {
                      temp++
                      continue;
                  }
              } else {
                  break;
              }
          }
      }
  }
  return -1;
}



console.log(strStr("hello", "ll"));
console.log("=============")
console.log(strStr("aaaaa", "bba"));
console.log("=============")
console.log(strStr("aaa", "aaaa"));
console.log("=============")

