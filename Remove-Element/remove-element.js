/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length
};

// Example # 1
console.log(removeElement([3,2,2,3], 3));

// Example # 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
