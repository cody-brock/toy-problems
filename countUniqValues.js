//implemented a function that takes a sorted array
//and counts the number of unique values
//must have o(n) time complexity

function countUniqueValues(arr){
    let i = 1;
    let j = 0;
    let wasMatch = 0;
    
    while (i<arr.length) {
        if (arr[j] === arr[i]) {
            i++;
            console.log("they are equal, here is i", i);
        } else if (arr[j] < arr[i]) {
            j++;
            arr[j] = arr[i];
            console.log("they were not equal, here is i", i, "here is j" , j)
            i++;
            wasMatch = 1;
        }
    } return (j + wasMatch);
  } 