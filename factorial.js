//Write a function factorial which accepts a number and returns
//the factorial of that number.

function factorial(num){
    //base case
    if (num === 0) return 1
    
    //recursive call
    return num * factorial(num - 1);
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
