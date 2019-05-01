var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b) => a-b);
    let dict = {};
    let ans = [];
    backtrack([], candidates, target);

    return ans;

//     var res = [];
//     var prefix = [];

//     candidates.sort((a, b) => a - b);
//     search(0, target);
//     return res;

//     function search(idx, rest) {
//         if (rest === 0 && idx === candidates.length) {
//             return res.push(prefix.slice());
//         }

//         if (rest < 0 || idx === candidates.length) {
//             return;
//         }

//         // include number at idx
//         prefix.push(candidates[idx]);
//         search(idx + 1, rest - candidates[idx]);

//         // exclude number at idx
//         // eg. [1, 1, 1]
//         // allow
//         // [1, 1, 1]
//         // [X, 1, 1]
//         // [X, X, 1]
//         // [X, X, X]
//         // disallow
//         // [1, 1, X]
//         // [1, X, X]
//         prefix.pop();
//         if (prefix[prefix.length - 1] !== candidates[idx]) {
//             search(idx + 1, rest);
//         }
//     }

    function backtrack(col, cand, targ) {
        if (targ <= 0) {
            if (targ === 0) {
                if (!dict[col]) {
                    dict[col] = true;
                    ans.push(col);
                }
            }
            return;
        }

        for (let i=0; i<cand.length; i++) {
            backtrack(col.concat(cand[i]), cand.slice(i+1), targ - cand[i]);
        }
    }
};
