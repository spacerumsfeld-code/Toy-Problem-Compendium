// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

var firstUniqChar = function(s: string): number {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let mapEntry = map.get(s[i]);
    if (mapEntry) map.set(s[i], [mapEntry[0], mapEntry[1] + 1]);
    else map.set(s[i], [i, 1]);
  }

  for (const [k, v] of map) {
    if (v[1] === 1) return v[0]
  }
  return -1;
};