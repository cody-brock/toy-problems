/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  */


// =======================================================================================
// Solution 1: Without using additional data structures

// Looks through a tree, returning boolean depending on if target is found
const searchTree = function(root, target) {
  if (root === null) return false;
  if (root === target) return true;
  return searchTree(root.left, target) || searchTree(root.right, target)
}

// Determines if p and q are on the same side of root.  If so, continues further down that side of tree.
// Once p and q are on different sides from the root, we can return that root since we have found the lowest common ancestor.
const helper = function(root, p, q) {
  
  if (root === null) return null;
  if (root === p || root === q) return root;
  
  let pOnLeft = searchTree(root.left, p);
  let qOnLeft = searchTree(root.left, q);
  
  if (pOnLeft !== qOnLeft) return root;
  
  let nextRoot = pOnLeft ? root.left : root.right;
  return helper(nextRoot, p, q);
  
}

// Checks a couple edge cases, then returns result
const lowestCommonAncestor = function(root, p, q) {

  if (root === null || p === null || q === null) return null;
  else return helper(root,p,q);
  
};