/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    for (let i=0; i<nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }

    let uniqInts = Object.keys(hash);
    let freqs = [];
    let pairArr = [];
    uniqInts.forEach(int => {
        let temp = hash[int];
        freqs.push(temp);
        pairArr.push([int, temp]);
    });

    let descFreqs = freqs.sort((a, b) => b - a);
    let currFreq = 0;
    let arr = [];
    while (arr.length < k) {
        for (let i=0; i<pairArr.length; i++) {
            if (pairArr[i][1] === descFreqs[currFreq] && !arr.includes(pairArr[i][0])) {
                arr.push(pairArr[i][0]);
                currFreq += 1;
                break;
            }
        }
    }

    return arr;

    // console.log(uniqInts);
    // let tempFreq;
    // let arr = [];
    // uniqInts.forEach(int => {
    //     if (!tempFreq) {
    //         arr.push(int);
    //         tempFreq = int
    //     } else {
    //         if (hash[tempFreq] >= hash[int]) {
    //             arr.push(int);
    //             tempFreq = int
    //         } else {
    //             arr.unshift(int);
    //             tempFreq = int
    //         }
    //     }
    // });
    // console.log(arr);

    // let ans = arr.slice(0, k);
    // return ans;
};
