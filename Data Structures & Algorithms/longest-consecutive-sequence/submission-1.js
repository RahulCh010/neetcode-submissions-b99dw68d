class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const uniqNums = new Set(nums);
       let max = 0;

        for(let i = 0; i < nums.length; i++) {
            let cur = nums[i], count = 0;
            while(uniqNums.has(cur)) {
                cur++;
                count++;
            }

            max = Math.max(max, count);
        }
        
        return max;
    }
}
