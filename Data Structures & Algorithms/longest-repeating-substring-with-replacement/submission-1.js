class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charCount = {};
        let i = 0;
        let maxFreq = 0;
        let res = 0;

        for(let j = 0; j < s.length; j++) {
            charCount[s[j]] = (charCount[s[j]] || 0) + 1;
            maxFreq = Math.max(maxFreq, charCount[s[j]]);

            while(j - i + 1 - maxFreq > k) {
                charCount[s[i]] -= 1;
                i++;
            }

            res = Math.max(res, j - i + 1);
        }

        return res;
    }
}
