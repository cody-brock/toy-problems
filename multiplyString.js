// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
var multiply = function(num1, num2) {
  numU = num1.split('');
  numB = num2.split('');
  let num
  let hold = 0;
  let tempArr = []
  let z = []

  for (let b = numB.length-1; b >= 0; b--) {
    for (let u = numU.length-1; u >= 0; u--) {
      console.log(numU[u], numB[b])
      if (numU[u] === 0 || numB[b] === 0) {
        num = num + hold
      }
      let temp = (numB[b] * numU[u]) + hold;
      num = temp % 10;
      hold = Math.floor(temp / 10);
      tempArr.push(num);
    }
    console.log("Before: ", tempArr)
    tempArr.reverse();
    tempArr.map(Number)
    // tempArr.join('')
    console.log("After: ", tempArr)
    // console.log(tempArr)
    z.push(num);
  }
  console.log(z);
};

console.log(multiply("2", "3"));
console.log("======================")
console.log(multiply("6", "100"));
// console.log(multiply("123456789", "987654321"));
// console.log(123456789 * 987654321);