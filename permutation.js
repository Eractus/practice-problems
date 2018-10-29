var permute = function(nums) {
//     if (nums.length === 0) {
//         ans.push(temp);
//     } else {
//         nums.forEach(num => {
//             let arr = nums.filter(n => n !== num);
//             permute(arr, temp.concat([num]), ans)

//         })
//     }

//     return ans;
    if (nums.length <= 1) {
        return [nums];
    }

    let first = nums.shift();
    let perms = permute(nums);
    let ans = [];

    perms.forEach(perm => {
        for (let i=0; i <= perm.length; i++) {
            let temp = perm.slice(0, i).concat([first]).concat(perm.slice(i, perm.length));
            ans.push(temp);
        }
    });


    return ans;
};
