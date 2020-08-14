// /**
//  * @param {number} x
//  * @return {number}
//  */
var mySqrt = function(x) {
  if (x === 0) return 0;
  
  let left = 1;
  let right = Math.floor(x/2) + 1;
  let mid
  let sq
  
  while (left <= right) {
      let mid = Math.floor((left + right) /2);
      let sq = mid * mid
      if (sq === x) return mid;
      else if (sq < x) {
          left = mid + 1
      } else if (sq > x) {
          right = mid - 1
      }
  }
  
  return right;

};

console.log(mySqrt(8))
console.log(mySqrt(20))
console.log(mySqrt(200))