// Write a function that takes in a string
  //and returns the negative version of the stringed integer
  //or throws an error if it is a string with letters

const negNumber1 = stringOfNumber => {
    return !!parseInt(stringOfNumber) ? parseInt('-' + stringOfNumber) : 'error'
}

const negNumber2 = stringOfNumber => {
    return stringOfNumber * -1 || 'error';
}

console.log(negNumber1('string'))
console.log(negNumber1('10'))

console.log(negNumber2('string'))
console.log(negNumber2('10'))