// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

var intersect = function(nums1, nums2) {
  let result = [];
  let map = new Map();
  let smaller = nums1.length >= nums2.length ? nums2 : nums1;
  let larger = smaller === nums2 ? nums1 : nums2;

  for (const num of smaller) {
      let count = map.get(num) || 0;
      map.set(num, ++count);
  }

    for (const num of larger) {
        let count = map.get(num);
        if (map.get(num)) {
            result.push(num);
            map.set(num, --count);
        }
    }

    return result;
};

// Performance
// Runtime: 92 ms, faster than ~20% of JavaScript online submissions for Single Number

// Memory Usage: 41.1 MB, less than ~21% of JavaScript online submissions for Single Number.
