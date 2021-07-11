// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function(nums: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [i, map.get(target - nums[i])];
    map.set(nums[i], i);
  }
};

/* Performance eval:
104ms, faster than ~50%,
41.4MB, better than ~12%
*/

var twoSum2 = function(nums: number[], target: number): number[] {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    let solution = cache[target - nums[i]];
    if (solution !== undefined) return [i, solution];
    cache[nums[i]] = i;
  }
};

/* Performance eval:
76ms, faster than ~90%,
40.7MB, faster than ~22%
*/