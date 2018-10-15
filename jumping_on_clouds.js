function jumpingOnClouds(c) {
  let ans = 0;
  for (let i=0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i+2] === 0) {
        ans += 1;
        i += 1;
      } else if (c[i+1] === 0) {
        ans += 1;
      }
    }
  }

  return ans;
}
