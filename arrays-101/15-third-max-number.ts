// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Can you find an O(n) solution?

/**
 * @param {number[]} nums
 * @return {number}

 task; given number[], return the third largest value. This value should be unique (not a duplicate of second largest, for example)

 I: number[]
 O: number
 C: nums.length = 1 - 10_000, nums[i] = -2**31 - 2**31 - 1
 E: only one num. Just return nums[0], only two nums, normal procedure should suffice

 simple:
   find Max of array
   splice out max, keep value in variable
   repeat 3 times
   return max
(loglinear, tons of extra memory with splicing and reindexing that results)

better:
 convert array to set to remove duplicates, back to array duplicate-free
 sort descending, if length less than 3 return max, if not return arr[2]

linear?
 ??
 */

 var thirdMax = function(nums) {
  let duplicateFree = [...new Set(nums)];
  let sorted = duplicateFree.sort((a, b) => b - a);
  return sorted.length < 3 ? sorted[0] : sorted[2];
};

/* Performance eval:
76ms, faster than 85%,
40.5MB, better than ~54%
*/