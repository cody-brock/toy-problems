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