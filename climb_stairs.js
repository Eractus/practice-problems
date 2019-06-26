var climbStairs = function(n) {
    let steps = {
        1: 1,
        2: 2
    };

    for (let i=3; i<=n; i++) {
        let prevTwo = steps[i-2];
        let prevOne = steps[i-1];
        let ways = prevTwo + prevOne;
        steps[i] = ways;
    }

    return steps[n];
};
