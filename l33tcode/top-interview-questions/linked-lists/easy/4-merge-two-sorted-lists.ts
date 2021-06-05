// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

var mergeTwoLists = function(l1: ListNode, l2: ListNode): ListNode {
  if (!l1 && !l2) return null;
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;

  let newListHead: ListNode;
  let newListCurrent: ListNode;

  if (l1.val <= l2.val) {
      newListHead = l1;
      newListCurrent = l1;
      l1 = l1.next;
  } else {
      newListHead = l2;
      newListCurrent = l2;
      l2 = l2.next;
  }

  while (l1 && l2) {
      if (l1.val <= l2.val) {
          newListCurrent.next = l1;
          newListCurrent = l1;
          l1 = l1.next;
      } else {
          newListCurrent.next = l2;
          newListCurrent = l2;
          l2 = l2.next;
      }
  }

  while (l1) {
      newListCurrent.next = l1;
      newListCurrent = l1;
      l1 = l1.next;
  }

  while (l2) {
      newListCurrent.next = l2;
      newListCurrent = l2;
      l2 = l2.next;
  }
  return newListHead;
};

// Performance
// Runtime: 84 ms, faster than 92% of JavaScript online submissions for Merge Two Sorted Lists.

// Memory Usage: 40.5 MB, less than 29% of JavaScript online submissions for Merge Two Sorted Lists.