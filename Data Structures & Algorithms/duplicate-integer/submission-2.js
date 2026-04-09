class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsMap = new Map();

        for(const num of nums) {
            if(numsMap.has(num)) {
                return true;
            }

            numsMap.set(num, num);
        }

        return false;
    }
}
