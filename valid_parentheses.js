var isValid = function(s) {
    let col = [];
    let ans = true;

    for (let i=0; i<s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            col.push(s[i]);
        } else {
            let temp = col[col.length - 1];
            if (s[i] === ")" && temp === "(") {
                col.pop();
            } else if (s[i] === "]" && temp === "[") {
                col.pop();
            } else if (s[i] === "}" && temp === "{") {
                col.pop();
            } else {
                ans = false;
                break;
            }
        }
    }

    if (col.length !== 0) {
        ans = false;
    }


    return ans;
};
