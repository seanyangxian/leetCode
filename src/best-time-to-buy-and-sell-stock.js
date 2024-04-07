'use strict'

// Question:

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // brute force:
    // let maxProfit = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     for (let l = i+1; l < prices.length; l++){
    //         const profit = prices[l] - prices[i];
    //         maxProfit = profit > maxProfit ? profit : maxProfit;
    //     }
    // }
    // return maxProfit;

    // pointer:
    // leftpointer = buy; rightpointer = sell
    // if left < right, profit > 0; update maxProfit (check); move right pointer by 1
    // if left > right, profit < 0; current is the lowest buying point, so buy here, move left pointer to current and right pointer 1 step after. 

    let maxProfit = 0;
    let buy = 0;
    let sell = 1;
    while (sell < prices.length) {
        const profit = prices[sell] - prices[buy];
        // if positive profit
        if (profit > 0) {
            // update max if greater
            if (profit > maxProfit) {
                maxProfit = profit;
            } 
            sell++;
        // if negative profit
        } else {
            // move buy pointer to current
            buy = sell;
            // put sell pointer one position after
            sell++;
        }
    }

    return maxProfit;
};