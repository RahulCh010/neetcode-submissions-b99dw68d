class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let min = prices[0];

        for(const price of prices) {
            if(price < min) {
                min = price;
            }

            profit = Math.max(profit, price - min);
        }

        return profit;
    }
}
