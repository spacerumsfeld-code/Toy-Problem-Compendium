// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isAnagram = function(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let map = new Map();

  for (let char of s) {
      let count = map.get(char) || 0;
      map.set(char, ++count);
  }

  for (let char of t) {
      let count = map.get(char);
      if (!count) return false;
      map.set(char, --count);
  }
  return true;
};

// Performance
// Runtime: 100 ms, faster than 52% of JavaScript online submissions for Valid Anagram.

// Memory Usage: 40.8 MB, less than 67% of JavaScript online submissions for Valid Anagram.

