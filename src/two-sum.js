'use strict'

// Question:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // brute force:
    // const numsLength = nums.length; 
    // for(let i = 0; i < numsLength; i++) {
    //     for (let l = i + 1; l < numsLength; l++) {
    //         if (nums[i] + nums[l] === target) return [i, l]; 
    //     }
    // }

    // map
    const opposite = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (opposite.has(complement)) {
            return [opposite.get(complement), i];
        } else {
            opposite.set(nums[i], i);
        }
    }
    return []
};