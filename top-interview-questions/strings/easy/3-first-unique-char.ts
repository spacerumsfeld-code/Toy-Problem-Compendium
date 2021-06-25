// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s: string): number {
  let dict = {};
  for (let char of s) {
      dict[char] = ++dict[char] || 1;
  }
  for (let i = 0; i < s.length; i++) {
      if (dict[s[i]] === 1) {
          return i;
      }
  }
  return -1;
};

// Performance
// Runtime: 128 ms, faster than 33% of JavaScript online submissions for Reverse Integer.

// Memory Usage: 42.9 MB, less than 34% of JavaScript online submissions for Reverse Integer.