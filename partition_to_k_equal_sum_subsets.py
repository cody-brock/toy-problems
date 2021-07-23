class First_Solution(object):
    
    def canPartitionKSubsets(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        
        # If nums cannot be evenly divided by k, then return False
        if sum(nums) % k != 0:
            return False
        target = sum(nums) / k
        if max(nums) > target:
            return False
        
        
        visited = [False] * len(nums)
        
        print(target)
        
        
        def dfs(k, index, curr_sum):
            if k == 0:
                return True
            if curr_sum == target:
                return dfs(k-1, 0, 0)
            
            for i in range(index, len(nums)):
                if curr_sum + nums[i] <= target and not visited[i]:
                    visited[i] = True
                    if dfs(k, i+1, curr_sum + nums[i]):
                        return True
                    visited[i] = False
            
            return False
        
        return dfs(k, 0, 0)

class Second_Solution(object):
    
    def canPartitionKSubsets(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        
        # If nums cannot be evenly divided by k, or if a number is too high, then return False
        target, remainder = divmod(sum(nums), k)
        if remainder or max(nums) > target:
            return False
        
        dict = {}
        
        for i in range(len(nums)):
            print(i)
            dict[i] = {
                "visited": False,
                "value": nums[i]
            }
        
        
        def dfs(k, index, curr_sum):
            if k == 0:
                return True
            if curr_sum == target:
                return dfs(k-1, 0, 0)
            
            for i in range(index, len(nums)):
                if curr_sum + dict[i]["value"] <= target and not dict[i]["visited"]:
                    dict[i]["visited"] = True
                    if dfs(k, i+1, curr_sum + dict[i]["value"]):
                        return True
                    dict[i]["visited"] = False
            
            return False
        
        return dfs(k, 0, 0)