# Write an algorithm to determine if a number n is happy.

# A happy number is a number defined by the following process:

# Starting with any positive integer, replace the number by the sum of the squares of its digits.
# Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
# Those numbers for which this process ends in 1 are happy.
# Return true if n is a happy number, and false if not.


# Your runtime beats 58.76 % of python submissions.
# Your memory usage beats 66.02 % of python submissions.
class FirstRecursiveSolution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        
        def helper(num, visited):
            s = sum(int(digit)**2 for digit in str(num))
            if s == 1:
                return True
            else:
                if s in visited:
                    return False
                else:
                    visited.add(s)
                    return helper(s, visited)
            
            
        return helper(n, set())