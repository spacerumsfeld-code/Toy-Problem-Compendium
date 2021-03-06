// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums: number[]): void {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          count++;
          nums.splice(i, 1);
          i--;
      }
  }

  for (let j = 0; j < count; j++) {
      nums.push(0);
  }
};

// Performance
// Runtime: 84 ms, faster than ~78% of JavaScript online submissions for Plus One.

// Memory Usage: 40.4 MB, less than ~20% of JavaScript online submissions for Plus One.