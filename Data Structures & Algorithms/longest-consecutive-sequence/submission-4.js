class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedSet = [...new Set(nums.sort((a, b) => a - b))];
        let seq = 1, max = -1;
        for(let i = 0; i < sortedSet.length; i++) {
            if(sortedSet[i] + 1 === sortedSet[i + 1]) {
                seq++;
            } else {
                if(max < seq) {
                    max = seq;
                }

                seq = 1
            }
        }

        return max === -1 ? 0 : max;
    }
}
