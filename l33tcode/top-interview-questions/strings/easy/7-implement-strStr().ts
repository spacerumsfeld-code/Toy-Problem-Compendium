// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function(haystack: number[], needle: number[]): number {
  if (!needle.length) return 0;
  let p2 = 0;
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[p2]) p2++;
      else {
          i -= p2;
          p2 = 0;
      }
      if (p2 === needle.length) return i - (p2 - 1);
  }
  return -1;
};

// Performance
// Runtime: 108 ms, faster than 22% of JavaScript online submissions for Implement strStr().

// Memory Usage: 38.5 MB, less than 91% of JavaScript online submissions for Implement strStr().