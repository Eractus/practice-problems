var myAtoi = function(str) {
    if (str.length === 0) {
        return 0;
    }

    let ans = "";
    let foundNonSpace = false;
    let beganCollecting = false;
    let integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (str.length === 1 && !integers.includes(parseInt(str))) {
        return 0;
    }

    for (let i=0; i<str.length; i++) {
        if (!foundNonSpace) {
            if (str[i] === " ") {
                continue;
            } else {
                foundNonSpace = true;
            }
        }

        if (foundNonSpace) {
            let curr = parseInt(str[i]);
            if (!beganCollecting) {
                if (str[i] === "-" || str[i] === "+" || integers.includes(curr)) {
                    ans += str[i];
                    beganCollecting = true;
                } else {
                    ans = 0;
                    break;
                }
            } else {
                if (integers.includes(curr)) {
                    ans += str[i];
                } else {
                    break;
                }
            }
        }
    }

    if (ans.length === 0) {
        return 0;
    }

    if (ans.length === 1 && !integers.includes(parseInt(ans))) {
        return 0;
    }

    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    ans = parseInt(ans);

    if (ans > max) {
        ans = max;
    }
    if (ans < min) {
        ans = min;
    }

    return ans;
};
