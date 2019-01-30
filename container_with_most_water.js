var maxArea = function(height) {
    let max = 0;
    for (let i=0; i<height.length; i++) {
        for (let j = i+1; j<height.length; j++) {
            let possHeight;
            height[i] >= height[j] ? possHeight = height[j] : possHeight = height[i];
            let temp = possHeight * (j - i);
            if (temp > max) {
                max = temp;
            }
        }
    }

    return max;
};
