var generateParenthesis = function(n) {
    let ans = [];

    var backtrack = function(s = '', left = 0, right = 0) {
        if (s.length === 2*n) {
            ans.push(s);
            return;
        }

        if (left < n) {
            backtrack(s.concat("("), left+1, right);
        }
        if (right < left) {
            backtrack(s.concat(")"), left, right+1);
        }
    };

    backtrack();
    return ans;
//     if (n === 0) {
//         return [];
//     }

//     if (n === 1) {
//         return ["()"];
//     }

//     let combs = map;
//     n = n - 1;
//     let parenSets = generateParenthesis(n, combs);
//     let ans = [];

//     parenSets.forEach(parenStr => {
//         for (let i=0; i<parenStr.length; i++) {
//             let temp1 = parenStr.slice(0, i).concat("(").concat(parenStr.slice(i, parenStr.length));
//             for (let j=0; j<temp1.length; j++) {
//                 let temp2 = temp1.slice(0, j).concat(")").concat(temp1.slice(j, temp1.length));
//                 if (validParen(temp2) && combs[temp2] === undefined) {
//                     ans.push(temp2);
//                     combs[temp2] = true
//                 }
//             }
//         }


//     });

//     return ans;
};

// var validParen = function(str) {
//     if (str[0] === ")") {
//         return false;
//     }

//     let col = [];
//     let invalid = false;

//     for (let i=0; i<str.length; i++) {
//         if (str[i] === "(") {
//             col.push(")");
//         } else {
//             if (col.length === 0) {
//                 invalid = true;
//                 break;
//             } else {
//                 col.pop();
//             }
//         }
//     }

//     if (col.length !== 0 || invalid === true) {
//         return false;
//     } else {
//         return true;
//     }
// };
