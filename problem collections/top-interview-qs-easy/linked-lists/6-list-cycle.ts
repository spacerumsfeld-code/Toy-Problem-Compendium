// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

//extra memory solution 1
var hasCycle1 = function(head: ListNode): boolean {
  let nodes: ListNode[] = [];
  let current: ListNode = head;

  while (current) {
    if (nodes.includes(current)) return true;
    nodes.push(current);
    current = current.next;
  }
  return false;
};

/* Performance
184 ms, faster than .... off the charts slow
41.3 MB, better than 34%
*/

//extra memory solution 2 (swapped an array for a set, as set.has() is constant lookup vs array.includes linear time)
var hasCycle2 = function(head: ListNode): boolean {
  let nodes: Set<ListNode> = new Set();
  let current: ListNode = head;

  while (current) {
    if (nodes.has(current)) return true;
    nodes.add(current);
    current = current.next;
  }
  return false;
};

/* Performance
92ms, faster than 38%
42.1MB, better than 12%

Constant space solution */
var hasCycle3 = function(head: ListNode): boolean {
    let r1 = head, r2 = head;
    while (r1 && r1.next) {
        r1 = r1.next.next;
        r2 = r2.next;
        if (r1 == r2) {
            return true;
        }
    }
    return false;
};

/*Performance
88 ms, faster than 66%
40.5 MB, better than 97%
*/
