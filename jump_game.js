var canJump = function(nums) {
    let target = nums.length - 1;
    let steps = nums[0];
    for(let i = 1; i <= target; i++) {
        steps--;

        if (steps < 0) {
            return false;
        }

        if (nums[i] > steps) {
            steps = nums[i];
        }
    }
    return true;
//     let target = nums.length - 1;
//     let output = false

//     backTrack(nums, 0, target)

//     function backTrack(nums, curr_idx, target) {
//         let steps = nums[curr_idx];

//         if (curr_idx + steps >= target) {
//             output = true;
//             return;
//         }

//         if (steps === 0 && curr_idx !== target) {
//             return;
//         }

//         let stepsArr = [...Array(steps).keys()];
//         for (let i=0; i<stepsArr.length; i++) {
//             let step = stepsArr[i];
//             step += 1;
//             curr_idx += step;
//             backTrack(nums, curr_idx, target);
//         }
//     }

//     return output
};
