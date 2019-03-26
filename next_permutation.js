var nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    if (nums.length === 2) {
        let swap1 = nums[0];
        let swap2 = nums[1];

        nums[0] = swap2;
        nums[1] = swap1;

        return nums;
    }

    let idx1, idx2;
    let pointer1 = nums[nums.length-1];

    for (let i=nums.length-2; i>=0; i--) {
        if (nums[i] >= pointer1) {
            pointer1 = nums[i];
        } else {
            idx1 = i;
            break;
        }
    }

    if (idx1 === undefined) {
        nums = nums.sort((a, b) => a - b);
        return nums;
    } else {
        let comparator = nums[idx1];
        let minDiff;

        for (let j=idx1+1; j<nums.length; j++) {
            let diff = nums[j] - comparator;
            if (diff <= 0) {
                break;
            }

            if (!minDiff || diff < minDiff) {
                minDiff = diff;
                idx2 = j;
            }

            if (minDiff === 1) {
                break;
            }
        }
    }

    let swapVal1 = nums[idx1];
    let swapVal2 = nums[idx2];

    nums[idx1] = swapVal2;
    nums[idx2] = swapVal1;

    let sorted = true;
    while (sorted === true) {
        sorted = false;
        for (let k=idx1+1; k<nums.length; k++) {
            if (nums[k] > nums[k+1]) {
                let temp1 = nums[k];
                let temp2 = nums[k+1];
                nums[k] = temp2;
                nums[k+1] = temp1;
                sorted = true;
            }
        }
    }

    return nums;
};
