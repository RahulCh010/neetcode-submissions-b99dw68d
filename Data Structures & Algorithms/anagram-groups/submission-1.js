class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ma = new Map();
        for(let i = 0; i < strs.length; i++) {
            const charCount = new Array(26).fill(0);
            for(const c of strs[i]) {
                charCount[c.charCodeAt(0) - 97]++;
            }
            
            const charStr = charCount.toString();

            if(!ma.has(charStr)) {
                ma.set(charStr, []);
            }

            ma.get(charStr).push(strs[i]);
        }
        
        return Array.from(ma.values());
    }
}
