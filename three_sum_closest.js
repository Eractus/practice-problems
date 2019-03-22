var threeSumClosest = function(nums, target) {
    let total = nums.length;
    let sorted = nums.sort((a, b) => a - b);
    let ans;

    for (let i=0; i<total-2; i++) {
        if (ans === target) {
            break;
        }

        let j = i + 1;
        let k = total - 1;

        while (j < k) {
            let sum = sorted[i] + sorted[j] + sorted[k];

            if (sum === target) {
                ans = target;
                break;
            }

            if (sum < target) {
                j += 1;
            } else {
                k -= 1;
            }

            if (ans === undefined) {
                ans = sum;
            } else {
                let diff = Math.abs(sum - target);
                if (diff < Math.abs(ans - target)) {
                    ans = sum;
                }
            }
        }

    }

    return ans;
};
