class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const ma = new Map();

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(ma.has(diff)) {
                return [ma.get(diff), i];
            }

            ma.set(nums[i], i);
        }
    }
}
