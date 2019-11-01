function sameFrequency(num1, num2){
    
    //declare an empty object for each number
    var obj1 = {};
    let obj2 = {};
    
    //turn number parameters into arrays
    let arr1 = (""+num1).split('');
    let arr2 = (""+num2).split('');
    
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    //loop through each array, create an object tallying the number of occurrences of each number
    for (var i = 0; i < arr1.length; i++) {
         var num = arr1[i];
         obj1[num] = obj1[num] ? obj1[num] + 1 : 1;
    }
    
    for (var i = 0; i < arr2.length; i++) {
         var num = arr2[i];
         obj2[num] = obj2[num] ? obj2[num] + 1 : 1;
    }

    //loop through the keys in obj1, comparing values to the same key in obj2
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
  return true;

}

console.log(sameFrequency(172,271));
console.log(sameFrequency(1,1))
console.log(sameFrequency(23, 6789));
console.log(sameFrequency(2322, 6789));