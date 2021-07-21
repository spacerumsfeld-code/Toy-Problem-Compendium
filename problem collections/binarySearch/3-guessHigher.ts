// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

// Example 3:
// Input: n = 2, pick = 1
// Output: 1

// Example 4:
// Input: n = 2, pick = 2
// Output: 2

// Constraints:
// 1 <= n <= 231 - 1
// 1 <= pick <= n

var guessNumber = function(n: number): number {
  let start = 1;
  let end = n;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    const myGuess = guess(mid);
    if (myGuess === 0) return mid;
    if (myGuess === -1) end = mid - 1;
    if (myGuess === 1) start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
};

var guessNumber2 = function(n) {
  let start = 1;
  let end = n;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    const status = guess(mid);
    switch (status) {
      case 0:
        return mid;
      case -1:
        end = mid - 1;
        break;
      case 1:
        start = mid + 1;
        break;
    }
    mid = Math.floor((start + end) / 2)
  }
};
/* I added a switch/case alternative see how switches perform in such cases. As we see below, they generally are more performant: the switch is evaluated only once, not once in every conditional; and, breaks let the operation terminate quicker than going through any additional conditionals that are not relevant */

/* Perf eval:
64ms, faster than ~98%,
39MB, pretty slow
*/