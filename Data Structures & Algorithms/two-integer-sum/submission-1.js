class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const ma = {};

        for(let i = 0; i < nums.length; i++) {
            if(ma[target - nums[i]]) {
                return [ma[target - nums[i]][1], i]
            }
            ma[nums[i]] = [nums[i], i];
        }
    }
}
