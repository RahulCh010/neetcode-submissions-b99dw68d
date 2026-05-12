class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const charFreq = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            charFreq[s.charCodeAt(i) - 97]++;
            charFreq[t.charCodeAt(i) - 97]--;
        }

        return charFreq.every(item => item === 0);
    }
}
