var groupAnagrams = function(strs) {
    let hmap = {};
    let idx = 0;
    let ans = [];

    strs.forEach(str => {
        let arr = str.split("").sort();
        if (hmap[arr] === undefined) {
            hmap[arr] = idx;
            idx += 1;
            ans.push([str]);
        } else {
            let i = hmap[arr];
            ans[i].push(str);
        }
    });

    return ans;
};
