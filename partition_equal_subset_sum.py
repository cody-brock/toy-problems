class Solution(object):
    def canPartition(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        
        target, remainder = divmod(sum(nums), 2)
        if remainder:
            return False
        nums = sorted(nums)
        
        def dfs(remaining, index):
            
            if remaining < nums[index] or index >= len(nums)-1:
                return False
            if remaining == nums[index]:
                return True
            
            if dfs(remaining-nums[index], index+1) or dfs(remaining, index+1):
                return True
                
            
        
        return dfs(target, 0)