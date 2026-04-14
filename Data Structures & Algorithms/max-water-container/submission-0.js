class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let max = -1;

        while(i < j) {
            const width = j - i;
            const height = Math.min(heights[i], heights[j]);
            max = Math.max(max, width * height);
            if(height === heights[j]) {
                j--;
            } else {
                i++;
            }
        }

        return max;
    }
}
