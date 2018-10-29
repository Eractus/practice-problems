var lengthOfLongestSubstring = function(s) {
//     if (s === "") {
//         return 0;
//     }

//     let ans = 1;

//     for (let i=0; i<s.length; i++) {
//         let str = s[i];
//         for (let j=i+1; j<s.length; j++) {
//             if (str.includes(s[j])) {
//                 let loc_len = str.length;
//                 if (loc_len > ans) {
//                     ans = loc_len;
//                 }
//                 break;
//             } else {
//                 str += s[j];
//                 let loc_len = str.length;
//                 if (loc_len > ans) {
//                     ans = loc_len;
//                 }
//             }
//         }
//     }

//     return ans;
    let ans = 0;
    let set = new Set();
    let i = 0;
    let j =0;

    while (j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            ans = Math.max(ans, j - i + 1);
            j ++;
        } else {
            set.delete(s[i]);
            i ++;
        }
    }

    return ans;
};
