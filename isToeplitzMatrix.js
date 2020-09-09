// 766. Toeplitz Matrix

// /**
//  * @param {number[][]} matrix
//  * @return {boolean}
//  */

// =================
// Final Version====
// =================
var isToeplitzMatrix = function(m) {
    
  // Handle edge cases of array sizes
  if (m.length === 1 || m[0].length === 1) return true;
  if (m.length === 0 || m[0].length === 0) return false;
  
  // Loop through each row, comparing element to its bottom-right diagonal
  for (let i = 0; i < m.length-1; i++) {
      for (let j = 0; j < m[0].length-1; j++) {
          if (m[i][j] !== m[i+1][j+1]) return false
      }
  }
  return true;
  
};


// =================
// First attempt====
// =================
var isToeplitzMatrixNaive = function(matrix) {
  // Find number of rows (r) and columns (c)
  const r = matrix.length;
  const c = matrix[0].length;
  
  // Handle edge cases of array sizes
  if (r === 1 || c === 1) return true;
  if (r === 0 ||c === 0) return false;
  
  // Loop through each row
  for (let i = 0; i < r-1; i++) {
      // curr is the current row from index 0 to columns-1
      let curr = matrix[i].slice(0,c-1);
      // next is the next row from index 1 to columns
      let next = matrix[i+1].slice(1,c);

      // Compare each element in curr and next
      for (let j = 0; j < curr.length; j++) {
          if (curr[j] !== next[j]) {
              return false
          }
      }
      
  }
  return true;
};