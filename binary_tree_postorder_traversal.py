# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# This solution uses recursion with a helper function to traverse
# a binary tree "postorder"
class RecursiveSolutionWithHelper(object):
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        
        res = []
        
        def helper(node):
            if node:
                helper(node.left)
                helper(node.right)
                res.append(node.val)
        
        helper(root)
        
        return res


