//Recursive solution - slow performance
var isValid = function(s) {
    s = s.split("");
    console.log(s);

    function traverse(arr) {
        console.log("we had a callback")
        if (arr.length) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === "(" && arr[i+1] === ")") {
                    arr.splice(i,2)
                    traverse(arr)
                } else if (arr[i] === "{" && arr[i+1] === "}") {
                    arr.splice(i,2)
                    traverse(arr)
                } else if (arr[i] === "[" && arr[i+1] === "]") {
                    arr.splice(i,2)
                    traverse(arr)
                }
            }
        } 
    }

    traverse(s);
    return !s.length;

}

// console.log(isValid("(()()())"));

//solution found in user's solutions - interesting.
//much faster
var isValid2 = function(s) {
    let closeMap = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    let charStack = [];

    if (s === null || s === undefined) return false;

    for (let i = 0; i < s.length; i++) {
        let currentChar = s.charAt(i);
        let topElement;
        if (closeMap[currentChar] !== undefined) {
            topElement = (charStack.length === 0) ? '#' : charStack.pop();
            if (topElement !== closeMap[currentChar])
                return false;
        } else {
            charStack.push(currentChar);
        }
    }
    return charStack.length === 0;
}

console.log(isValid2("(()()())}"));