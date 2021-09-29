/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = (nums) => {

    /*
    Bitwise Operator
    1 ^ 1 = 0
    1 ^ 0 = 1
    */

    let result = 0

    for (const num in nums) {
        result ^= nums[num]
    }
    return result
};

// Example #1
console.log(singleNumber([2, 2, 1]));

// Example #2
console.log(singleNumber([4, 1, 2, 1, 2]));
