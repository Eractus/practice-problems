var divide = function(dividend, divisor) {
    let negAns = false;
    if (dividend < 0) {
        negAns = !negAns;
        dividend = changeSign(dividend);
    }
    if (divisor < 0) {
        negAns = !negAns;
        divisor = changeSign(divisor);
    }

    if (dividend < divisor) {
        return 0;
    }

    let ans = 0
    if (divisor === 1) {
        ans = dividend;
    } else {
        while (dividend >= divisor) {
            dividend = dividend - divisor;
            ans += 1;
        }
    }

    if (negAns) {
        ans = changeSign(ans);
    }

    let max = (2**31) - 1;
    let min = (-2)**31;

    if (ans > max) {
        ans = max
    } else if (ans < min) {
        ans = min;
    }

    return ans;
};

var changeSign = function(int) {
    int = int.toString();
    if (int[0] === "-") {
        int = int.slice(1);
    } else {
        int = "-"+int;
    }
    int = parseInt(int);
    return int;
}
