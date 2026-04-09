class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const ma = {};

        for(const num of nums) {
            if(ma[num]) {
                return true;
            }

            ma[num] = 1;
        }

        return false;
    }
}
