// Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

// Example 1:
// Input: nums = [1,0,1,1,0]
// Output: 4
// Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum number of consecutive 1s is 4.
// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 4

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.


// Follow up: What if the input numbers come in one by one as an infinite stream? In other words, you can't store all numbers coming from the stream as it's too large to hold in memory. Could you solve it efficiently?

var findMaxConsecutiveOnes = function(nums) {
  let currentStreak = 0;
  let maxStreak = 0;
  let indexOfZero;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (indexOfZero !== undefined) {
        let difference = i - indexOfZero;
        indexOfZero = i;
        currentStreak = difference;
      } else {
        currentStreak++;
        indexOfZero = i;
      }
    } else {
      currentStreak++;
    }
    maxStreak = Math.max(currentStreak, maxStreak);
  }

  return maxStreak;
};