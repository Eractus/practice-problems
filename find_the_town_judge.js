var findJudge = function(N, trust) {
    if (N === 1) {
        return N;
    }

    let trustObj = {};

    trust.forEach(pair => {
        let truster = pair[0];
        let trustee = pair[1];

        if (!trustObj[trustee]) {
            trustObj[trustee] = [truster];
        } else {
            trustObj[trustee].push(truster);
        }
    });

    let judge = -1;
    let townsPeople = Object.keys(trustObj);
    townsPeople.forEach(per => {
        if (trustObj[per].length === (N - 1)) {
            let nonJudge = townsPeople.filter(p => p !== per);
            let judgeExist = true;
            nonJudge.forEach(pp => {
                if (trustObj[pp].includes(parseInt(per))) {
                    judgeExist = false;
                    return;
                }
            });
            if (judgeExist) {
                judge = per;
                return;
            }
        }
    });

    return judge;
};
