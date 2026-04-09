class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        return nums.reduce((acc, num) => acc ^ num, 0);
    }
}
