/*
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.
*/

// straightforward solution
const findPeakElement = function(nums) {
    if(nums.length === 1 || nums[0] > nums[1]) {
        return 0;
    }
    
    if(nums[nums.length-1] > nums[nums.length-2]) {
        return nums.length-1;
    }
    
    for(i=1; i<nums.length-1; i++) {
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
            return i;
        }
    }
};

// using closure
const findPeakElementUsingClosure = function(nums) {
    const getElementByIndex = function(index) {        
        if(index < 0 || index >= nums.length) {
            return -Infinity;
        }
        return nums[index];
    }
    
    for(let i=0; i<nums.length; i++) {
        const 
            curr = getElementByIndex(i),
            prev = getElementByIndex(i-1),
            next = getElementByIndex(i+1);
        
        if(curr > prev && curr > next) {
            return i;
        }
    }
};

