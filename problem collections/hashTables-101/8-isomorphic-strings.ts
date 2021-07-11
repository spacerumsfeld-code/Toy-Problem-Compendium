// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:
// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function(s: string, t: string): boolean {
  if (s.length === 1 && t.length === 1) return true;

  let cache1 = {};
  let cache2 = {};

  for (let i = 0; i < s.length; i++) {
    if (cache1[s[i]] === undefined) cache1[s[i]] = t[i];
    if (cache2[t[i]] === undefined) cache2[t[i]] = s[i];
    if (cache1[s[i]] !== t[i] || cache2[t[i]] !== s[i]) return false;
  }
  return true;
};

/* Performance eval:
108ms, faster than ~26% of solutions,
41.2MB, better than ~41%
*/

var isIsomorphic2 = function(s: string, t: string): boolean {
  if (s.length === 1 && t.length === 1) return true;

  let cache1 = new Map();
  let cache2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!cache1.get(s[i])) cache1.set(s[i], t[i]);
    if (!cache2.get(t[i])) cache2.set(t[i], s[i]);
    if (cache1.get(s[i]) !== t[i] || cache2.get(t[i]) !== s[i]) return false;
  }
  return true;
};

/* Performance eval:
100ms, faster than ~37%,
41.6MB, better than ~32%
*/