class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""

        for(const str of strs) {
            res += str.length + "#" + str
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [], i = 0;

        while(i < str.length) {
            let curLen = "";
            while(str[i] !== "#") {
                curLen += str[i];
                i++;
            }

            let subLen = i + 1 + parseInt(curLen);
            
            res.push(str.substring(i + 1, subLen));
            i = subLen;
        }

        return res;
    }
}
