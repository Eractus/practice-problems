var permuteUnique = function(nums) {
    let hmap = {};
    let ans = [];

    backTrack(nums, []);

    function backTrack(numss, perms) {
        if (numss.length === 0) {
            if (!hmap[perms]) {
                hmap[perms] = true;
                ans.push(perms);
            }
        } else {
            for (let i=0; i<numss.length; i++) {
                let num = numss[i];
                let dup1 = numss.slice(0, i);
                let dup2 = numss.slice(i+1, numss.length);
                let dup = dup1.concat(dup2);
                backTrack(dup, perms.concat(num));
            }
        }
    }

    return ans;
//     const output = [];
// 	const numsLength = nums.length;
//     nums.sort();

//     const recurse = (soFar = [], whatsLeft = nums) => {
//         if (soFar.length === numsLength) {
// 			output.push([...soFar]);
//         } else {
//             for (let i = 0; i < whatsLeft.length; i += 1) {
//                 if (whatsLeft[i] !== whatsLeft[i - 1]) {
//                     soFar.push(whatsLeft.splice(i, 1)[0]);
//                     recurse(soFar, whatsLeft);
//                     whatsLeft.splice(i, 0, soFar.pop());
//                 }
//             }
//         }
//     };

//     recurse();
//     return output;
};
