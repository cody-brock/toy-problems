// 118. Pascal's Triangle

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
var generate = function(numRows) {
  if (numRows <= 0) return [];
  if (numRows === 1) return [[1]];
  
  let res = [[1], [1, 1]];
  if (numRows === 2) return res;
  
  for (let i = 2; i < numRows; i++) {
      let newArr = [];
      
      for (let j = 0; j <= i; j++) {
          if (j === 0) {
              newArr.push(1);
          } else if (j === i) {
              newArr.push(1);
          } else {
              newArr.push(res[i-1][j-1] + res[i-1][j]);
          }
      }
      res.push(newArr);
      
  }
  return res;
};

var generate2 = function(numRows) {
  if (numRows <= 0) return [];
  
  let pascal = [];
  
  for (let i = 0; i < numRows; i++) {
      
      pascal[i] = [];
      pascal[i][0] = 1
      
      for (let j = 1; j < i; j++) {
          pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
      }
      pascal[i][i] = 1;
      
  }
  
  return pascal;
  
};