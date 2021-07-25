# First solution.  Brute force.  Correct, but times out.
class NumMatrix(object):

    def __init__(self, matrix):
        """
        :type matrix: List[List[int]]
        """
        
        self.data = matrix
        

    def sumRegion(self, row1, col1, row2, col2):
        """
        :type row1: int
        :type col1: int
        :type row2: int
        :type col2: int
        :rtype: int
        """
        total = 0
        
        for i in range(row1, row2+1):
            for j in range(col1, col2+1):
                total += self.data[i][j]
        
        return total