// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */

var combinationSum2 = function(candidates, target) {
  let set = new Set();
  findCombinations([], arrToMap(candidates, target), target, set);
  return [...set];
};

const arrToMap = function(arr, max) {
  let map = new Map();
  for (num of arr) {
      if (num <= max) {
              if (!map.get(num)) {
              map.set(num, {curr: 0, max: 1});
          } else {
              map.set(num, {...map.get(num), max: (map.get(num).max + 1)});
          }
      }
  }
  return map;
}

const findCombinations = function(arr, map, target, set) {
  
  let sum = arr.reduce((curr, acc) => (acc += curr), 0);
  
  if (sum === target) {
      let res = arr.sort((a,b) => a - b);
      let flag = true;
      for (let subarray of set.keys()) {
          if (subarray.toString() === res.toString()) {
              flag = false;
          }
      }
      
      if (flag) set.add(res);
      return;
      
  } else if (sum < target) {
      for (let [key, val] of map) {
          if (val.curr < val.max) {
              map.set(key, {...map.get(key), curr: (map.get(key).curr + 1)});
              findCombinations([...arr, key], map, target, set);
              map.set(key, {...map.get(key), curr: (map.get(key).curr - 1)});
          }
      }
  }
  
}