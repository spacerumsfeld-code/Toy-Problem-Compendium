// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

var containsNearbyDuplicate = function(nums: number[], k: number): boolean {
  if (nums.length < 2) return false;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let dup = map.get(nums[i]);
    if (dup !== undefined) {
      if (Math.abs(dup - i) <= k) return true;
      else map.set(nums[i], i);
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};

/* Performance eval:
112ms, faster than ~65%,
60.2MB, better than ~12%
*/