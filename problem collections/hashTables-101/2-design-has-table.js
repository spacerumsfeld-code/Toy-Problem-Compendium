// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

// Example 1:

// Input
// ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
// [null, null, null, 1, -1, null, 1, null, -1]

// Explanation
// MyHashMap myHashMap = new MyHashMap();
// myHashMap.put(1, 1); // The map is now [[1,1]]
// myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
// myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
// myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

// Constraints:
// 0 <= key, value <= 106
// At most 104 calls will be made to put, get, and remove.

/**
 * Initialize your data structure here.
 */

//note: this is an extremely rudimentary operation that does not address the common topics of collisions nor buckets. The below answer is a better approach to addressing these fundamental concepts of any hash table
 class MyHashMap {
  constructor () {
    this.storage = new Array(1_000_001)
  }

  put (key, value) {
    this.storage[key] = value;
  }

  get (key) {
    return this.storage[key] === undefined ? -1 : this.storage[key];

  }

  remove (key) {
    this.storage[key] = undefined;
  }
};

/* Performance:
abysmal (better than 8%, off the charts slow for memory use);
*/

//two array approach for constant time lookup (still does not avoid collision; each k-v pair always has its own spot
class MyHashMap2 {
  constructor () {
    this.keys = [];
    this.values = [];
  }

  put (key, value) {
    if (this.key[key] === undefined) {
      this.values.push(value);
      this.key[key] = this.values.length - 1;
    }
  }

  get (key) {
    return this.values[this.keys[key]] === undefined ? -1 : this.values[this.keys[key]];
  }

  remove (key) {
    if (this.keys[key] !== undefined) {
      this.values[this.key[key]] = undefined
      this.keys[key] = undefined;
    }
  }
}

/* Performance eval:
220ms, faster than ~42%
48.2MB, faster than ~74%
*/

class MyHashmap3 {
  constructor () {
    this.storage = Array.from({length: 1000}, el => []);
  }

  _hash (key) {
    return key % 1000;
  }

  put (key, value) {
    let index = this._hash(key);
    let bucket = this.storage[index];
    let update = false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i] = [key, value];
        update = true;
        return;
      }
    }
    if (!update) bucket.push([key, value]);
  }

  get (key) {
    let index = this._hash(key);
    let bucket = this.storage[index];

    for (const [k , v] of bucket) {
      if (key === k) return v;
    }
    return -1;
  }

  remove (key) {
    let index = this._hash(key);
    let bucket = this.storage[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}

/* Performance eval:
360ms, faster than ~16%,
48.7MB, better than ~42%
*/