class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strsMap = new Map();
        for(const str of strs) {
            const freq = new Array(26).fill(0);
            for(let i = 0; i < str.length; i++) {
                freq[str.charCodeAt(i) - 97]++;
            }

            if(strsMap.has(freq.toString())) {
                strsMap.get(freq.toString()).push(str);
            } else {
                strsMap.set(freq.toString(), [str]);
            }
        }

        return Array.from(strsMap.values());
    }
}
