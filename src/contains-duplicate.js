'use strict'

// Question

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // convert to Set
    const numsSet = new Set(nums);
    return nums.length != numsSet.size;

    // 
};
