// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// ample 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false

// Constraints:
// 1 <= n <= 231 - 1

const getDigits = (num: number): number[] => {
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  return digits;
}

const findSumOfSquares = (arr: number[]): number => {
  return arr.reduce((a, c) => a + c * c, 0);
}

var isHappy = function(n: number): boolean {
  let set = new Set();
  while (n !== 1) {
    let digits = getDigits(n);
    n = findSumOfSquares(digits);
    if (set.has(n)) return false;
    set.add(n);
  }
  return true;
};