// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

type TreeNode = {
  val: number,
  left: TreeNode | null,
  right: TreeNode | null
}

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  const traverse = (node: TreeNode | null, depth: number): void => {
    if (!node) return;
    traverse(node.left, depth + 1);
    result[depth] ? result[depth].push(node.val) : result[depth] = [node.val];
    traverse(node.right, depth + 1);
  };

  traverse(root, 0);
  return result;
};

/* Performance
88 ms, faster than 67%
40.4 MB, faster than 85% */