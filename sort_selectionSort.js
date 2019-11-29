//Write out the code for selection sort

function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }

        }
        if (arr[lowest] !== arr[i]) {
            let temp = arr[lowest];
            arr[lowest] = arr[i];
            arr[i] = temp;
            console.log("after sort: ", arr);
        }
    }
    return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
console.log(selectionSort([5,2,7,1]));
console.log(selectionSort([44,11,3456,7,98,66,734,123456,65,3,8]));