/*
Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
*/

const searchInsert = function(nums, target) {
    for(i=0; i<nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length;
};

