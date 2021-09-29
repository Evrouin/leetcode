/**
 * @param {number[]} nums
 * @return {number[]}
 */

const getConcatenation = (nums) => {
    return nums.concat(nums)
};

// Example #1
console.log(getConcatenation([1, 2, 1]));

// Example #2
console.log(getConcatenation([1, 3, 2, 1]));