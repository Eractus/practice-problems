var combinationSum = function(candidates, target) {
    if (candidates.length === 0) {
        return [];
    }

    let ans = [];

    backTrack(ans, [], candidates, target);

    return ans;
};

var backTrack = function(ans, checked, unchecked, target) {
    let sum = 0;
    checked.forEach(c => {
        sum = sum + c;
    });

    if (sum === target) {
        ans.push(checked);
    }

    if (sum > target) {
        return;
    }

    for (let i=0; i<unchecked.length; i++) {
        backTrack(ans, checked.concat(unchecked[i]), unchecked.slice(i), target);
    }
};
