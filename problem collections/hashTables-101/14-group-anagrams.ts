// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

var groupAnagrams = function(strs: string[]): string[][] {
  if (strs.length < 2) return [strs];
  let map = new Map();

  for (const str of strs) {
    let sortedWord = [...str].sort().join('');
    let bucket = map.get(sortedWord);
    if (!bucket) map.set(sortedWord, [str]);
    else bucket.push(str);
  }

  return [...map.values()];
};

/* Performance eval:
108ms, faster than ~99%,
48.6MB, better than ~92%
*/

/* Notes: my first medium problem! I am proud of the results */
