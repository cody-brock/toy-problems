
// Ugly, but fast
var isHappy = function(num) {
    
  let seen = {};
  
  while (num !== 1 && !seen[num]) {
      seen[num] = true;
      num = sumOfSquares(num);
  }
  
  return num === 1;
  
};

var sumOfSquares = function(n) {
  return Array.from(String(n), Number).reduce((sum, num) => (sum + Math.pow(num,2)), 0)
}



// More readable, seems almost just as fast
var isHappy = function(num) {
    
  let seen = {};
  
  while (num !== 1 && !seen[num]) {
      seen[num] = true;
      num = sumOfSquares(num);
  }
  
  return num === 1;
  
};

var sumOfSquares = function(n) {
  let arr = Array.from(String(n), Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i]**2;
  }
  return sum;
}


// Pre-calculates squares, uses Set
const squares = {'0': 0, '1': 1, '2': 4, '3': 9, '4': 16, '5': 25, '6': 36, '7': 49, '8': 64, '9': 81}

var isHappy = function(n) {
  
  let set = new Set();
  
  while (!set.has(n)) {
      set.add(n);
      let s = n.toString();
      n = 0;
      for (let i = 0; i < s.length; i++) {
          n += squares[s[i]];
      }
      if (n === 1) return true;
  }
  
  return false;
  
};
