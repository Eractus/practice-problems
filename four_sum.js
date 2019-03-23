var fourSum = function(nums, target) {
    let total = nums.length;
    let sorted = nums.sort((a, b) => a - b);
    let map = {};
    let ans = [];



    for (let i=0; i<total; i++) {
        for (let j=i+1; j<total; j++) {
             let k = j+1;
            let l = total - 1;

            while (k < l) {
                let sum = sorted[i] + sorted[j] + sorted[k] + sorted[l];

                if (sum < target) {
                    k += 1;
                } else if (sum > target) {
                    l -= 1;
                } else {
                    let sumArr = [sorted[i], sorted[j], sorted[k], sorted[l]];
                    if (!map[sumArr]) {
                        ans.push(sumArr);
                        map[sumArr] = true;
                    }
                    k += 1;
                    l -= 1;
                }
            }
        }
    }

    return ans;
};
