var minMoves = function(nums) {
    // let n = nums.length;
    // let temp = nums.sort();
    // let equal = false;
    // let ans = 0;
    //
    // while (!equal) {
    //     if (temp.every((integer) => integer === temp[0])) {
    //         equal = true;
    //     } else {
    //         let col = [];
    //         for (let i=0; i < n-1; i++) {
    //             col.push(temp[i] + 1);
    //         }
    //         col.push(temp[n-1]);
    //         ans += 1;
    //         temp = col.sort();
    //     }
    // }
    //
    //
    // return ans;

    // let n = nums.length;
    // let min = nums.sort()[0];
    // let sum = nums.reduce((a, b) => a + b, 0)
    // return Math.abs(sum - min*n);

    let min = nums.reduce((el, acc) => { return el < acc ? el : acc }, nums[0])
    return nums.reduce((el, acc) => { return acc + (el - min)}, 0);
};
