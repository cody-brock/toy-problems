// 48. Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
var rotate = function(matrix) {
    
  let length = matrix.length;
  let maxLevel = Math.max(length / 2);
  
  // Outer counter.  Tracks the level - how far we move from outside to inside layers.
  for (let i = 0; i < maxLevel; i++) {
      
      // Inner counter.  Goes over each individual item to be switched.  As we progress through levels,
      // we ignore 1 more on the left and 1 more on the right since they have already been switched.
      for (let j = i; j < length - i - 1; j++) {   
          
          // store the top left one.
          let temp = matrix[i][j];
          
          // top left = bottom left
          matrix[i][j] = matrix[length-1 - j][i]
      
          // bottom left = bottom right
          matrix[length-1 - j][i] = matrix[length-1 - i][length-1 - j];
      
          // bottom right = top right
          matrix[length-1 - i][length-1 - j] = matrix[j][length-1 - i]
      
          // top right = top left
          matrix[j][length-1 - i] = temp;
          
      }
        
  }
  
  return matrix;
  
};