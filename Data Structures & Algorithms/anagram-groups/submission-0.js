class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ma = new Map();
        for(let i = 0; i < strs.length; i++) {
            const sortedWord = strs[i].split("").sort().join("");
            if(!ma.get(sortedWord)) {
                ma.set(sortedWord, []);
            }
             ma.get(sortedWord).push(strs[i]);
        }
        return Array.from(ma.values());
    }
}
