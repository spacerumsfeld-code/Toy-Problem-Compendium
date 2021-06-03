// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

function longestCommonPrefix (strs) {
  if (!strs || strs.length === 0) {
      return '';
  }

  const [smallest, largest] = strs.sort((a, b) => a.length - b.length);
  console.log(large)
  const matchesChar = (i, target) => strs.every(str => str[i] === target);
  let lcp = '';

  for (let i = 0; i < smallest.length; i++) {
      if (matchesChar(i, smallest[i])) {
          lcp += smallest[i];
      } else {
         break;
      }
  }
  return lcp;
};

// Performance
// Runtime: 88 ms, faster than 55% of JavaScript online submissions for Longest Common Prefix.

// Memory Usage: 39 MB, less than 78% of JavaScript online submissions for Longest Common Prefix.