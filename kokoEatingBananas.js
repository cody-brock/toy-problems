// Naive solution - it works, but exceeded time limit for large numbers.
var minEatingSpeed = function(piles, H) {
    
  // Edge cases
  if (piles.length < 1) return null;
  if (H < 1) return null;
  if (piles.length > H) return null;
  if (piles.length === H) return Math.max(...piles);
  
  let K = 0;
  let solved = false;
  
  while (solved === false) {
      
      K = K + 1;
      let hour = 1
      let arr = piles.slice();
      
      while (hour <= H) {
          
          arr[arr.length-1] = arr[arr.length-1] - K;
          if (arr[arr.length-1] <= 0) arr.pop();
          if (arr.length < 1) solved = true;
          
          hour++;
      }
      
  }
  
  return K;
  
};



// Better solution
var minEatingSpeed = function(piles, H) {
    
  // Edge cases
  if (piles.length < 1) return null;
  if (H < 1) return null;
  if (piles.length > H) return null;
  if (piles.length === H) return Math.max(...piles);
  
  // Helper function - returns true if all the bananas in piles can be eaten in time using that speed
  const canEat = function(speed) {
      let time = 0;
      for (pile of piles) {
          time += Math.ceil(pile / speed);
      }
      return time <= H
  }
  
  
  // Two pointer approach
  let l = 1;
  let r = Math.max(...piles);
  
  // Uses binary search to find the min speed between 1 and piles' max val
  while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (canEat(m)) {
          r = m;
      } else {
          l = m + 1;
      }
  }
  
  return l;
  
};