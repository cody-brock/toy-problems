class Solution(object):
    def isPalindrome(self, s):
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