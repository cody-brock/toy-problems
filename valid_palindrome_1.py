# Runtime: 36 ms, faster than 84.70% of Python online submissions for Valid Palindrome.
# Memory Usage: 14.2 MB, less than 77.38% of Python online submissions for Valid Palindrome.

def isPalindrome_improved(self, s):
    """
    :type s: str
    :rtype: bool
    """
    
    def check_palindrome(str):
        
        # Using two pointers
        left = 0
        right = len(str) - 1
        str = str.lower()

        while left <= right:
            
            # Skip non-alphnumeric characters as we go
            while not str[left].isalnum():
                if left + 1 > len(str) - 1:
                    break
                else:
                    left = left + 1
            while not str[right].isalnum():
                if right - 1 < 0:
                    break
                else:
                    right = right - 1
            
            # If the pointers crossed over above, then they must have been
            # both non-alphanumeric characters.  Which apparently
            # are all "palindrome-able" in this problem.
            if left > right:
                return True
            
            # The core check - are the characters the same?
            if str[left] != str[right]:
                return False
            
            left = left + 1
            right = right - 1
        
        return True
    
    
    return check_palindrome(s)


def isPalindrome_naive(self, s):
    """
    :type s: str
    :rtype: bool
    """
    
    def convert_string(str):
        """
        Removes spaces, converts upper to lower case
        """
        new_str = str.lower()
        for char in new_str:
            if not char.isalnum():
                new_str = new_str.replace(char, "")
        return new_str
    
    def check_palindrome(str):
        left = 0
        right = len(str) - 1

        while left <= right:
            if str[left] != str[right]:
                return False
            
            left = left + 1
            right = right - 1
        
        return True
    
    
    converted_str = convert_string(s)
    res = check_palindrome(converted_str)
    return res
