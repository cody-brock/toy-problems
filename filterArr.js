const newArrayFunc = function(arr, funct) {
  arr.filter(funct);
}



console.log(newArrayFunc([1,2,3], num => num === 2));