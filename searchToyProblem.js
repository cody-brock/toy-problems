var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514]
var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

for (let i = 0; i < stuff.length; i++) {
  if (random_value === stuff[i]) {
    console.log(`Correct! Index of array: ${i} & random_value: ${random_value}`);
  };
}

function binarySearch(arr,x){
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      
      if (arr[middle] === x) return middle;
      
      if (arr[middle] < x) {
          left = middle + 1;
      }
      if (arr[middle] > x) {
          right = middle - 1;
      }
  }
  return -1
}