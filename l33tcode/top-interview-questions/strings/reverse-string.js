// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function(s) {
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      [s[i], s[j]] = [s[j], s[i]];
  }
};