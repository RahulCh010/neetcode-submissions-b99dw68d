class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const ma = {};

        for(const num of nums) {
            ma[num] = (ma[num] || 0) + 1;
        }

        let freq = [];
        for(const key in ma) {
            freq.push([ma[key], parseInt(key)]);
        }

        freq.sort((a, b) => {
            if(a[0] === b[0]) {
                return a[1] - b[1];
            }
            return b[0] - a[0];
        });
        
        let ans = [];
        for(let i = 0; i < k; i++) {
            ans.push(freq[i][1]);
        }

        return ans;
    }
}
