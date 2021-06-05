// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

var plusOne = function(digits: number[]): number[] {
  for (let i = digits.length - 1; i != -1; i--) {
      if (digits[i] != 9) {
          digits[i] += 1;
          return digits;
      }
      digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

// Performance
// Runtime: 92 ms, faster than ~20% of JavaScript online submissions for Plus One.

// Memory Usage: 41.1 MB, less than ~21% of JavaScript online submissions for Plus One.