class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0]
        for(let i = 0; i < nums.length; i++) {
            let sum = 0;
            for(let j = i; j < nums.length; j++) {
                sum += nums[j];

                if(sum > maxSum) {
                    maxSum = sum;
                }
            }
        }

        return maxSum;
    }
}
