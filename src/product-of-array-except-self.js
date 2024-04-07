'use strict'

// Question

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // brute force:
    let product = 1;
    let countOfZero = 0;
    for (const num of nums) {
        if (num === 0) {
            countOfZero++;
        } else {
            product = product * num;
        }
    }

    if (countOfZero > 1) return Array(nums.length).fill(0);
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (countOfZero === 1) {
            const element = nums[i] === 0 ? product : 0;
                answer.push(element);
        } else {
            answer.push(product / nums[i]);
        }
    }
    return answer;

    // pointer:

};