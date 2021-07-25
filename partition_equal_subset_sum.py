class Solution_First(object):
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



# Runtime: 92 ms, faster than 97.03% of Python online submissions for Partition Equal Subset Sum.
# Memory Usage: 13.9 MB, less than 74.42% of Python online submissions for Partition Equal Subset Sum.
class Solution_Improved(object):
    def canPartition(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        
        target, remainder = divmod(sum(nums), 2)
        if remainder:
            return False
        # nums = sorted(nums)
        
        def dfs(nums, target, cache):
            
            if target < 0: return False
            if target == 0: return True
            if target in cache: return False
            cache.add(target)
            
            for idx, val in enumerate(nums):
                if dfs(nums[idx+1:], target-val, cache):
                    return True
            return False
        

        return dfs(nums, target, set())