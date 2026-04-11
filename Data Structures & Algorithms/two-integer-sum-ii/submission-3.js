class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1;

        while(i < j) {
            const diff = target - numbers[i] - numbers[j];

            if(diff > 0) {
                i++;
            } else if(diff < 0) {
                j--;
            } else {
                return [i + 1, j + 1];
            }
        }
    }
}
