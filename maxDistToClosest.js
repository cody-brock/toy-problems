// /**
//  * @param {number[]} seats
//  * @return {number}
//  */
var maxDistToClosest = function(seats) {
  let arr = [];
  let max = 0;
  seats.forEach((seat, idx) => seat === 1 ? arr.push(idx) : null);
  if (arr[0] > 0) max = arr[0];
  if (arr.length > 1) {
      for (let i = 0; i < arr.length-1; i++){
          let storage = Math.floor((arr[i+1] - arr[i]) / 2) ;
          if (storage > max) max = storage;
      }
  };
  if (arr[arr.length-1] < seats.length-1){
      let temp = seats.length-1 - arr[arr.length-1]
      if (temp > max) max = temp;
  }
  return max
}; 