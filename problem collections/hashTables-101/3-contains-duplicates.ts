// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

var containsDuplicate = function(nums: number[]): boolean {
  if (nums.length < 2) return false;
  let cache = new Set();

  for (let int of nums) {
    if (cache.has(int)) return true;
    else cache.add(int);
  }
  return false;
};

/* Performance eval:
88ms, faster than ~67%
44.7MB, faster than ~64%
*/

/* Notes:
whether a set performs faster than a standard object depends on context. When there are no duplicates,
the object performs faster past a certain amount of elements, while on smaller arrays with duplicates, the set performs better. There is no "one" correct answer here.
*/