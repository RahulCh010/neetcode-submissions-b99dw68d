class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numsFreq = new Map();

        for(const num of nums) {
            numsFreq.set(num, (numsFreq.get(num) || 0) + 1);
        }

        let bucket = Array.from({ length: nums.length + 1}).map(item => []);
        for(const [key, val] of numsFreq) {
            bucket[val].push(key);
        }

        const res = [];
        for(let i = bucket.length - 1; i > 0; i--) {
            let j = 0;
            while(j < bucket[i].length) {
                res.push(bucket[i][j]);
                k--;
                j++;

                if(k === 0) {
                    return res;
                }
            }
        }
    }
}
