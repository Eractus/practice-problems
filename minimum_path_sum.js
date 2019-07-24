var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let end = [m-1, n-1];

  let sumsGrid = [];
  for (let i=0; i<m; i++) {
      sumsGrid.push(Array(n).fill());
  }

  sumsGrid[0][0] = grid[0][0];

  for (let i=0; i<m; i++) {
      for (let j=0; j<n; j++) {
          if (i===0 && j===0) {
              continue;
          }

          if (i === 0) {
              sumsGrid[i][j] = sumsGrid[i][j-1] + grid[i][j];
          } else if (j === 0) {
              sumsGrid[i][j] = sumsGrid[i-1][j] + grid[i][j];
          }
      }
  }

  for (let i=1; i<m; i++) {
    for (let j=1; j<n; j++) {
      let leftSum = sumsGrid[i-1][j];
      let topSum = sumsGrid[i][j-1];
      if (leftSum <= topSum) {
        sumsGrid[i][j] = grid[i][j] + leftSum;
      } else {
        sumsGrid[i][j] = grid[i][j] + topSum;
      }
    }
  }

  return sumsGrid[end[0]][end[1]];
};
