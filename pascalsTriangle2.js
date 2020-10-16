// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.


// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */
var getRow = function(rowIndex) {
  let pascal = [];
  
  for (let i = 0; i <= rowIndex; i++) {
      let arr = [];
      for (let j = 0; j <= i + 1; j++) {
          if (j === 0) {
              arr.push(1)
          } else if (j > 0 && j < i) {
              arr.push(pascal[i-1][j-1] + pascal[i-1][j]);
          } else if (j === i) {
              arr.push(1);
          }
      }
      pascal[i] = arr;
  }
  
  return pascal[rowIndex];
};

