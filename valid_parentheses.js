// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100



function validParentheses(parens){
  //turn input into an array
  let newParens = parens.split('');
  //create counters for each type of parentheses
  let leftParensCount = 0;
  let rightParensCount = 0;
 
  //loop through newParens, tallying '(' and ')'
  for (let i = 0; i < newParens.length; i++) {
      if (newParens[i] === '(') {
          leftParensCount++;
      } else if (newParens[i] === ')') {
          rightParensCount++;
      }
  }
 
  // returns true if: 1) first index is not ')' 2) last index is not '('  3) tally of left and right parentheses are equal
  return (newParens[0] !== ')' && newParens[newParens.length - 1] !== '(' && leftParensCount === rightParensCount);

}





console.log(validParentheses( "()" ));
// true
console.log(validParentheses( "())" ));
// false