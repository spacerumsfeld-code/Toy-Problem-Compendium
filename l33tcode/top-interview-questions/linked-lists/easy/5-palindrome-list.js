// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

//naive solution
var isPalindrome = function(head) {
  let values = [];
  let currentNode = head;
  while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
  }

  let reverseValues = values.slice().reverse();

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reverseValues[i]) return false;
  }
  return true;
};

// Performance
// Runtime: 200 ms, faster than 48% of JavaScript online submissions for Merge Two Sorted Lists.

// Memory Usage: 67.5 MB, less than 24% of JavaScript online submissions for Merge Two Sorted Lists.