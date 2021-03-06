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

// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

var singleNumber = function(nums: number[]): number {
  let set = new Set();

  for (const num of nums) {
    if (set.has(num)) set.delete(num);
    else set.add(num);
  }

  return set.values().next().value;
};

/* Performance eval:
80ms, faster than ~87%,
43.7MB, better than ~41%
*/

/* Notes: this problem asked for constant space, but it is in the hashtables101 "hash set" collection so I wanted to explicitly use a set to learn more about the structure. Constant space solutions will use bitwise operations
*/