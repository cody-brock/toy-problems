// /**
//  * @param {string} s
//  * @return {string}
//  */
var decodeString = function(s) {
  let arr = [];
  let left = 0;
  let right = 0;
  
  function helper(start, end) {
      console.log("****************")
      console.log(start, end);
      let num
      let str
      let temp = s.slice(start, end+1);
      console.log("temp: ", temp)
      // console.log("num, str: ", num, str)
      
      idx = temp.indexOf('[')
      
      console.log("start, idx: ", start, start+idx)
      num = s.slice(start, start+idx);
      
      console.log("idx+1, end: ", start+idx+1, end)
      str = s.slice(start+idx+1, end);
      
      console.log("num, str:", num, str);
      
      while (num > 0) {
          arr.push(str)
          num--;
      }
      console.log(arr);
  }
  
  while (left < s.length && right < s.length) {
      console.log("right: ", right)
      if (!/\d/.test(s[right])) {
          arr.push(s[right]);
          console.log(arr);
      } else {
          left = right;
          while (s[right] !== ']') {
              right++;
          }
          helper(left, right);
          right++;
      }
  }
  console.log(arr.join(''))
  return arr.join('');
}