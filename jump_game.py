# You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

# Return true if you can reach the last index, or false otherwise.

 

# Example 1:

# Input: nums = [2,3,1,1,4]
# Output: true
# Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
# Example 2:

# Input: nums = [3,2,1,0,4]
# Output: false
# Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


# First "Solution" - fails on timeout.  Wayyy inefficient.
class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        
        target = len(nums) - 1
        
        def helper(i):
            
            # Success case - when we are at the last index of list
            if i == target:
                return True
            
            # Fail cases - 0 goes nowhere, and exceeding list length is failure
            if i > target:
                return False
            if nums[i] == 0:
                return False
            
            # For the number we're on, jump all possible lengths
            for num_jump in range(1,nums[i]+1):

                if helper(i+num_jump):
                    return True
        
        return helper(0)