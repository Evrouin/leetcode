/**
 * @param {number[]} nums
 * @return {number[]}
 */


const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1]
    }
    return nums
};

// Example # 1
console.log(runningSum([1, 2, 3, 4]));

// Example # 2
console.log(runningSum([1, 1, 1, 1, 1]));

// Example # 3
console.log(runningSum([3, 1, 2, 10, 1]));