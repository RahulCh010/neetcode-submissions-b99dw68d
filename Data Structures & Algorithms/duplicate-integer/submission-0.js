class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniq = new Map();

        for(const num of nums) {
            if(uniq.has(num)) {
                return true;
            }

            uniq.set(num, 1);
        }

        return false;
    }
}
