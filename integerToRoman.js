// Leetcode: 13. Integer To Roman
// ************************

// /**
//  * @param {number} num
//  * @return {string}
//  */
var intToRoman = function(num) {
  var ans = [];
  var obj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
  }
  
  while (num > 0) {
      for (let letter in obj) {
          if (num >= obj[letter]) {
              ans.push(letter);
              num = num - obj[letter];
              break;
          }
      }
  }
  
  return ans.join('')
  
};

console.log("Hello")
console.log(intToRoman(55));
console.log(intToRoman(1009));
console.log(intToRoman(735));