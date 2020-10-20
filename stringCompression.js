const compressString = (str) => {
  // Handle edge cases
  if (str.length < 2) return str;
  
  // Turn str into array
  const strArr = str.split("");

  // Set up variables
  let compressed = [];
  let tally = 1;
  let left = 0;
  let right = 1;

  // Loop through strArr
  while (right < strArr.length) {
    
    // If next index === current character, increase tally and continue
    if (strArr[left] === strArr[right]) {
      tally++;
      right++
    } 
    // If next index !== current character, push the current character and tally into new array
    else {
      compressed.push(strArr[left], tally);
      tally = 1;
      left = right;
      right = left + 1;
    }

  }

  // Compress the last character
  compressed.push(strArr[left], tally);
  


  // Once finished with loop, join the new array into new string
  compressed = compressed.join("");

  // Compare length of new string and original string - return shortest one.
  return compressed.length < str.length ? compressed : str;

}

console.log(compressString('aaabbcccca'));
console.log(compressString('abcdef'));