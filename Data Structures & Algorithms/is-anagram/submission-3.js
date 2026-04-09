class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const freq = new Array(26).fill(0);

        for(const i in s) {
            freq[s.charCodeAt(i) - 97]++;
            freq[t.charCodeAt(i) - 97]--;
        }

        return freq.every(item => item === 0);
    }
}
