// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
var multiplyNaive = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  if (num1 === '1') return num2;
  if (num2 === '1') return num1;
  
  let nums = [];
  let temp = [];
  let carry = 0;
  let i = 0;
  let idx1 = num1.length-1;
  let idx2 = num2.length-1;
  let sum;
  
  while (idx2 >= 0) {
      let idx1 = num1.length-1;
      while (idx1 >= 0) {
          sum = (num1[idx1] * num2[idx2]);
          if (carry > 0) {
              sum += carry;
              carry = 0;
          }
          if (sum > 9) {
              let tempNum = sum;
              sum = sum % 10;
              carry = (tempNum - sum) / 10;
          }
          temp.push(sum);
          if (idx1 === 0) temp.push(carry);
          idx1--;
      }
      temp = temp.reverse();
      temp = temp.join('');
      temp = temp * Math.pow(10,i)
      nums.push(temp);
      temp = [];
      carry = 0;
      i++;
      idx2--;
  }
  
  return ((nums.reduce((acc, curr) => acc += curr)).toString());
  
};



// console.log(multiply('21', '12'));
// console.log(multiply('123', '321'));
// console.log(multiply('123', '456'));
// console.log(multiply('112', '911'));
// console.log(multiply('9', '9'));
// console.log(multiply('9', '99'));
console.log(multiply('123456789', '987654321'));

console.log([123456789, 2469135780, 37037036700, 493827156000, 6172839450000, 74074073400000, 864197523000000, 987654312000000, 1111111101000000].reduce((acc, curr) => acc += curr).toString());