class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsMap = new Map();

        for(const num of nums) {
            if(numsMap.has(num)) {
                return true;
            }

            numsMap.set(num, 1);
        }

        return false;
    }
}
