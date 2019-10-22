//this function runs through an array 1-100, prints
// Fizz when divisible by 3
// Buzz when divisible by 5
// FizzBuzz when divisible by both
function fizzBuzz (n) {
    output = [];
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(i);
        }
    } 
    return output;
}

console.log(fizzBuzz(100));


// ====================================

//another approach
const fizzBuzz = n => {
    let count = 0;
    let five = count % 5 === 0;
    let three = count % 3 === 0;
    let arr = [];
    while (count <= n) {
        let output = ""
        count ++;
        if (five && three) arr.push('FizzBuzz');
        else if (five) arr.push('Buzz');
        else if (three) arr.push('Fizz');
        else arr.push(count);
    }
    return arr
}

console.log(fizzBUzz(100));


// ========================================
// ========================================
// ========================================

//This function determines if the number is prime or not
function primeChecker (n) {
    let notPrime = false;
    for (let i = 2; i < (n/2+1); i++) {
        if (n % i === 0 && n !==i) {
            notPrime = true;
        }    
    } 
    return (notPrime === false);
}

console.log(primeChecker('9', 9));
console.log(primeChecker('7', 7));
console.log(primeChecker('6', 6));
console.log(primeChecker('13', 13));
console.log(primeChecker('3', 3));
console.log(primeChecker('16', 16));
console.log(primeChecker('17', 17));
console.log(primeChecker('34', 34));
console.log(primeChecker('51', 51));
console.log(primeChecker('101', 101));