// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:
// 1 <= n <= 104

function fizzBuzz(n: number): string[] {
  let result: string[] = [];
  for (let i = 1; i <= n; i++) {
    let pushStr: string = '';
    if (i % 3 === 0) pushStr += 'Fizz';
    if (i % 5 === 0) pushStr += 'Buzz';
    if (!pushStr.length) pushStr += i;
    result[i - 1] = pushStr;
  }
  return result;
};

// Performance
// Runtime: 72 ms, faster than 100%

// Memory Usage: 41.1 MB, less than 32%.