// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
  let cache = {};
  for (let num of nums) {
    if (cache[num]) return true;
    else cache[num] = true;
  }
  return false;
};

// Performance
// Runtime: 128 ms, faster than ~17% of JavaScript online submissions for Contains Duplicate.

// Memory Usage: 46.3 MB, less than ~34% of JavaScript online submissions for Contains Duplicate.