class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const ac = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            ac[s[i].charCodeAt(0) - 97]++;
            ac[t[i].charCodeAt(0) - 97]--;
        }

        return ac.every(num => num === 0);
    }
}
