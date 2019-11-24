//Write a function called productOfArray
//which takes an array of numbers
//and returns the product of them all.
//Use recursion.

function productOfArray(arr) {
    //base case
    if (arr.length === 1) return arr[0];
    
    // recursive call
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60