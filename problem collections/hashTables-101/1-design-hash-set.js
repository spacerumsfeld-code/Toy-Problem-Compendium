// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)

// Constraints:
// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.

class MyHashSet {
  constructor () {
    this.set = [];
  }

  add (key) {
    if (this.set.includes(key)) return;
    this.set.push(key);
  }

  remove (key) {
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) {
        this.set.splice(i, 1);
        return;
      }
    }
  }

  contains (key) {
    if (this.set.includes(key)) return true;
    return false;
  }
};

/* Performance eval:
284ms, faster than ~42%,
46.5MB, better than ~77%
*/

/* Note:
This problem is at the beginning of the collection and is an EASY problem. Obviously,
the solution is nowhere near optimal. But I believe the problem is conveying the basics
of what is supposed to happen under the hood; otherwise, it would be a MEDIUM or HARD
problem. Therefore, though not optimal, the solution is sufficient for the specified effort
expected (as indicated by the problem being marked EASY).
*/