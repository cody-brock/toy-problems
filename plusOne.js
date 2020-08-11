// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
var plusOneNaive = function(digits) {
    
  if (digits[digits.length - 1] !== 9) {
      digits[digits.length-1]  += 1
  } else {
      let carry = true;
      let idx = digits.length-1;
      digits[idx] = (digits[idx] += 1)

      while (carry && idx >= 0) {
          if (digits[idx] >= 10) {
              digits[idx] = (digits[idx] - 10);
              if (idx === 0) {
                  digits.unshift(1);
                  break;
              } else {
                  digits[idx-1] = (digits[idx-1] += 1);
                  idx--;
              }
          } else {
              carry = false;
          }
      }
  }

  return digits
  
};

var plusOneFinal = function(digits) {
    
  if (digits[digits.length - 1] !== 9) {
      return digits[digits.length-1]  += 1
  } else {
      for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        if (digits[i] > 9) {
          digits[i] = 0
        } else {
          return digits
        }
      }
      digits.unshift(1);
      return digits;
  }
  
};

// console.log(plusOne([1,2,3]));
// console.log(plusOne([4,3,2,1]));
console.log(plusOneFinal([1,2,9]));
console.log("==========================================")
console.log(plusOneFinal([1,9,9]));
console.log("==========================================")
console.log(plusOneFinal([4,8,8,9,9,9]));
console.log("==========================================")
console.log(plusOneFinal([4,8,8,9,0,9]));
console.log("==========================================")
console.log(plusOneFinal([9,9]));