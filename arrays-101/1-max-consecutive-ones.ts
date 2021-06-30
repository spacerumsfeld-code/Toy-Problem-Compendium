// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.


/*task: given an array of nums, return the highest consecutive one's in a row.

I: array of integers
O: integer
C: arr[i] = 1 or 0. linear time or better, constant space
E: input array is empty = return 0 for both cases

strategy:
sliding window pattern
  edge case for empty array
  initialize count variable to keep track of current ones in a row
  initialize max var to keep track of largest streak
  iterate over array
    increment count var for each 1
    when streak ends, compare current max to current streak and reassign to highest of two
    reset count to zero and continue incrementing  */

    function findMaxConsecutiveOnes(nums: number[]): number {
      let max = 0;
      let streak = 0;

      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) streak++;
        max = Math.max(max, streak);
        if (nums[i] === 0) streak = 0;
      }

      return max;
    };

    /* Performance Eval
    88ms, faster than ~79%
    42MB, better than 41%
    */