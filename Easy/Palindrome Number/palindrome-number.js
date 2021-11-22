/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
    let r = 0;
    let temp = x
    while (temp > 0) {
        r = (r * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return r === x ? true : false;
};

// true
console.log(isPalindrome(121));
// false
console.log(isPalindrome(-121));
// false
console.log(isPalindrome(10));
// false
console.log(isPalindrome(-101));