// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

var countAndSay = function(n: number): string {
  if (n === 1) return '1';
  let iterations = 1;
  let result: string;

  const sayInteger = (s) => {
      if (iterations === n) {
          result = s;
          return;
      }
      let saidInt = '';
      let count = 1;
      for (let i = 0; i < s.length; i++) {
          if (s[i + 1] !== s[i]) {
              saidInt += count + s[i];
              count = 1;
          } else {
              count++;
          }
      }
      iterations++;
      sayInteger(saidInt);
  }
  sayInteger('1');
  return result;
};

// Performance
// Runtime: 80 ms, faster than 85% of JavaScript online submissions for Valid Palindrome.

// Memory Usage: 40.7 MB, less than 64% of JavaScript online submissions for Valid Palindrome.