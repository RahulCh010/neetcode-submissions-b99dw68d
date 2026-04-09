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
            freq[s[i].charCodeAt(0) - 97]++;
            freq[t[i].charCodeAt(0) - 97]--;
        }

        return freq.every(item => item === 0);
    }
}
