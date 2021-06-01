// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2

let reverse = 0;
const limit = 2147483648;
while(x != 0) {
    reverse = reverse * 10 + x % 10;
    x = parseInt(x/10);
}
if(reverse < -limit || reverse > limit) {
    return 0
}
return reverse