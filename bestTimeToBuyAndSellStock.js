// 121. Best Time to Buy and Sell Stock

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
var maxProfitNaive = function(prices) {
    
  let max = 0;
  if (prices.length < 1) return max;

  for (let i = 0; i < prices.length; i++) {
      for (j = i+1; j < prices.length; j++) {
          let curr = prices[j] - prices[i]
          if (curr > max) {
              max = curr;
          }
      }
  }
  
  return max;
  
};

// About 2x as fast as first one.  Similar memory.
var maxProfitAlsoNaive = function(prices) {
    
  let min = Infinity;
  let res = 0;
  if (prices.length < 1) return res;
  
  
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i]
          let max = -Infinity
          
          for (let j = i+1; j < prices.length; j++) {
              if (prices[j] > max) {
                  let curr = prices[j] - prices[i];
                  if (curr > res) {
                      res = curr;
                  }
              }

          }
          
      }

  }

  return res;
  
};

// Beats 99.88% speed
var maxProfitBetter = function(prices) {
    
  if (prices.length < 1) return 0;
  
  let leftIdx = 0;
  let rightIdx = 1;
  
  let res = 0;
  
  while (rightIdx < prices.length) {
      let curr = prices[rightIdx] - prices[leftIdx];
      
      if (curr > res) res = curr;
      
      if (prices[rightIdx] < prices[leftIdx]) {
          leftIdx = rightIdx;
      }
      
      rightIdx++;
      
  }
  
  return res;
  
};


