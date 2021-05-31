// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;
  let p1 = 0;
  let p2 = 1;

  while (p1 < nums.length) {
      if (nums[p1] === nums[p2]) nums.splice(p2, 1);
      else p2++;
      if (p2 >= nums.length) {
          p1++;
          p2 = p1 + 1;
      }
  }
  return nums.length;
};

//Performance
//Runtime: not relevant

//Memory Usage: 39.9MB, less than 99.22% of online submissions for Remove Duplicates From Sorted Array.
