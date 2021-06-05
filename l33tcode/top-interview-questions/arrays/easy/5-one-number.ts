// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function(nums: number[]): number {
  let result = nums[0];
  let length = nums.length;
  let i = 1;
  for(i; i< length; i++) {
      result ^= nums[i]
  }
  return result
};

// Performance
// Runtime: 84 ms, faster than ~84% of JavaScript online submissions for Single Number

// Memory Usage: 46.3 MB, less than ~79% of JavaScript online submissions for Single Number.
