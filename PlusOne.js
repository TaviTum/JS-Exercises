/*
Given a non-empty array of digits representing a non-negative integer. Add one to the integer.
The digits are stored such that the most significant digit is at the head of the list, 
and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

let plusOne = digits => {
    for(i=digits.length - 1; i >= 0; i--) {
        if(digits[i] != 9) {
            digits[i] += 1;
            break;
        } else {
            digits[i] = 0;
            if(i == 0) {
                digits.unshift(1);
            } 
        }
    }
    return digits;
};

