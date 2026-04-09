class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        let result = new Array(len).fill(1);

        let prefix = 1;
        for(let i = 0; i < len; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        for(let i = len - 1; i >=0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;
    }
}
