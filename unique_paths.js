var uniquePaths = function(m, n) {
    if (m === 1 && n === 1) {
        return 1;
    }

    // let paths = {};
    let finish = [n-1, m-1];
    let grid = [];
    for (let i=1; i<=n; i++) {
        let row = [];
        for (let j=1; j<=m; j++) {
            row.push(0);
        }
        grid.push(row);
    }

    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (i === 0 || j === 0) {
                grid[i][j] = 1;
            }
        }
    }

    for (let i=1; i<n; i++) {
        for (let j=1; j<m; j++) {
            let pathsFromTop = grid[i-1][j];
            let pathsFromLeft = grid[i][j - 1];
            grid[i][j] = pathsFromTop + pathsFromLeft;
        }
    }

    return grid[finish[0]][finish[1]];

//     search(["right"], [0, 1]);
//     search(["down"], [1, 0]);

//     function search(path, pos) {
//         if (pos[0] === finish[0] && pos[1] === finish[1]) {
//             paths[path] = true;
//             return;
//         } else {
//             let right = [pos[0], pos[1] + 1];
//             let down = [pos[0] + 1, pos[1]];

//             if (grid[right[0]]) {
//                 if (grid[right[0]][right[1]]) {
//                     path.push("right");
//                     search(path, right);
//                 }
//             }

//             if (grid[down[0]]) {
//                 if (grid[down[0]][down[1]]) {
//                     path.push("down");
//                     search(path, down);
//                 }
//             }
//         }
//     }
//
//     return Object.keys(paths).length
};
