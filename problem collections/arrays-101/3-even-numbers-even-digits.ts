/* Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1
Explanation:
Only 1771 contains an even number of digits.


Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5
*/

/*
task: given an array of integers, return the amount of integers with an even number of digits

I: array of integers
O: integer
C: array length = 1-500; arr[i] = 1 - 100_000
E: only one integer in array.

simple
  initialize count variable
  iterate over array
    if integer as string length even, increment count
  return count

ES6 "fancy" single line
  filter array, callback checks even length of string verrsion of integer
  return length of this operation

optimized?
  */

var findNumbers = function(nums: number[]) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) count++;
  }

  return count;
};

/* Performance Eval
76ms, faster than 76%
40.5MB, better than 25%
*/

/* Notes
seeing variance in submitted solutions' memory consumption; I am beginning to think
this is a Leetcode server issue more than anything. From now on I will not hassle
specific memory consumption TOO much, as it's clear there is a lot of variance for
the exact same solutions on submission */