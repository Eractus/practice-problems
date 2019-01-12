/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 10 && x > -10) {
        return x;
    }

    let overflow = (Math.pow(2, 31)) - 1;
    let rev = 0;
    let neg;

    if (x < 0) {
        neg = true;
        x = x * -1;
    }

    while (x !== 0) {
        let pop = x % 10;
        x = Math.floor(x / 10);

        if (pop === 0 && !rev) {
            continue;
        }

        rev = rev * 10 + pop;

        if (rev > overflow) {
            return 0;
        }
    }

    if (neg) {
        rev = rev * -1;
    }

    return rev;
};
