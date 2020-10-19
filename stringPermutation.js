// Given two strings, write a method to determine if one is a permutation of the other

// This solution turns the strings into maps, then compares the maps
const isPermutation = function(str1, str2) {

  // First, if the strings are different length, we can just return false
  if (str1.length !== str2.length) return false;

  // Using helper function, turns strings into maps
  let map1 = strToMap(str1);
  let map2 = strToMap(str2);

  // Check if the maps are identical
  for ([key, val] of map1) {
    if (val !== map2.get(key)) return false;
  }
  
  // If all previous checks pass, return true
  return true;

}

const strToMap = function(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1)
    } else {
      map.set(str[i], 1);
    }
  }

  return map;
}


// console.log(isPermutation('asdf', 'sdaf'));
// console.log(isPermutation('baddie', 'baggie'))
// console.log(isPermutation('doggy', 'far'));



const isPermutation2 = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    sortedStr1 = str1.split('').sort().join('');
    sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2 ? true : false
  }

}

console.log(isPermutation2('asdf', 'sdaf'));
console.log(isPermutation2('baddie', 'baggie'))
console.log(isPermutation2('doggy', 'far'));