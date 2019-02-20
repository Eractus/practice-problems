var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    if (strs.length === 1) {
        return strs[0];
    }

    let sorted = strs.sort((a, b) => b.length - a.length);
    let maxLength = sorted[0].length;

    let ans = "";
    for (let i=0; i<maxLength; i++) {
        let temp;
        let bool = true;
        for (let j=0; j<strs.length; j++) {
            let curr = strs[j];
            if (!temp) {
                temp = curr[i];
            }
            if (curr[i] !== temp) {
                bool = false;
                break;
            }
        }

        if (bool === true) {
            ans += temp;
        } else {
            break;
        }
    }

    return ans;
};
