class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charStore = new Map();
        let left = 0;
        let max = 0;

        for(let right = 0; right < s.length; right++) {
            if(charStore.has(s[right]) && charStore.get(s[right]) >= left) {
                left = charStore.get(s[right]) + 1;
            }

            max = Math.max(max, right - left + 1);
            charStore.set(s[right], right);
        }

        return max;
    }
}
