var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }

    let ans = -1;

    for (let i=0; i<haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let remainingLength = haystack.length - i + 1;
            if (remainingLength >= needle.length) {
                let possNeedle = haystack.substring(i, i+needle.length);
                if (possNeedle === needle) {
                    ans = i;
                    break;
                }
            }
            // let j = i;
            // let k = 0;
            // while (haystack[j] === needle[k]) {
            //     j += 1;
            //     k += 1;
            //     if (needle[k] === undefined) {
            //         ans = i;
            //         break;
            //     }
            // }
        }

        // if (ans !== undefined) {
        //     break;
        // }
    }

    // if (ans === undefined) {
    //     ans = -1;
    // }

    return ans;
};
