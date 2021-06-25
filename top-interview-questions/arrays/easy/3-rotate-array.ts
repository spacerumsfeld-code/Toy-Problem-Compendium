// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function(nums: number[], k: number): void {
  let pos = (k % nums.length);
  let n = nums.splice(nums.length - pos)
  nums.splice(0, 0, ...n)
  };

// Performance
// Runtime: 80 ms, faster than 72.39% of JavaScript online submissions for Best Time to Buy and Sell Stock II.

// Memory Usage: 48.3 MB, less than 20.6% of JavaScript online submissions for Best Time to Buy and Sell Stock II.