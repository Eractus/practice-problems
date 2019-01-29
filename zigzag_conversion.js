var convert = function(s, numRows) {
    if (s.length <= numRows || numRows === 1) {
        return s;
    }
    let map = {};
    let dir = false;
    for (let i=0; i<s.length; i++) {
        if (i < numRows) {
            map[i] = s[i];
        } else {
            let row = i % (numRows - 1);
            if (row === 0) {
                if (dir === true) {
                    map[numRows - 1] += s[i];
                } else if (dir === false) {
                    map[0] += s[i];
                }
                dir = !dir;
            } else {
                if (dir) {
                    map[row] += s[i];
                } else {
                    map[numRows - 1 - row] += s[i];
                }
            }
        }
    }

    let ans = "";
    for (let i=0; i<s.length; i++) {
        if (map[i]) {
            ans += map[i];
        } else {
            break;
        }
    }

    return ans;
};
