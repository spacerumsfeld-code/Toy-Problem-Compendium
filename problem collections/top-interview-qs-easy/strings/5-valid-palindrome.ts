// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s: string): boolean {
  if (s.length === 1) return true;
  let alphanum = s.toLowerCase().replace(/[\W_]+/g, '');

  for (let i = 0, j = alphanum.length - 1; i <= j; i++, j--) {
      if (alphanum[i] !== alphanum[j]) return false;
  }
  return true;
};

// Performance
// Runtime: 116 ms, faster than 12% of JavaScript online submissions for Valid Palindrome.

// Memory Usage: 40.6 MB, less than 93% of JavaScript online submissions for Valid Palindrome.