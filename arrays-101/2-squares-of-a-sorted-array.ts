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