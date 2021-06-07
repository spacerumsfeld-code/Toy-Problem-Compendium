// Given an integer array nums, design an algorithm to randomly shuffle the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example 1:

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

// Constraints:

// 1 <= nums.length <= 200
// -106 <= nums[i] <= 106
// All the elements of nums are unique.
// At most 5 * 104 calls will be made to reset and shuffle
class Solution {
  nums: number[];
  original: number[];

    constructor(nums: number[]) {
      this.nums = [...nums];
      this.original = nums;
    }

    reset(): number[] {
      return this.original;
    }

    shuffle(): number[] {
      for (let i = 0; i < this.nums.length; i++) {
        let randIdx = Math.floor(Math.random() * this.nums.length);
        this.swap(i, randIdx);
      }
      return this.nums;
    }

    swap (idx1, idx2) {
      [this.nums[idx1], this.nums[idx2]] = [this.nums[idx2], this.nums[idx1]];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Performance
// Runtime: 256 ms, faster than 23%
// Memory Usage: 41.1 MB, less than 50%.