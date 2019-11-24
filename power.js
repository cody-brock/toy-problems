//Write a recursive function that mimics Math.pow()
//It should accept a number and an exponent.
//Do not worry about negative bases and exponents.

function power(num, exp){
    //base case
    if (exp === 0) return 1
    //recursive call
    return num * power(num, exp - 1)
}


console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16