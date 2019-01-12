/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //if input is empty or single char string
    if (s.length <= 1) {
        return s;
    }

    //if input has only one unique char
    let uniqCheck = s.split("").filter(n => n!== s[0]);
    if (uniqCheck.length === 0) {
        return s;
    }

    let col = [];
    //edge case: if the first two chars only are the same, set col to them
    if (s[0] === s[1]) {
        col = [s[0], s[1]];
    }
    for (let i=1; i<s.length-1; i++) {
        let bef = i - 1;
        let aft = i + 1;
        if (s[bef] === s[aft]) {
            let arr = [s[i]];
            let oddBef = bef;
            let oddAft = aft;
            while (s[oddBef] === s[oddAft] && s[oddBef] && s[oddAft]) {
                arr.unshift(s[oddBef]);
                arr.push(s[oddAft]);
                oddBef = oddBef - 1;
                oddAft = oddAft + 1;
            }
            if (arr.length >= col.length) {
                col = arr;
            }
        }
        if (s[i] === s[aft]) {
            let arr = [s[i], s[aft]];
            let evenBef = bef;
            let evenAft = aft + 1;
            while (s[evenBef] === s[evenAft] && s[evenBef] && s[evenAft]) {
                arr.unshift(s[evenBef]);
                arr.push(s[evenAft]);
                evenBef = evenBef - 1;
                evenAft = evenAft + 1;
            }
            if (arr.length >= col.length) {
                col = arr;
            }
        }
        //if the col array's length is ever the same as the input's length, the input string is a palindrome and the longest possible one so break the for loop         
        if (col.length === s.length) {
            break;
        }
    }

    let ans;
    //if there were all unique characters in the string, return the first character in the string
    if (col.length === 0) {
        ans = s[0];
    } else {
        ans = col.join("");
    }

    return ans;
};
