// We can shift a string by shifting each of its letters to its successive letter.

// For example, "abc" can be shifted to be "bcd".
// We can keep shifting the string to form a sequence.

// For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
// Given an array of strings strings, group all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

// Example 1:
// Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
// Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

// Example 2:
// Input: strings = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strings.length <= 200
// 1 <= strings[i].length <= 50
// strings[i] consists of lowercase English letters.

var groupStrings = function(strings: string[]): string[][] {
  let map = new Map();

  for (let string of strings) {
    let sequence = '';
    for (let i = 1; i < string.length; i++) {
      let diff = string.charCodeAt(i) - string.charCodeAt(i - 1);
      if (diff < 0) diff += 26;
      sequence += diff + '-';
    }
    if (map.has(sequence)) {
      map.get(sequence).push(string);
    } else {
      map.set(sequence, [string]);
    }
  }

  return [...map.values()];
};

/* Performance eval:
104ms, faster than ~15%,
40.6MB, better than ~76%
*/