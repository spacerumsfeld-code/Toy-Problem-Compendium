// Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.

// Implement the TwoSum class:

// TwoSum() Initializes the TwoSum object, with an empty array initially.
// void add(int number) Adds number to the data structure.
// boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.

// Example 1:
// Input
// ["TwoSum", "add", "add", "add", "find", "find"]
// [[], [1], [3], [5], [4], [7]]
// Output
// [null, null, null, null, true, false]

// Explanation
// TwoSum twoSum = new TwoSum();
// twoSum.add(1);   // [] --> [1]
// twoSum.add(3);   // [1] --> [1,3]
// twoSum.add(5);   // [1,3] --> [1,3,5]
// twoSum.find(4);  // 1 + 3 = 4, return true
// twoSum.find(7);  // No two integers sum up to 7, return false

// Constraints:
// -105 <= number <= 105
// -231 <= value <= 231 - 1
// At most 5 * 104 calls will be made to add and find.
class TwoSum {
  constructor () {
   this.map = new Map();
 }

  add (num) {
    if (this.map.has(num)) this.map.set(num, true);
    else this.map.set(num, false);
  }

  find (target) {
    for (const key of this.map.keys()) {
      const diff = target - key;
      if (diff === key && this.map.get(diff)) return true;
      else if (diff !== key && this.map.has(diff)) return true;
    }
    return false;
  }
}

/* Perf eval:
??, better than ?? --My solutuon was 168ms, and the range for this problem is gigantic (up to 8000ms+). The graph doesn't even show where I'm at but given the provided range, it is better than 80-90%
50.6MB, better than ~83%
*/

/* Notes: This is a borrowed solution; I did not think to use a boolean as value in the map to track if there is a duplicate value present. Instead, I thought a bit more literally and wanted to use an array to store values. This solution is far superior as we do not care how many more of a given value there is; we just need to know that there IS another to return a proper solution */