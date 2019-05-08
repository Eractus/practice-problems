var rotate = function(matrix) {
    let hmap = {};

    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix.length; j++) {
            let cell = matrix[i][j];
            if (!hmap[j]) {
                hmap[j] = [cell];
            } else {
                hmap[j].unshift(cell);
            }
        }
    }

    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix.length; j++) {
            matrix[i][j] = hmap[i][j];
        }
    }

    return matrix;
};
