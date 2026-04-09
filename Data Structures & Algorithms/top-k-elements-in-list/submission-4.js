class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsFreq = {};
        for(const num of nums) {
            numsFreq[num] = (numsFreq[num] || 0) + 1;
        }

        const bucket = Array.from({ length: nums.length + 1}, () =>[]);
        for(const [key, val] of Object.entries(numsFreq)) {
            bucket[val].push(Number(key));
        }

        const result = [];
        for(let i = bucket.length - 1; i > 0; i--){
            for(const item of bucket[i]) {
                result.push(item);
                k--;
                
                if(k === 0) {
                    return result;
                }
            }
        }
    }
}
