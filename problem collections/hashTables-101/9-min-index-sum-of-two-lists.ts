// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

// Example 3:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 4:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 5:

// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]

// Constraints:
// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the stings of list1 are unique.
// All the stings of list2 are unique.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}


 task: find the minIndexSum of two lists. The minIndex sum is the sum of indexes where items on BOTh lists occurs.

 I: two string[]
 O: string[]: strings in both lists that meet minIndexSum requirement.
    If no item meets minIndexSum lowest requirement, output all items in both strings
 C: both lists length is 1 - 1000 (not necessarily same), all strings in each unique (no duplicates)
    list[i] composed of spaces and English letters, there will ALWAYS be a solution
 E: both strings length of one, since there is always a solution, it must be the first item of string[]1

 brainstorm:
   edge case code: if both length of one, return [list1[0]]
   create intersection map
   create map out of smaller string
     key = string, value = index
   iterate over larger string
     when match found (map contains current string), assign current string as key, current i + stored i in map to intersection map
     we will have created a map of matching strings and their indexSums
   evalute indexSums: first check if there is a unique lowestIndexSum
     sort matchesMap values, if values[0] === values[1] then there is no unique lowest sum, return all matchesMap keys
   otherwise iterate over map and compute lowestIndexSum, return that [string!]
   */

   var findRestaurant = function(list1: string[], list2: string[]): string[] {
    if (list1.length === 1 && list2.length === 1) return list1;
    let smallList: string[];
    let smallListMap = new Map();
    let largeList: string[];
    let matches = new Map();

    if (list1.length <= list2.length) {
      smallList = list1;
      largeList = list2;
    } else {
      smallList = list2;
      largeList = list1;
    }

    for (let i = 0; i < smallList.length; i++) {
      smallListMap.set(smallList[i], i);
    }

    for (let j = 0; j < largeList.length; j++) {
      if (smallListMap.has(largeList[j])) matches.set(largeList[j], smallListMap.get(largeList[j]) + j);
    }

    let sortedMatches = [...matches.values()].sort((a, b) => a - b);
    if (sortedMatches[0] === sortedMatches[1]) return [...matches.keys()];

    let smallestIndexSum = [...matches.values()][0];
    let result = [...matches.keys()][0];

    for (const [k ,v] of matches) {
      if (v < smallestIndexSum) {
        smallestIndexSum = v;
        result = k;
      }
    }
    return [result];
  };

  /* 108ms, faster than ~28%,
  47.2MB, better than ~57%
  */