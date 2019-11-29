//Write out the bubble sort algorithm
//variable noSwaps helps optimize, so it breaks if we pass through fully successfully

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}


console.log(bubbleSort([37,45,29,8]));
console.log(bubbleSort([3709,453,29,8,76,23,54]));
console.log(bubbleSort([8,1,2,3,4,5,6,7,9]));