// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

var maxProfit = function(prices: number[]): number {
  let maxProfit: number = 0;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) maxProfit += prices[i] - prices[i - 1];
  }

  return maxProfit;
};

// Performance
// Runtime: 80 ms, faster than 76.81% of JavaScript online submissions for Best Time to Buy and Sell Stock II.

// Memory Usage: 39.4 MB, less than 35.97% of JavaScript online submissions for Best Time to Buy and Sell Stock II.