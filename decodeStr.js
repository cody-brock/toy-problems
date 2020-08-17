// /**
//  * @param {string} s
//  * @return {string}
//  */
var decodeString = function(s) {
    
  while (s.indexOf('[') !== -1) {
      
      let left = s.lastIndexOf('[');
      let right = left + s.substring(left).indexOf(']');
      
      let str = s.substring(left+1, right)
      
      let num = ""
      while ((/\d/).test(s[left-1])) {
          left--;
          num = s[left] + num
      }
      
      s = s.substring(0, left) + str.repeat(num) + s.substring(right + 1)
  }
  
  return s;
  
}
