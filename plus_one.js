/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carryOver = false;
    for (let i=digits.length - 1; i >= 0; i--) {
        carryOver = false;
        if (digits[i] === 9) {
            digits[i] = 0;
            carryOver = true;
        } else {
            digits[i] += 1;
            break;
        }

        if (i === 0 && carryOver) {
            digits.unshift(1);
            break;
        }
    }

    return digits;
};
