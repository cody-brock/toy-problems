// /**
//  * @param {number[]} A
//  * @return {boolean}
//  */
var validMountainArray = function(a) {
  const l = a.length
  if (l < 3) return false;
  if (a[0] >= a[1]) return false;
  if (a[l-2] <= a[l-1]) return false;
  let m = 0;
  for (let i = 0; i < l-1; i++) {
      if (m === 0) {
          if (a[i] > a[i+1]) m = 1;
          else if (a[i] === a[i+1]) return false;
      } else {
          if (a[i] <= a[i+1]) return false;
      }
  }
  return true;
};