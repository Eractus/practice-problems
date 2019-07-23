var rotateMatrix = function(m, k) {
  let diagonals = [];
  let len = m.length;
  let mid = Math.floor(len / 2);
  for (let i=0; i<len; i++) {
    if (i !== mid) {
      diagonals.push(m[i][len - 1 - i]);
    }
    diagonals.push(m[i][i]);
  }

  let ans = m;
  while (k > 0) {
    let rotMat = [];
    for (let i=0; i< len; i++) {
      rotMat.push(new Array(len));
    }
    for (let i=0; i<len; i++) {
      for (let j=0; j<len; j++) {
        let cell = ans[i][j];
        if (diagonals.includes(cell)) {
          rotMat[i][j] = cell;
        } else {
          rotMat[j][len-1-i] = cell;
        }
      }
    }

    ans = rotMat;
    k -= 1;
  }

  return ans;
};
