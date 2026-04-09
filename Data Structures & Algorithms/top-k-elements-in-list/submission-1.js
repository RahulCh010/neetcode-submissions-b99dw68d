class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const ma = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        
        for(const num of nums) {
            ma[num] = (ma[num] || 0) + 1;
        }
       
        for(const key in ma) {
            console.log(ma[key], key)
            freq[ma[key]].push(parseInt(key));
        }

        let ans = []
        for(let i = freq.length - 1; i > 0; i--) {
            for(let j = 0; j < freq[i].length; j++) {
                ans.push(freq[i][j]);
                if(ans.length === k) {
                    return ans;
                }
            }
        }
    }
}
