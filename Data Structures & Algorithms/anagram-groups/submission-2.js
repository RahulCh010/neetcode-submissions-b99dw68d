class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for(let i = 0; i < strs.length; i++) {
            const wordsArr = new Array(26).fill(0);
            for(const char of strs[i]) {
                wordsArr[char.charCodeAt(0) - 97]++;
            }

            if(!result[wordsArr.toString()]) {
                result[wordsArr.toString()] = [];
            }
            
            result[wordsArr.toString()].push(strs[i]);
        }

        return Object.values(result);
    }
}
