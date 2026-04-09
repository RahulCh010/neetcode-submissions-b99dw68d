class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const uniqNums = new Set(nums);
       let max = 0;

        for(let i = 0; i < nums.length; i++) {
            if(!uniqNums.has(nums[i] - 1)) {
                let length = 0;

                while(uniqNums.has(nums[i] + length)) {
                    length++;
                }

                max = Math.max(max, length);
            }
        }
        
        return max;
    }
}
