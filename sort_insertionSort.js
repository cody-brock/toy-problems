//Write out the code for insertion sort
//Insertion sort is good for if you're sorting data that's coming into an already sorted set.
//But it's generally not efficient and not common.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));
console.log(insertionSort([78,65,33,99,0,12,3]));