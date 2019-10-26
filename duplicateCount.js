// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
  //turn input into an array of lowercase
  let newText = text.toLowerCase().split('');

  //create an empty array "repeatArr" to store values
  let repeatArr = [];
  //create array so don't double increment same letter
  let alreadyCounted = [];
 
  //create counter variable to return
  let counter = 0;
 
  //loop through text
  for (let i = 0; i < newText.length; i++) {
      //if have not yet seen text[i], then push to repeatArr
      if (repeatArr.indexOf(newText[i]) === -1) {
          repeatArr.push(newText[i]);
      }
      //if text[i] already appears in repeatArr, then increment counter
      else if (repeatArr.indexOf(newText[i]) !== -1 && alreadyCounted.indexOf(newText[i]) === -1) {
          counter++;
          alreadyCounted.push(newText[i]);
      }
  }
  return counter;
}



console.log(duplicateCount(""))
// 0

console.log(duplicateCount("abcde"))
// 0

console.log(duplicateCount("aabbcde"))
// 2

console.log(duplicateCount("aabBcde"))
// 2

console.log(duplicateCount("Indivisibility"))
// 1

console.log(duplicateCount("Indivisibilities"))
// 2