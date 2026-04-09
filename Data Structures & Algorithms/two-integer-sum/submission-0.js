class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const a = new Map();

        for(let i = 0; i < nums.length; i++) {
            if(a.has(target - nums[i])) {
                return [a.get(target - nums[i]), i];
            }

            a.set(nums[i], i);
        }

        return [-1];
    }
}
