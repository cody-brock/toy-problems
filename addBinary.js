var addBinaryNaive = function(a, b) {
  if (a === '0') return b
  if (b === '0') return a
  a = a.split('');
  b = b.split('');
  console.log(a);
  console.log(b);

  function add(arr, idx) {
      if (idx < 0) {
          arr.unshift('1');
          return arr
      } else if (arr[idx] === '0') {
          arr[idx] = '1';
          return arr
      } else if (arr[idx] === '1') {
          arr[idx] = '0';
          add(arr, idx-1);
      }
      return arr
  }

  function subtract(arr, idx) {
      if (idx === 0) {
          arr.pop()
          return arr;
      } else if (arr[idx] === '1') {
          arr[idx] = '0';
          return arr;
      } if (arr[idx] === '0') {
          arr[idx] = '1'
          subtract(arr, idx-1);
      }
      return arr
  }

  while (a.length) {
    a = subtract(a, a.length-1);
    b = add(b, b.length-1);
  }

  return b.join('')
}

// console.log(add([0], 0))
// console.log(add([1,0,1], 2));
// console.log(add([1,1,0], 2));
// console.log(add([1,1,1], 2));

// console.log(subtract([1], 0))
// console.log(subtract([1,0,0,0],3));
// console.log(subtract([1,1,1], 2));
// console.log(subtract([1,1,0], 2));

// console.log(addBinary("11", "1"));



var addBinary = function(a, b) {
  aIdx = a.length - 1;
  bIdx = b.length - 1;
  let sum = 0
  let carry = 0
  let arr = []
  while (aIdx >= 0 || bIdx >= 0) {
    sum = (parseInt(a[aIdx]) || 0) + (parseInt(b[bIdx]) || 0) + carry;
    arr.push(sum % 2);
    carry = sum >= 2 ? 1 : 0
    aIdx--;
    bIdx--;
  }
  if (carry) arr.push('1');
  arr.reverse();
  return arr.join('');
}

console.log(addBinary('11', '10'));
console.log(addBinary('110', '11'));
console.log(addBinary('11', '1001'));



