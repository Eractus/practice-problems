var search = function(nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let pivot = left + Math.floor((right - left) / 2);

        if (nums[pivot] === target) {
            return pivot;
        }

        if (nums[left] <= nums[pivot]) {
            if (nums[left] <= target && nums[pivot] > target) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        } else {
            if (nums[pivot] < target && nums[right] >= target) {
                left = pivot + 1;
            } else {
                right = pivot - 1;
            }
        }
    }

    return -1;
};
