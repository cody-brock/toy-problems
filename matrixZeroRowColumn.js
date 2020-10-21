const zeroNaive = (matrix) => {

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {

        for (let i = 0; i < matrix.length; i++) {
          matrix[row][i] = false;
          matrix[i][col] = false;
        }

      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === false) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;

}

const zeroImproved = (matrix) => {

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {

        for (let i = 0; i < matrix.length; i++) {
          matrix[row][i] = false;
          matrix[i][col] = false;
        }

      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === false) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;

}

const zeroFinal = (matrix) => {

  let rowArr = new Array(5).fill(false);
  let colArr = new Array(5).fill(false);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {

        rowArr[row] = true;
        colArr[col] = true;

      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (rowArr[i] === true || colArr[j] === true) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;

}

const testMatrix = [
  [1,3,2,1],
  [1,0,9,3],
  [4,2,5,1],
  [1,7,6,0]
]


console.log(zeroFinal(testMatrix));
