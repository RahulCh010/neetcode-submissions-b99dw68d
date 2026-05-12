class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let strsMap = new Map();

        for(let str of strs) {
            let freqChar = new Array(26).fill(0);

            for(let i = 0; i < str.length; i++) {
                freqChar[str.charCodeAt(i) - 97]++;
            }

            const key = freqChar.toString();
            if(!strsMap.has(key)) {
                strsMap.set(key, []);
            }

            strsMap.get(key).push(str);
        }

        return Array.from(strsMap.values());
    }
}
