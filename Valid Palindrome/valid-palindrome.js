/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) => {
    const string = s.toLowerCase().split('').filter(c => {
        return c.match(/[A-Za-z0-9]/g)
    })
    return string.join('') === string.reverse().join('') ? true : false
};

// Example #1
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Example #2
console.log(isPalindrome("race a car"));