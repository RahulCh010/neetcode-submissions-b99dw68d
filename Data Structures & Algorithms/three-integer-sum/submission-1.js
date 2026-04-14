class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for(let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let j = i + 1, k = nums.length - 1;

            while(j < k) {
                const target = nums[j] + nums[k];
                if(target  + nums[i] > 0) {
                    k--;
                } else if(target + nums[i] < 0){
                    j++;
                } else {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                }
            }
        }

        return res;
    }
}
