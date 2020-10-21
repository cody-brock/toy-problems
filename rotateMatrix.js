const rotateMatrix = (matrix) => {

  const n = matrix.length - 1;

  let newMatrix = [];
  for (let i = 0; i <= n; i++) {
    newMatrix.push([]);
  }

  for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= n; j++) {
      newMatrix[j][i] = matrix[i][j]
    }
  }

  return newMatrix;

}



const rotateMatrixInPlace = (matrix) => {

  const n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    // console.log(matrix);

    let first = layer;
    let last = n - 1 - layer;


    for (let i = first; i < last; i++) {

      let offset = i - first;
      
      // saving top
      let top = matrix[first][i];

      // top = left
      matrix[first][i] = matrix[last - offset][first];

      // left = bottom
      matrix[last - offset][first] = matrix[last][last - offset];

      // bottom = right
      matrix[last][last - offset] = matrix[i][last];

      // right = top
      matrix[i][last] = top;

    }
  }

  return matrix;

}

// Testing
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
];

var testMatrix2 = [
  [1, 2, 3],
  [0, 1, 2],
  [0, 0, 1]
];

console.log(rotateMatrix(testMatrix2));
console.log(rotateMatrixInPlace(testMatrix2));