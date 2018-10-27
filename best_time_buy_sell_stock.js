var maxProfit = function(prices) {
    // let maxProf = 0;
    // for (let i=0; i < prices.length; i++) {
    //     for (let j=i+1; j < prices.length; j++) {
    //         if (prices[j] > prices[i]) {
    //             let currProfit = prices[j] - prices[i];
    //             if (currProfit > maxProfit) {
    //                 maxProfit = currProfit;
    //             }
    //         }
    //     }
    // }
    //
    // return maxProf;
    let minPrice = prices[0];
    let maxProf = 0;
    for (let i=1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProf) {
            maxProfit = prices[i] - minPrice;
        }

    }

    return maxProf;
};
