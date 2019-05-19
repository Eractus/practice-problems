var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    let ans = [];
    let dict = {};

    for (let i=0; i<intervals.length; i++) {
        let interval = intervals[i];
        let beg = interval[0];
        let end = interval[1];

        if (beg === end) {
            if (!dict[beg]) {
                dict[beg] = "range";
            }
            continue;
        } else {
            for (let j=beg; j <= end; j++) {
                if (!dict[j] || dict[j] === "range") {
                    if (j === beg) {
                        dict[j] = "beg";
                    } else if (j === end) {
                        dict[j] = "end";
                    } else {
                        dict[j] = "overlap";
                    }
                } else {
                    if ((j === beg && dict[j] === "end") || (j === end && dict[j] === "beg") || j !== beg && j !== end) {
                        dict[j] = "overlap";
                    }
                }
            }
        }
    }


    let nums = Object.keys(dict).sort((a, b) => a-b);
    let range = [];
    let beg = false;
    for (let k=0; k< nums.length; k++) {
        let key = nums[k];
        if (dict[key] === "range") {
            let n = parseInt(key);
            ans.push([key, key]);
            continue;
        }

        if (dict[key] !== "overlap") {
            if (beg) {
                range.push(parseInt(key));
                ans.push(range);
                range = [];
                beg = !beg;
            } else {
                range.push(parseInt(key));
                beg = !beg;
            }
        }
    }

    return ans;
};
