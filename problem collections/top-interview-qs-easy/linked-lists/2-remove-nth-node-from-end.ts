// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

var removeNthFromEnd = function(head: ListNode, n: number): ListNode {
  let p = head;
  let node = head;

  while(n--){
      p = p.next
  }
  while(p && p.next) {
      p = p.next
      node = node.next
  }

  if(!p)  head = head.next;
  else node.next = node.next.next;

  return head;
};

// Performance
// Runtime: 84 ms, faster than 71% of JavaScript online submissions for Remove Nth Node From End of List.

// Memory Usage: 40.4 MB, less than 33% of JavaScript online submissions for Remove Nth Node From End of List.

