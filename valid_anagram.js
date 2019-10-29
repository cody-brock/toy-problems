//take two strings and figure out if they're anagrams, using O(n) complexity

function validAnagram(str1, str2){
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    let obj1 = {};
    let obj2 = {};
    
    for (let val of str1) {
        obj1[val] = (obj1[val] + 1 || 0) + 1;
    }
    for (let val of str2) {
        obj2[val] = (obj2[val] + 1 || 0) + 1;
    }

    console.log("obj1", obj1)
    console.log("obj2", obj2)
    
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
  return true;
}

console.log(validAnagram('racecar', 'rraacce'));
//true

console.log(validAnagram('ajax', 'jaaax'));
//false

console.log(validAnagram('stately', 'tastely'));
//true

console.log(validAnagram('dusty', 'study'));
//true