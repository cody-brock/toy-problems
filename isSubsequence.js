//function that takes in two strings and determines
//if the characters from the first string are found
//in that order (but not necessarily consecutively)
//in the second string.

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence('aba','abacadabra'));
console.log(isSubsequence('fml','fudge is my life'));
console.log(isSubsequence('rtz','really hurts'));

