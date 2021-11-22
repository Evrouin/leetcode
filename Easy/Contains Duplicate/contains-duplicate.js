/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
    const n = {}

    for (const num of nums) {
        if (num in n) return true
        n[num] = num
    }

    return false
};

// true
console.log(containsDuplicate([1, 2, 3, 1]));
// false
console.log(containsDuplicate([1, 2, 3, 4]));
// true
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));