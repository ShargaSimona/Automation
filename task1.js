/* 
write a function that check that word is palindrome, should return bool value;
madam => true
nurse => false
nurses run => true
*/

function checkPalindrome(word) {
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("madam")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}

//_____//
function checkPalindrome(word) {
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("nurse")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}

//_____//
function checkPalindrome(word) {
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("nurses run")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}