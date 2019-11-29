//Write out the code for merge sort
//great time complexity, at O(n log n),
//but not the best space complexity O(n)

function merge(arrI, arrJ) {
    let returnArr = [];
    let i = 0;
    let j = 0;

    while (i < arrI.length && j < arrJ.length) {
        if (arrI[i] < arrJ[j]) {
            returnArr.push(arrI[i]);
            i++;
        } else {
            returnArr.push(arrJ[j]);
            j++;
        }
    }
    while (i < arrI.length) {
        returnArr.push(arrI[i]);
        i++;
    }
    while (j < arrJ.length) {
        returnArr.push(arrJ[j]);
        j++;
    }

    return returnArr;

}

// console.log(mergeSortedArrays([1,10,50],[2,14,99,100]));
// console.log(mergeSortedArrays([1,3,7],[2,5,9,10]));

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([10,24,76,73]));
console.log(mergeSort([10,24,76,73,22,76,4,789,4,2,6,8,9,65,343,2]));
