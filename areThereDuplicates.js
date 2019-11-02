function areThereDuplicates() {
    let input = arguments;
    let obj1 = {};

    for (let i = 0; i < input.length; i++) {
        console.log("each input: ", input[i]);
        if (!obj1[input[i]]) {
            obj1[input[i]] = 1;
        } else if (obj1[input[i]]) {
            return true;
        }
    } return false;
}

  console.log(areThereDuplicates(1,2,3))
  console.log(areThereDuplicates(1,2,2))
  console.log(areThereDuplicates('a','b','c'))
  console.log(areThereDuplicates('a','b','c','b'))