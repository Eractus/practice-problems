var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  if (obstacleGrid.length === 1 && obstacleGrid[0].length === 1) {
    return 1;
  }

  let finish = [obstacleGrid.length - 1, obstacleGrid[0].length - 1];

  obstacleGrid[0][0] = 1;

  let i = 0;
  for (let j = 1; j <= finish[1]; j++) {
    if (obstacleGrid[i][j] === 1) {
      obstacleGrid[i][j] = 0;
    } else if (obstacleGrid[i][j] === 0 && obstacleGrid[i][j - 1] !== 0) {
      obstacleGrid[i][j] = 1;
    }
  }

  let l = 0;
  for (let k = 1; k <= finish[0]; k++) {
    if (obstacleGrid[k][l] === 1) {
      obstacleGrid[k][l] = 0;
    } else if (obstacleGrid[k][l] === 0 && obstacleGrid[k - 1][l] !== 0) {
      obstacleGrid[k][l] = 1;
    }
  }

  for (let m = 1; m <= finish[0]; m++) {
    for (let n = 1; n <= finish[1]; n++) {
      if (obstacleGrid[m][n] === 1) {
        obstacleGrid[m][n] = 0;
      } else if (obstacleGrid[m][n] === 0) {
        let pathsFromTop = obstacleGrid[m - 1][n];
        let pathsFromLeft = obstacleGrid[m][n - 1];
        obstacleGrid[m][n] = pathsFromTop + pathsFromLeft;
      }
    }
  }

  return obstacleGrid[finish[0]][finish[1]];
};
