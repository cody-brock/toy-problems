// /**
//  * @param {number} n
//  * @return {number}
//  */
var climbStairsNaive = function(n) {
  let tally = 0;
  function helper(num) {
      if (num === n) return tally += 1
      else if (num > n) return
      else if (num < n) {
          helper(num + 1);
          helper(num + 2);
      }
  }
  helper(0);
  return tally;
};

var climbStairs = function(n) {
    let prev = 0;
    let curr = 1;
    let temp;

    for (let i = 0; i < n; i++) {
        temp = prev
        prev = curr;
        curr += temp;
    }
    return curr;
};

var climbStairsArr = function(n) {
    let arr = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        let temp = arr[i-1] + arr[i-2]
        arr.splice(i, 0, temp);
    }
    return arr[n];
};

console.log(climbStairsArr(12))