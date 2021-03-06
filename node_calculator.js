// Instructions:
// Create a command-line node application that takes in parameters like this:
// node calculator.js add 1 2 ... and outputs 3
// node calculator.js subtract 5 2 ... and outputs 3
// node calculator.js multiply 3 2 ... and outputs 6
// node calculator.js divide 8 2 ... and outputs 4
// node calculator.js remainder 7 2... and outputs 1
// Bonus: Enable your calculator application to also handle the below cases: 
// node calculator.js exp 7 2 ... and output 49 (7 squared) 
// node calculator.js algebra 4x+2=10... and output 2. 
// (Hint: Assume the algebra will always be in this exact form and will always be addition)

let operatorObj = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
    remainder: "%",
    exp: "**",
    algebra: "algebra",
}

let operation = operatorObj[process.argv[2]];

if (operation === "algebra") {
    newAlgebra = (process.argv[3].split(/x|=|\+/));
    console.log(newAlgebra);
    console.log((newAlgebra[3] - newAlgebra[2]) / newAlgebra[0]);

} else {
    console.log(eval(Number(process.argv[3]) + operation + Number(process.argv[4])));
}
