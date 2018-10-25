var circularArrayLoop = function(nums) {
    let loop = false;
    let length = nums.length;
    let direction;
    if (nums[0] > -1) {
        direction = true;
    } else {
        direction = false;
    }
    let temp = 0;
    for (let i=0; i < length; i++) {
        if (direction !== (nums[i] > -1)) {
            return false;
            }
        temp = (temp + nums[i]) % length;
        i = temp - 1;
        if (temp === 0) {
            loop = true;
            break;
        }
    }

    return loop;
};
