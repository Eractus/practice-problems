var numTrees = function(n) {
    return recurse(n, {});

    function recurse(n, memo) {
        if (memo[n] !== undefined) {
            return memo[n];
        }

        if (n <= 1) {
            return 1;
        }

        let sum = 0;
        for (let i=0; i<n; i++) {
            sum += recurse(i, memo) * recurse(n - i - 1, memo);
        }

        memo[n] = sum;
        return sum;
    }
};
