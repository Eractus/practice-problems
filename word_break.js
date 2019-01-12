/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //change wordDict into a hashset of only relevant words for quicker lookup
    let dict = {};
    wordDict.forEach(word => {
        if (s.length >= word.length && s.includes(word)) {
            dict[word] = true;
        }
    }) ;

//     // if input is a word in the dictionary, return true
//     if (dict[s] === true) {
//         return true;
//     }

//     let currStr = "";
//     let boo = false;
//     for (let i=0; i<s.length; i++) {
//         currStr = currStr + s[i];
//         let possStr = wordDict.filter(word => currStr === word.substring(0, currStr.length));

//         if (possStr.length > 1) {
//             continue;
//         } else if (dict[currStr] === true) {
//             boo = true;
//             currStr = "";
//         } else {
//             if (boo === true) {
//                 boo = false;
//             }
//             continue;
//         }
//     }

//     return boo;

    // create an array of the possible word lengths, or "increments", to analyze the substrings of input string - anything in between can't be reached with dictionary words so we won't need to evaluate.
    let wordLengths = [];
    wordDict.forEach(word => {
        let len = word.length;
        if (!wordLengths.includes(len)) {
            wordLengths.push(len);
        }
    });

    // create a hash of indices in the input string that are reachable based on the possible word lengths and and whether or not the substring from beginning to that index is an actual word in the dict hash
    let reachable = {};
    // initialize with the first index as being true because you will always analyze it
    reachable[0] = true;

    for (let i=0; i<s.length; i++) {
        // if it's not a reachable index, don't bother with it
        if (!reachable[i]) {
            continue;
        }
        // at every valid index of the input string, add each possible length of valid dictionary words to determine each "reachable" index in the input string
        for (let j=0; j<wordLengths.length; j++) {
            let endIdx = i + wordLengths[j];

            // if we've already determined this endIdx is reachable in the input string, move on
            if (reachable[endIdx]) {
                continue;
            }

            // otherwise, let's determine if the substring from the input string's current reachable index to the endIdx is a word in the dictionary.
            let substr = s.substring(i, endIdx);

            // if it is, update the reachable hash value at this endIdx to be true to indicate there is a valid word that can reach this index (from a previously determined, reachable index)
            if (dict[substr]) {
                reachable[endIdx] = true;
            }
        }
    }

    // in the end, check if the last index of the input string is reachable in some way - otherwise it's not so return false
    return reachable[s.length] || false;
};
