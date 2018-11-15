var isPalindrome = function(x) {
    let str = x.toString();
    let idx = 0;

    for (let i = str.length - 1; i >= 0 ; i--) {
        if (str[i] !== str[idx]) {
            return false;
        } else if (idx > i) {
            break;
        } else {
            idx += 1;
        }
    }

    return true;
};
