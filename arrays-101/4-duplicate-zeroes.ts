// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Note:
// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

/*
task: given an array of integers, modify the array in-place such that wherever a zero occurs, the element after it is a zero as well. Preserve the original length of the array (so, some elements will be left off).

I: array of integers
O: none
C: arr[i] = 0-9, arr.length = 1 - 10_000
E: no zeroes in array. array will remain unmodified. array of 1 zero.

simple
  iterate over array
  when zero detected, splice new zero into its spot
  cut array down to original length

better
  */

var duplicateZeros = function(arr) {
  let length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
    }
  }
  arr.length = length;
};

/* Performance Eval
88ms faster than 78%,
40.5MB, better than 38%
*/

//improvement
var duplicateZeroesImprovement = function(arr) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      arr.pop();
      arr.splice(i,0,0);
    }
  }
}
