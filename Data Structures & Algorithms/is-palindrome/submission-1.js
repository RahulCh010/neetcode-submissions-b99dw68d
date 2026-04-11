class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        console.log(lowerS);
        let i = 0, j = lowerS.length - 1;
        while(i < j) {
            if(lowerS[i] !== lowerS[j]) {
                return false;
            }
            i++;
            j--;
        } 

        return true;
    }
}
