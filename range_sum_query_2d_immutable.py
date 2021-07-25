# First solution.  Brute force.  Correct, but times out.
class NumMatrixFirstAttempt(object):

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


class NumMatrixImproved(object):

    def __init__(self, matrix):
        """
        :type matrix: List[List[int]]
        """
        
        y_len = len(matrix) + 1
        x_len = len(matrix[0]) + 1
        
        data = []
        for y in range(y_len):
            data.append([])
            for x in range(x_len):
                data[y].append(0)
        
        self.data = data
        
        for y in range(1,y_len):
            for x in range(1,x_len):
                self.data[y][x] = matrix[y-1][x-1] + self.data[y-1][x] + self.data[y][x-1] - self.data[y-1][x-1]
        
        # print(self.data)

    def sumRegion(self, row1, col1, row2, col2):
        """
        :type row1: int
        :type col1: int
        :type row2: int
        :type col2: int
        :rtype: int
        """
        
        return self.data[row2+1][col2+1] - self.data[row2+1][col1] - self.data[row1][col2+1] + self.data[row1][col1]