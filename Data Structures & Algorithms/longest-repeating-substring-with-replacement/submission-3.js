class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let left = 0;
        let charStore = {};
        let maxFreq = 0;

        for(let right = 0; right < s.length; right++) {
            charStore[s[right]] = (charStore[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, charStore[s[right]]);

            if((right - left + 1) - maxFreq > k) {
                charStore[s[left]]--;
                left++;
            }

            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
