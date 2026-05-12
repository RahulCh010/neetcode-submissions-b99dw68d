class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = new Map();

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(numsMap.has(diff)) {
                return [i, numsMap.get(diff)];
            }

            numsMap.set(nums[i], i);
        }

        return [];
    }
}
