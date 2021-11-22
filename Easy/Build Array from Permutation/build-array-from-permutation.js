/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = (nums) => {
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]]
    }
    return ans
};

// Example #1
console.log(buildArray([0, 2, 1, 5, 3, 4]));

// Example #2
console.log(buildArray([5, 0, 1, 2, 3, 4]));