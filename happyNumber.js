
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