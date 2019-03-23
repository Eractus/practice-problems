var letterCombinations = function(digits) {
    let phone = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    if (digits.length === 0) {
        return [];
    }

    if (digits.length === 1) {
        return phone[digits];
    }

    let last = digits.slice(digits.length - 1, digits.length);
    digits = digits.slice(0, digits.length - 1);
    let combs = letterCombinations(digits);
    let ans = [];

    combs.forEach(comb => {
        for (let i=0; i<comb.length; i++) {
            let chars = phone[last];
            for (let j=0; j<chars.length; j++) {
                let temp = (comb.concat(chars[j]));
                if (!ans.includes(temp)) {
                    ans.push(temp);
                }
            }
        }
    });

    return ans;
};
