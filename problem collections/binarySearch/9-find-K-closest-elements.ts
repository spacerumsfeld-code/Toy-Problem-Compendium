// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Example 1:
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// Example 2:
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// Constraints:
// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

// task: given a number[] that is sorted and integers k and x, find the k closest elements to x
// an integer a is closer to x than b if |a - x| < |b - x| || |a - x|=|b - x| && a < b

// I: number[]
// O: number[]
// C: arr never empty, always sorted,
// E: arr empty. not happening. arr.length === 1, just use normal computations (edge case code not necessarily)

// solution:
//   look at advanced solutions as I haven't quite come up with anything on my own. It's a learning process
//   */

var findClosestElements = function(arr: number[], k: number, x: number): number[] {
  let start = 0;
  let end = arr.length - k;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (x - arr[mid] > arr[mid + k] - x) start = mid + 1;
    else end = mid;
  }

  return arr.slice(start, start + k);
};

/* Performance eval:
104ms, faster than ~78%,
44.8MB, better than ~80%
*/