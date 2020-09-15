// 226. Invert Binary Tree
// Invert a binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeRecursive = function(r) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

var invertTreeRecursiveHelper = function(root) {
  if (!root) return null;
  
  const helper = function(node) {
      [node.left, node.right] = [node.right, node.left];
      
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      
      return node
  }
  
  return helper(root);
  
};

var invertTreeDFS = function(root) {
  if (!root) return null;
  
  const stack = [root];
  
  while(stack.length) {
      const node = stack.pop();
      if (node !== null) {
          [node.left, node.right] = [node.right, node.left];
          stack.push(node.left, node.right);
      }
  }
  
  return root;
  
};


var invertTreeBFS = function(root) {
  if (!root) return null;
  
  const queue = [root];
  
  while(queue.length) {
      const node = queue.shift();
      if (node !== null) {
          [node.left, node.right] = [node.right, node.left];
          queue.push(node.left, node.right);
      }
  }
  
  return root;
  
};