class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphaStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let i = 0, j = alphaStr.length - 1;
        while(i < j) {
            if(alphaStr[i] !== alphaStr[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
