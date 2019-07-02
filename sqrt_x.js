var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }

    let ans = 1;
    for (let i=1; i<x; i++) {
        let curr = i ** 2;
        if (curr === x) {
            ans = i;
            break;
        } else if (curr < x) {
            if (curr > ans) {
                ans = i;
            }
        } else {
            break;
        }
    }

//     let integers = [...Array(x).keys()];
//     while ((Math.floor(integers.length / 2))**2 > x) {
//         integers = integers.slice(0, Math.floor(integers.length / 2));
//     }

//     return bSearch(integers, x)
    return ans;
};

// var bSearch = function(array, tar) {
//     if (array.length === 1) {
//         return array[0];
//     }

//     let mid = array.length / 2;

//     if (array[mid] ** 2 === tar) {
//         return array[mid];
//     } else if (array[mid] ** 2 > tar) {
//         return bSearch(array.slice(0, mid), tar)
//     } else {
//         return bSearch(array.slice(mid, array.length), tar)
//     }
// }
