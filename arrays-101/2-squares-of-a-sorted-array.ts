// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.


/*task: given an array of ascending order integers, return an array of ascending order squares of those integers

I: array of integers, 1 - 10**4 in length
O: array of integers
C: arr[i] = -10000 to 10000, arr is ascending order sorted
E: arr has one element. just return array of one element squared (save time short circuiting)

simple
  map over input array, squaring each element
  sort mapped array
  return sorted mapped array

better (better b/c map returns new array, here we are modifying in place so no extra memory)
  iterate over nums, reassign each element to square of itself
  sort nums
  return nums */

var sortedSquares = function(nums: number[]) {
  if (nums.length === 1) return [nums[0] ** 2];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }

  return nums.sort((a, b) => a - b);
};

/* Performance Eval
108ms, faster than 95%
45.7MB, better than 30%
*/

/* Notes
-Look at other solutions; why is my solution only 30% better even though I modify input array in place,
thus not having to use extra memory unlike a map or creation of result array?
*/