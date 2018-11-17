function makeAnagram(a, b) {
    let arr1 = Array.from(a);
    let arr2 = Array.from(b);
    let total = arr1.length + arr2.length;
    let matches = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                matches += 2;
                arr2.splice(j, 1);
                break;
            }
        }
    }

    let ans = total - matches;
    return ans;
}
