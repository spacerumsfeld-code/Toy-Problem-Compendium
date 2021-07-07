// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

function moveZeroes(nums: number[]): void {
  if (nums.length < 2) return;
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      if (read !== write) {
        nums[read] = 0;
      }
      write++
    }
  }
}

/* Performance eval:
80ms, faster than ~86%,
40.2MB, faster than ~68%
*/