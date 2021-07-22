class FirstSolution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        self.dfs(nums, [], res)
        
        return [list(i) for i in set(map(tuple, res))]
        
        
    def dfs(self, nums, path, res):
        res.append(sorted(path))
        for i in range(len(nums)):
            self.dfs(nums[i+1:], path+[nums[i]], res)