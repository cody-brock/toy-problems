var letterCombinations = function(digits) {
  if (digits === "") return []
  
  let key = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
  }
  
  arr = []
  
  function go(idx, letters) {
      if (idx === digits.length) {
          arr.push(letters);
          return;
      }
      
      for (let char of key[digits[idx]]) {
          go (idx+1, letters + char);
      }
  }
  
  go(0, '');
  
  return arr;
  
};


console.log(letterCombinations("234"));