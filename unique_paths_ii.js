var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    if (obstacleGrid.length === 1 && obstacleGrid[0].length === 1) {
        return 1;
    }

    let finish = [obstacleGrid.length - 1, obstacleGrid[0].length - 1];
    let grid = [];
    for (let i=0; i<=finish[0]; i++) {
        let row = [];
        for (let j=0; j<=finish[1]; j++) {
            row.push(0);
        }
        grid.push(row);
    }

    grid[0][0] = 1;

    for (let i=0; i<=finish[0]; i++) {
        for (let j=0; j<=finish[1]; j++) {
            if (i === 0 & j === 0) {
                continue;
            }

            if (i === 0) {
                if (obstacleGrid[i][j] === 0 && grid[i][j-1] === 1) {
                    grid[i][j] = 1;
                }
            } else if (j === 0) {
                if (obstacleGrid[i][j] === 0 && grid[i-1][j] === 1) {
                    grid[i][j] = 1;
                }
            }
        }
    }

    for (let i=1; i<=finish[0]; i++) {
        for (let j=1; j<=finish[1]; j++) {
            if (obstacleGrid[i][j] === 0) {
                let pathsFromTop = grid[i-1][j];
                let pathsFromLeft = grid[i][j - 1];
                grid[i][j] = pathsFromTop + pathsFromLeft;
            }
        }
    }

    return grid[finish[0]][finish[1]];
};
