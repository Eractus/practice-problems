var intToRoman = function(num) {
    let numStr = num.toString();

    let digits = numStr.length;
    let ans = "";
    for (let i=0; i<numStr.length; i++) {
        if (digits === 4) {
            let current = numStr[i];
            while (current > 0) {
                ans += "M";
                current -= 1;
            }
            digits -= 1;
        } else if (digits === 3) {
            if (numStr[i] === "4") {
                ans += "CD";
            } else if (numStr[i] === "9") {
                ans += "CM";
            } else {
                let toAdd = handleNonFourAndNine(numStr[i], "D", "C");
                ans += toAdd;
            }
            digits -= 1;
        } else if (digits === 2) {
            if (numStr[i] === "4") {
                ans += "XL";
            } else if (numStr[i] === "9") {
                ans += "XC";
            } else {
                let toAdd = handleNonFourAndNine(numStr[i], "L", "X");
                ans += toAdd;
            }
            digits -= 1;
        } else {
            if (numStr[i] === "4") {
                ans += "IV";
            } else if (numStr[i] === "9") {
                ans += "IX";
            } else {
                let toAdd = handleNonFourAndNine(numStr[i], "V", "I");
                ans += toAdd;
            }
        }
    }

    return ans;
};

var handleNonFourAndNine = function(num, five, one) {
    let ans = "";
    while (num > 0) {
        if (num >= 5) {
            ans += five;
            num = num - 5;
        } else {
            ans += one;
            num -= 1;
        }
    }

    return ans;
};
