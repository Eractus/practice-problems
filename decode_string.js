var decodeString = function(s) {
    let stack = [];
    for (let i=0; i < s.length; i++) {
        if (s[i] !== "]") {
            stack.push(s[i]);
        } else {
            let temp = "";
            let factor = "";
            let dup = stack.slice().reverse();
            for (let j=0; j < dup.length; j++) {
                if (Number.isInteger(parseInt(dup[j]))) {
                    for (let m=j; m < dup.length; m++) {
                        if (Number.isInteger(parseInt(dup[m]))) {
                            let x = factor;
                            let y = dup[m] + x;
                            factor = y;
                            stack.pop();
                        } else {
                            break;
                        }
                    }
                    break;
                } else if (dup[j] !== "[") {
                    let x = temp;
                    let y = dup[j] + x;
                    temp = y;
                    stack.pop();
                } else {
                    stack.pop();
                }
            }
            let stringToAdd = "";
            for (let k=1; k <= parseInt(factor); k++) {
                stringToAdd += temp;
            }
            stack.push(stringToAdd);
        }
    }

    let ans = "";
    for (let l=0; l < stack.length; l++) {
        ans += stack[l];
    }

    return ans;
};
