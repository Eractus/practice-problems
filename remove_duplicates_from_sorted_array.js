var removeDuplicates = function(nums) {
    let i = 0;

    for (let j=1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    let ans = i+1;
    return ans;
};
