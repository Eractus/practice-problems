var findMaxLength = function(nums) {
//     let ans = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let zeros = 0;
//         let ones = 0;
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] === 0) {
//                 zeros += 1
//             } else {
//                 ones += 1
//             }
//             if (zeros === ones) {
//                 let temp = zeros + ones;
//                 if (temp > ans) {
//                     ans = temp;
//                 }
//             }
//         }
//     }

//     return ans;
    let counter = 0;
    let hash = { 0: -1 };
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            counter -= 1;
        } else {
            counter += 1;
        }

        if (hash[counter] === undefined) {
            hash[counter] = i;
        } else {
            let localMax = i - hash[counter];
            if (localMax > maxLength) {
                maxLength = localMax;
            }
        }
    }

    return maxLength;
};
