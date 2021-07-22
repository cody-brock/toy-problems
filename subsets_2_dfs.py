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

class SecondSolution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        self.dfs(sorted(nums), [], res)
        return res
        
        
    def dfs(self, nums, path, res):
        res.append(path)
        
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            self.dfs(nums[i+1:], path+[nums[i]], res)