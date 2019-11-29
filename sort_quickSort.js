//Write out code for Quick Sort
//Big 0:
  // time
    //Best case is O(nlogn);
    //Worst case is if you already have a sorted array - can be O(n^2);

function pivot (arr, start=0, endIndex=arr.length+1) {
    function swap(array, i, j) {
        var temp = array[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr,left,right);
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));
console.log(quickSort([4,8,2,1,5,7,6,3,34,23,11,65,3,5677,5432,67,8,7,3,5,7788]));
