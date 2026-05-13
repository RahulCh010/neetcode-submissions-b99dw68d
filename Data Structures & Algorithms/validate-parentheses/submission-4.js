class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openToClose = {
            "]": "[",
            "}": "{",
            ")": "("
        }

        const stack = [];

        for(const c of s) {
            const top = stack.length;
            if(openToClose[c]) {
                if(top > 0 && stack[top - 1] ===  openToClose[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
