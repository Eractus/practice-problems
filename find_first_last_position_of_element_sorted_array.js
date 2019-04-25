var searchRange = function(nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }

    let ans = [-1, -1];
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi + 1)/ 2);

        if (nums[mid] < target) {
            lo = mid + 1;
        } else if (nums[mid] > target) {
            hi = mid - 1;
        } else {
            let start = lo, left = mid;
            while (start < left) {
                let m = Math.floor((start+left+1)/2);
                if (nums[m] === target) {
                    left = m - 1;
                } else {
                    start = m + 1;
                }
            }
            if (nums[left] === target) {
                ans[0] = left;
            } else {
                ans[0] = left + 1;
            }

            let right = mid, end = hi;
            while (right < end) {
                let m = Math.floor((right+end+1)/2);
                if (nums[m] === target) {
                    right = m + 1;
                } else {
                    end = m - 1;
                }
            }
            if (nums[right] === target) {
                ans[1] = right;
            } else {
                ans[1] = right - 1;
            }

            break;
        }
    }

    return ans;
};
