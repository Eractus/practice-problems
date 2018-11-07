var replaceWords = function(dict, sentence) {
    let sentArr = sentence.split(" ");
    let ans = [];

    for (let i=0; i < sentArr.length; i++) {
        let rtLen;
        let rt;
        for (let j=0; j < dict.length; j++) {
            let len = dict[j].length;
            if (sentArr[i].slice(0, len) === dict[j]) {
                if (!rtLen) {
                    rtLen = len;
                    rt = dict[j];
                } else if (len < rtLen) {
                    rtLen = len;
                    rt = dict[j];
                }
            }

            if (j === dict.length - 1 && rt) {
                ans.push(rt);
            }
        }

        if (!rt) {
            ans.push(sentArr[i]);
        }
    }

    let answ = ans.join(' ');
    return answ;
};
