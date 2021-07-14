// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

var numJewelsInStones = function(jewels: string, stones: string): number {
  let map = new Map();
  let jewelCount = 0;

  for (const jewel of jewels) {
    map.set(jewel, true);
  }

  for (const stone of stones) {
    if (map.has(stone)) jewelCount++;
  }

  return jewelCount;
};

/* Performance eval:
72ms, faster than ~95%,
40.3MB, better than ~35%
*/

/* Notes: the least memory-intensive solutions do not use any additional structure but have bad time complexity (nested loops, indexOf inside loop, etc.). Better time complexity solutions used a set, which at first seems weird, but makes sense: we only care about the value. With a map, I needed to set a completely superfluous value for each key. Some solutions that were faster used a standard object as well. */