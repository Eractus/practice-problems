var searchInsert = function(nums, target) {
    let ans;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right + 1) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            ans = mid;
            break;
        }
    }

    if (ans === undefined) {
        if (nums[left] > target) {
            ans = left;
        } else if (nums[left] === undefined) {
            ans = nums.length;
        } else {
            ans = left + 1;
        }
    }

    return ans;
};
