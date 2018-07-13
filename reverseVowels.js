var reverseVowels = function(s) {
    const vowels = ["a", "e", "i", "o", "u"];
    let v = [];
    let letters = s.split("");
    for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i].toLowerCase())) {
            v.unshift(letters[i]);
            }
    }
    let ans = "";
    for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i].toLowerCase())) {
            ans = ans.concat(v[0]);
            v.splice(0,1);
        } else {
            ans = ans.concat(letters[i]);
        }
    }
    return ans;
};
