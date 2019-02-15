var romanToInt = function(s) {
    let roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let ans = 0;
    for (let i=0; i<s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        if (current && roman[current] < roman[next]) {
            let val = roman[next] - roman[current];
            ans += val;
            i++;
        } else {
            ans += roman[current];
        }
    }

    return ans;
};
