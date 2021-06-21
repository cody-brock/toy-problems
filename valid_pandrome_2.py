def validPalindrome_naive(self, s):
    """
    :type s: str
    :rtype: bool
    """
    
    # Helper function used to recursively verify palindromes
    def helper(str, left, right, skip_used):
        while left <= right:

            # If we encounter a non-palindromic duo...
            if s[left] != s[right]:

                # If we have already deleted a character, return False
                if skip_used:
                    return False

                # If we have not yet deleted a character, then...
                if not skip_used:
                    
                    # Recursively call function with each pointer adjusted
                    # and having marked skip_used as True
                    if helper(str, left, right-1, True) == True:
                        return True
                    
                    if helper(str, left+1, right, True) == True:
                        return True
                
                    # If neither of the above returned True, we return False
                    return False

            # The letters matched, so we move our pointers closer
            left = left + 1
            right = right - 1
            
            # If our pointers are now touching or crossed, then we have 
            # verified all characters and can return True
            if left >= right:
                return True
    
    return helper(s, 0, len(s)-1, False)