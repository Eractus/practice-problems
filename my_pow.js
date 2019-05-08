var myPow = function(x, n) {
//     if (n === 0) {
//         return 1.0;
//     }

//     if (x === 1) {
//         return x;
//     }

//     if (x === -1) {
//         if (n % 2 === 0) {
//             x *= -1;
//             return x;
//         } else {
//             return x;
//         }
//     }

//     let neg = false;

//     if (n < 0) {
//         n *= -1;
//         neg = true;
//     }

//     let prod = x;

//     while (n > 1) {
//         prod *= x
//         n -= 1
//     }

//     if (neg) {
//         prod = 1 / prod;
//     }

//     return prod;
    if (n === 0) return 1;
    else if (n === 1) return x;
    else if (n === -1) return 1 / x;
    else if (n % 2 === 0) {
        const m = myPow(x, n/2);
        return m * m;
    }
    else return x * myPow(x, n - 1);
};
