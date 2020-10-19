// Implement an algorithm to determine if a string has all unique characters

const isUniqueString = function (str) {
  
  if (str.length < 1) return false;

  let unique = true;
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    
    if (map.has(str[i]) === true) {
      unique = false;
    } else {
      map.set(str[i], true)
    }

  }

  return unique;

}

console.log(isUniqueString("heyou"));
console.log(isUniqueString("hello you"));


// What if you cannot use additional data structures?
const isUniqueStringOnly = function (str) {

  if (str.length < 1) return false;

  let newStr = "";
  let res = true;

  for (let i = 0; i < str.length; i++) {
    if (newStr.includes(str[i])) {
      res = false;
    } else {
      newStr = newStr + str[i];
    }
  }

  return res

}


console.log(isUniqueStringOnly("heyou"));
console.log(isUniqueStringOnly("hello you"));