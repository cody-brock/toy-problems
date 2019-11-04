//Use the multiple-pointers approach to take in a sorted array and determine 
//if there is a pair of numbers that averages to the target average

function averagePair(arr, targetAvg){
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        let result = (arr[start] + arr[end])/2
        if (result === targetAvg) {
            return true;
        } else if (result > targetAvg) {
            end--;
        } else if (result < targetAvg) {
            start++;
        }
    } return false;
}

console.log(averagePair([1,2,3,4,5,6,7,8], 4));
console.log(averagePair([1,3,8,12,28,89,111,701], 10));
console.log(averagePair([1,3,5,7], 7));

