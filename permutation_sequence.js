var getPermutation = function(n, k) {
    let array = [];
    for (let i=1; i<=n; i++) {
        array.push(i);
    }
    let perms = [];

    backtrack(array, []);

    function backtrack(arr, col) {
        if (perms.length === k) {
            return;
        }
        if (arr.length === 0) {
            perms.push(col);
        } else {
            arr.forEach(num => {
                let temp = arr.filter(el => el !== num);
                backtrack(temp, col.concat([num]));
            });
        }
    }

    let ans = "";
    perms[k - 1].forEach(int => {
        let x = int;
        let str = x.toString();
        ans = ans.concat(str);
    });

    return ans;
};
