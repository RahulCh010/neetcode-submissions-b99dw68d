class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const sizes = [];
        for(const str of strs){
            sizes.push(str.length);
        }
        let res = "";
        for(const size of sizes) {
            res += size + ",";
        }
        res += "#";
        for(const str of strs) {
            res += str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0, sizes = [], result = [];
        while(str[i] !== "#") {
            let cur = "";
            while(str[i] !== ",") {
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur));
            i++;
        }
        i++;
        for(let size of sizes) {
            result.push(str.substr(i, size));
            i += size;
        }

        return result;
    }
}
