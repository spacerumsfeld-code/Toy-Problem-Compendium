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

/* Perf eval:
104ms, faster than ~42%,
46.4MB, better than ~13%
*/

var firstUniqChar2 = function(s: string): number {
  let cache = {};

  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = ++cache[s[i]] || 1;
  }

  for (let j = 0; j < s.length; j++) {
    if (cache[s[j]] === 1) return j;
  }
  return -1;
};

/* Performance eval:
120ms, better than ~50%,
41.9MB, better than ~86%
*/

/* Notes: the simple object solution is clearly more performant than a map in this case. Perhaps it is because there is never a huge amount of writing/overwriting going on....though it seems to be a decent amount to me. There is more reading going on though, so perhaps that is why the simple dictionary works better
*/